import os
import uuid
import asyncio
import logging
import tempfile
from concurrent.futures import ThreadPoolExecutor
from typing import Dict, Optional

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
    Accept multipart SVG upload and start a background geometry job.

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
            "glb": f"/api/result/{job_id}/model.glb",
            "stl": f"/api/result/{job_id}/model.stl",
        }
    if job["status"] == "error":
        resp["error"] = job.get("error")

    return resp


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


@app.get("/api/jobs")
def list_jobs():
    """List all job IDs and their statuses (debugging endpoint)."""
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
