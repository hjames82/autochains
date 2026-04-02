import os
import uuid
import asyncio
import logging
import tempfile
from concurrent.futures import ThreadPoolExecutor
from typing import Dict, Optional, Literal

from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, Response

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="AutoChains Web API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

executor = ThreadPoolExecutor(max_workers=4)

jobs: Dict[str, dict] = {}

JOBS_DIR = tempfile.mkdtemp(prefix="autochains_jobs_")


def _run_pipeline_sync(job_id: str, svg_files: dict, scale: float, mode: str) -> None:
    """Blocking pipeline run executed in a thread pool."""
    job = jobs[job_id]
    job["status"] = "running"

    log_msgs = []

    def progress(msg: str) -> None:
        log_msgs.append(msg)
        job["logs"] = list(log_msgs)

    try:
        from engine.pipeline import run_pipeline
        from engine.exporter import export_glb, export_stl, get_scene_stats

        results, msgs = run_pipeline(svg_files, scale=scale, progress_cb=progress)
        job["logs"] = msgs

        if not results:
            job["status"] = "error"
            job["error"] = "Pipeline produced no geometry. Check SVG files."
            return

        job_dir = os.path.join(JOBS_DIR, job_id)
        os.makedirs(job_dir, exist_ok=True)

        glb_path = os.path.join(job_dir, "model.glb")
        stl_path = os.path.join(job_dir, "model.stl")

        glb_data = export_glb(results)
        with open(glb_path, "wb") as f:
            f.write(glb_data)

        stl_data = export_stl(results)
        with open(stl_path, "wb") as f:
            f.write(stl_data)

        stats = get_scene_stats(results)

        job["status"] = "done"
        job["glb_path"] = glb_path
        job["stl_path"] = stl_path
        job["stats"] = stats
        job["_results"] = results

    except Exception as e:
        import traceback
        job["status"] = "error"
        job["error"] = str(e)
        job["traceback"] = traceback.format_exc()
        logging.exception("Pipeline failed for job %s", job_id)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/generate")
async def generate(
    files: list[UploadFile] = File(...),
    scale: float = Form(1.0),
    mode: str = Form("SVG"),
):
    """
    Accept multipart/form-data SVG upload and start a background geometry job.

    Fields:
    - files  : one or more .svg files (multipart upload)
    - scale  : uniform coordinate scale applied to SVG coordinates (default 1.0)
    - mode   : currently 'SVG' (DXF mode reserved for future use)

    Returns { job_id, status }
    """
    svg_files: Dict[str, bytes] = {}
    for upload in files:
        content = await upload.read()
        if upload.filename and upload.filename.lower().endswith(".svg"):
            svg_files[upload.filename] = content

    if not svg_files:
        raise HTTPException(status_code=400, detail="No SVG files found in upload.")

    job_id = str(uuid.uuid4())
    jobs[job_id] = {
        "status": "pending",
        "logs": [],
        "glb_path": None,
        "stl_path": None,
        "stats": None,
        "error": None,
        "_svg_files": svg_files,
        "_scale": scale,
        "_mode": mode,
    }

    loop = asyncio.get_event_loop()
    loop.run_in_executor(
        executor,
        _run_pipeline_sync,
        job_id,
        svg_files,
        scale,
        mode,
    )

    return {"job_id": job_id, "status": "pending"}


SWAP_COMPONENTS = {"nfc", "hook", "loop", "logo"}


def _apply_component(results, component: str, progress) -> None:
    """
    Build *component*, apply any boolean cut to the base body, and append
    the BodyResult to *results* (mutates in-place).
    """
    from engine.components import (
        build_nfc, build_hook, build_loop, build_logo, _find_base_body,
    )

    builders = {
        "nfc": build_nfc,
        "hook": build_hook,
        "loop": build_loop,
        "logo": build_logo,
    }

    progress(f"  Building '{component}' component ...")
    comp_br, cut_tool = builders[component](results)

    if cut_tool is not None and not cut_tool.is_empty():
        base_br, _ = _find_base_body(results)
        if base_br is None:
            base_br = results[0]
        new_bodies = []
        for body in base_br.bodies:
            try:
                cut_body = body - cut_tool
                new_bodies.append(cut_body if not cut_body.is_empty() else body)
            except Exception as e:
                progress(f"  WARNING: boolean cut failed ({e}); keeping original body.")
                new_bodies.append(body)
        base_br.bodies = new_bodies
        progress(f"  Pocket cut applied to base body (role={base_br.role!r}).")

    results.append(comp_br)
    progress(f"  Appended '{comp_br.name}' ({len(comp_br.bodies)} solid(s)).")


def _run_swap_sync(
    job_id: str,
    new_component: str,
) -> None:
    """
    Blocking swap run executed in a thread pool.

    Implements *cumulative* in-place assembly mutation:
      1. Snapshot the job's SVG files and applied-components list.
      2. Re-run the base geometry pipeline from SVGs to obtain a clean base.
      3. Re-apply every previously applied component EXCEPT those with the
         same role as *new_component* (i.e., replace same-role instances,
         preserve all others).
      4. Apply the new component on top.
      5. Overwrite the job's GLB/STL files and update in-memory state.

    This allows sequential swaps (e.g., add NFC then add Logo) to accumulate,
    while re-swapping the same component role replaces only that role.
    """
    job = jobs[job_id]

    # Snapshot before mutating status
    svg_files = job["_svg_files"]
    scale = job.get("_scale", 1.0)
    mode = job.get("_mode", "SVG")
    # _applied_components: ordered list of component role names previously applied
    prior_components: list[str] = [
        c for c in job.get("_applied_components", [])
        if c != new_component          # drop same-role entry (will be replaced)
    ]

    job["status"] = "running"
    log_msgs: list[str] = list(job.get("logs", []))

    def progress(msg: str) -> None:
        log_msgs.append(msg)
        job["logs"] = list(log_msgs)

    try:
        from engine.pipeline import run_pipeline
        from engine.exporter import export_glb, export_stl, get_scene_stats

        progress(
            f"Swap: rebuilding from SVGs (prior={prior_components!r} + new='{new_component}') ..."
        )
        results, msgs = run_pipeline(svg_files, scale=scale, progress_cb=progress)
        log_msgs.extend(msgs)

        if not results:
            job["status"] = "error"
            job["error"] = "Base pipeline produced no geometry for swap."
            return

        # Re-apply all previously applied components (except same role)
        for comp in prior_components:
            _apply_component(results, comp, progress)

        # Apply the new/replacement component
        _apply_component(results, new_component, progress)

        # Overwrite existing job files in-place (same URLs remain valid)
        job_dir = os.path.join(JOBS_DIR, job_id)
        os.makedirs(job_dir, exist_ok=True)
        glb_path = os.path.join(job_dir, "model.glb")
        stl_path = os.path.join(job_dir, "model.stl")

        glb_data = export_glb(results)
        with open(glb_path, "wb") as f:
            f.write(glb_data)

        stl_data = export_stl(results)
        with open(stl_path, "wb") as f:
            f.write(stl_data)

        stats = get_scene_stats(results)

        # Update persisted component list (order matters for cumulative rebuilds)
        updated_components = prior_components + [new_component]

        job["status"] = "done"
        job["glb_path"] = glb_path
        job["stl_path"] = stl_path
        job["stats"] = stats
        job["_results"] = results
        job["_svg_files"] = svg_files
        job["_scale"] = scale
        job["_mode"] = mode
        job["_applied_components"] = updated_components

        progress(
            f"Swap complete — assembly now has {updated_components!r}."
        )

    except Exception as e:
        import traceback
        job["status"] = "error"
        job["error"] = str(e)
        job["traceback"] = traceback.format_exc()
        logging.exception("Swap failed for job %s (component=%s)", job_id, new_component)


@app.post("/api/swap/{job_id}/{component}")
async def swap(job_id: str, component: str):
    """
    Add a parametric component to an existing completed job, mutating it in-place.

    Path parameters:
    - job_id   : the completed generation job to modify
    - component: one of 'nfc', 'hook', 'loop', 'logo'

    Returns { job_id, status } using the SAME job_id so the existing model URLs
    continue to point to the updated files.  Poll /api/job/{job_id} for progress.
    """
    component = component.lower()
    if component not in SWAP_COMPONENTS:
        raise HTTPException(
            status_code=400,
            detail=f"Unknown component '{component}'. Must be one of: {sorted(SWAP_COMPONENTS)}.",
        )

    job = jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found.")
    if job["status"] != "done":
        raise HTTPException(
            status_code=409,
            detail=f"Job '{job_id}' is not complete (status={job['status']}).",
        )
    if not job.get("_svg_files"):
        raise HTTPException(
            status_code=409,
            detail=f"Job '{job_id}' has no stored SVG data for swap.",
        )

    loop = asyncio.get_event_loop()
    loop.run_in_executor(executor, _run_swap_sync, job_id, component)

    return {"job_id": job_id, "status": "pending", "component": component}


@app.get("/api/job/{job_id}")
def job_status(job_id: str):
    """
    Poll job status.

    Returns { status, logs, stats?, error? }
    status ∈ { "pending", "running", "done", "error" }
    """
    job = jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail=f"Job {job_id!r} not found.")

    resp: dict = {
        "job_id": job_id,
        "status": job["status"],
        "logs": job.get("logs", []),
    }
    if job["status"] == "done":
        resp["stats"] = job.get("stats")
        resp["result_urls"] = {
            "gltf": f"/api/result/{job_id}/model.gltf",
            "glb": f"/api/result/{job_id}/model.glb",
            "stl": f"/api/result/{job_id}/model.stl",
        }
    if job["status"] == "error":
        resp["error"] = job.get("error")

    return resp


@app.get("/api/result/{job_id}/model.gltf")
def result_gltf(job_id: str):
    """
    Download the model as binary GLTF (GLB format) under the canonical .gltf alias.

    Note: the payload is binary GLB (magic bytes 'glTF') not ASCII JSON GLTF.
    Three.js GLTFLoader accepts both; use this endpoint with THREE.GLTFLoader.
    """
    job = jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Job not found.")
    if job["status"] != "done":
        raise HTTPException(status_code=409, detail=f"Job not complete (status={job['status']}).")
    path = job.get("glb_path")
    if not path or not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Model file not found.")
    return FileResponse(
        path,
        media_type="model/gltf-binary",
        filename="model.glb",
        headers={"Content-Disposition": "attachment; filename=model.glb"},
    )


@app.get("/api/result/{job_id}/model.glb")
def result_glb(job_id: str):
    """Download the GLB result for a completed job."""
    job = jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Job not found.")
    if job["status"] != "done":
        raise HTTPException(status_code=409, detail=f"Job not complete (status={job['status']}).")
    path = job.get("glb_path")
    if not path or not os.path.exists(path):
        raise HTTPException(status_code=404, detail="GLB file not found.")
    return FileResponse(
        path,
        media_type="model/gltf-binary",
        filename="model.glb",
        headers={"Content-Disposition": "attachment; filename=model.glb"},
    )


@app.get("/api/result/{job_id}/model.stl")
def result_stl(job_id: str):
    """Download the STL result for a completed job."""
    job = jobs.get(job_id)
    if job is None:
        raise HTTPException(status_code=404, detail="Job not found.")
    if job["status"] != "done":
        raise HTTPException(status_code=409, detail=f"Job not complete (status={job['status']}).")
    path = job.get("stl_path")
    if not path or not os.path.exists(path):
        raise HTTPException(status_code=404, detail="STL file not found.")
    return FileResponse(
        path,
        media_type="application/octet-stream",
        filename="model.stl",
        headers={"Content-Disposition": "attachment; filename=model.stl"},
    )


_DEBUG = os.environ.get("AUTOCHAINS_DEBUG", "").lower() in ("1", "true", "yes")


@app.get("/api/jobs", include_in_schema=_DEBUG)
def list_jobs():
    """List all job IDs and statuses — only active when AUTOCHAINS_DEBUG=1."""
    if not _DEBUG:
        raise HTTPException(status_code=404, detail="Not found.")
    return {
        jid: {"status": j["status"]}
        for jid, j in jobs.items()
    }


FRONTEND_DIST = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

if os.path.isdir(FRONTEND_DIST):
    app.mount("/assets", StaticFiles(directory=os.path.join(FRONTEND_DIST, "assets")), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    def serve_spa(full_path: str):
        index = os.path.join(FRONTEND_DIST, "index.html")
        return FileResponse(index)
