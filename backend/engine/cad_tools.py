"""
CAD Tools Engine — builds 3D geometry from SVG layers + feature operations.

Supported features (applied in order per layer):
  extrude     — extrude the 2D profile to a height
  press_pull  — extend / retract the top face (delta height)
  revolve     — revolve the profile around the Y axis
  fillet      — round the outer/inner edges of the profile (Shapely buffer trick)
  shell       — hollow out the solid with a wall thickness
  holes       — subtract cylinders at specified XY positions
  combine     — boolean union/subtract/intersect with another layer body
  split       — split the body at a Z plane

All geometry uses manifold3d.  Fillet is approximated on the 2D profile
(Shapely exterior/interior buffer) and re-extruded — not a true 3D fillet.
"""
from __future__ import annotations

import base64
import logging
import math
import re
from typing import Any, Dict, List, Optional, Tuple

import manifold3d as m3d
import numpy as np
from shapely.geometry import Polygon, MultiPolygon
from shapely.geometry.polygon import orient as shapely_orient
from shapely.ops import unary_union
from shapely.validation import make_valid

from .pipeline import BodyResult

log = logging.getLogger(__name__)

# ── SVG path → Shapely Polygon ───────────────────────────────────────────────
# We re-use the existing svg_extractor for path→polygon conversion
from .svg_extractor import extract_polygons_from_svg

# ── CrossSection helpers ──────────────────────────────────────────────────────
def _shapely_to_crosssection(polys: List[Polygon], flip_y: bool = True) -> Optional[m3d.CrossSection]:
    """Convert a list of Shapely Polygons to a manifold3d CrossSection."""
    contours = []
    for poly in polys:
        if poly.is_empty or poly.area < 1e-6:
            continue
        poly = make_valid(poly)
        if isinstance(poly, MultiPolygon):
            parts = list(poly.geoms)
        else:
            parts = [poly]
        for part in parts:
            if part.is_empty or part.area < 1e-6:
                continue
            ext = list(part.exterior.coords)
            if flip_y:
                ext = [(x, -y) for x, y in ext]
            contours.append(ext)
            for interior in part.interiors:
                inn = list(interior.coords)
                if flip_y:
                    inn = [(x, -y) for x, y in inn]
                contours.append(inn)
    if not contours:
        return None
    try:
        return m3d.CrossSection(contours)
    except Exception as e:
        log.debug("CrossSection build failed: %s", e)
        return None

def _paths_to_polygons(paths: List[str], svg_size: Dict) -> List[Polygon]:
    """Convert SVG path-data strings to Shapely Polygons via a temporary SVG.

    Returns polygons normalized to CCW exterior winding so they can be passed
    directly to _shapely_to_crosssection(flip_y=False) without double-flipping.
    """
    w = svg_size.get("w", 100)
    h = svg_size.get("h", 100)
    body = "\n".join(f'<path d="{d}"/>' for d in paths)
    svg_bytes = (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
        f'{body}</svg>'
    ).encode()
    try:
        polys = extract_polygons_from_svg(svg_bytes)
        if not polys:
            return []
        # Normalize to CCW exterior (sign=1.0) so manifold3d treats them as outer rings.
        return [shapely_orient(p, sign=1.0) for p in polys]
    except Exception as e:
        log.debug("paths_to_polygons failed: %s", e)
        return []

# ── Feature applicators ───────────────────────────────────────────────────────
def _apply_extrude(polys: List[Polygon], params: Dict) -> Optional[m3d.Manifold]:
    height = float(params.get("height", 5.0))
    taper  = float(params.get("taper_angle", 0.0))
    cs = _shapely_to_crosssection(polys, flip_y=False)
    if cs is None or cs.area() < 1e-6:
        return None
    if taper != 0.0:
        tan_a = math.tan(math.radians(abs(taper)))
        scale = max(0.01, 1.0 - tan_a * height / max(cs.bounds()[2], cs.bounds()[3], 1e-6))
        body = m3d.Manifold.extrude(cs, height, 0, taper, [scale, scale])
    else:
        body = m3d.Manifold.extrude(cs, height)
    return body if not body.is_empty() else None


def _apply_press_pull(body: m3d.Manifold, polys: List[Polygon], params: Dict) -> m3d.Manifold:
    """Extend or retract the top face (positive = taller, negative = shorter)."""
    delta = float(params.get("delta", 2.0))
    if abs(delta) < 1e-9 or body.is_empty():
        return body
    mesh = body.to_mesh()
    verts = np.array(mesh.vert_properties)
    z_max = float(verts[:, 2].max())
    z_min = float(verts[:, 2].min())
    current_h = z_max - z_min
    new_h = max(0.1, current_h + delta)
    cs = _shapely_to_crosssection(polys, flip_y=False)
    if cs is None:
        return body
    return m3d.Manifold.extrude(cs, new_h).translate([0.0, 0.0, z_min])


def _apply_revolve(polys: List[Polygon], params: Dict) -> Optional[m3d.Manifold]:
    degrees = float(params.get("degrees", 360.0))
    axis    = params.get("axis", "Y")
    segments = max(12, int(params.get("segments", 36)))
    cs = _shapely_to_crosssection(polys, flip_y=False)
    if cs is None or cs.area() < 1e-6:
        return None
    body = m3d.Manifold.revolve(cs, segments, degrees)
    if axis.upper() == "Y":
        body = body.rotate([90.0, 0.0, 0.0])
    elif axis.upper() == "X":
        body = body.rotate([0.0, 90.0, 0.0])
    return body if not body.is_empty() else None


def _apply_fillet(body: m3d.Manifold, polys: List[Polygon], params: Dict, height: float) -> m3d.Manifold:
    """
    Approximate fillet by rounding the 2D profile with Shapely buffer trick,
    then re-extruding to the same height.

    buffer(-r).buffer(+r)  rounds outer convex corners
    buffer(+r).buffer(-r)  fills inner concave corners
    """
    radius = float(params.get("radius", 1.0))
    mode   = params.get("mode", "outer")   # "outer" | "inner" | "both"
    if radius <= 0:
        return body

    try:
        rounded = []
        for poly in polys:
            if poly.is_empty:
                continue
            if mode == "outer" or mode == "both":
                p = poly.buffer(-radius, resolution=16).buffer(radius, resolution=16)
            else:
                p = poly.buffer(radius, resolution=16).buffer(-radius, resolution=16)
            if mode == "both":
                p = p.buffer(radius, resolution=16).buffer(-radius, resolution=16)
            if not p.is_empty and p.area > 1e-6:
                rounded.append(make_valid(p))
        if not rounded:
            return body
        cs = _shapely_to_crosssection(rounded, flip_y=False)
        if cs is None:
            return body
        if body.is_empty():
            new_body = m3d.Manifold.extrude(cs, height)
        else:
            mesh = body.to_mesh()
            verts = np.array(mesh.vert_properties)
            z_min = float(verts[:, 2].min())
            z_max = float(verts[:, 2].max())
            new_body = m3d.Manifold.extrude(cs, z_max - z_min).translate([0, 0, z_min])
        return new_body if not new_body.is_empty() else body
    except Exception as e:
        log.debug("fillet failed: %s", e)
        return body


def _apply_shell(body: m3d.Manifold, polys: List[Polygon], params: Dict) -> m3d.Manifold:
    """Hollow out the solid to a wall thickness."""
    thickness = float(params.get("thickness", 1.5))
    if thickness <= 0 or body.is_empty():
        return body
    try:
        mesh = body.to_mesh()
        verts = np.array(mesh.vert_properties)
        z_min = float(verts[:, 2].min())
        z_max = float(verts[:, 2].max())
        inner_polys = []
        for poly in polys:
            shrunk = poly.buffer(-thickness, resolution=16)
            if not shrunk.is_empty and shrunk.area > 1e-6:
                inner_polys.append(make_valid(shrunk))
        if not inner_polys:
            return body
        cs_inner = _shapely_to_crosssection(inner_polys, flip_y=False)
        if cs_inner is None:
            return body
        inner_h = (z_max - z_min) - thickness   # keep a floor
        if inner_h <= 0:
            return body
        cavity = m3d.Manifold.extrude(cs_inner, inner_h).translate([0, 0, z_min + thickness])
        result = body - cavity
        return result if not result.is_empty() else body
    except Exception as e:
        log.debug("shell failed: %s", e)
        return body


def _apply_holes(body: m3d.Manifold, params: Dict) -> m3d.Manifold:
    """Subtract cylindrical holes from the body."""
    holes = params.get("holes", [])
    if not holes or body.is_empty():
        return body
    try:
        mesh = body.to_mesh()
        verts = np.array(mesh.vert_properties)
        z_min = float(verts[:, 2].min())
        z_max = float(verts[:, 2].max())
        for h in holes:
            x = float(h.get("x", 0.0))
            y = float(h.get("y", 0.0))
            r = float(h.get("r", 1.0))
            depth = float(h.get("depth", z_max - z_min + 0.5))
            cyl = m3d.Manifold.cylinder(
                height=depth + 0.5,
                radius_low=r,
                circular_segments=32,
            ).translate([x, -y, z_min - 0.25])
            body = body - cyl
    except Exception as e:
        log.debug("holes failed: %s", e)
    return body


def _apply_split(body: m3d.Manifold, params: Dict) -> Tuple[m3d.Manifold, m3d.Manifold]:
    """Split body at a Z plane. Returns (bottom_part, top_part)."""
    plane_z = float(params.get("plane_z", 5.0))
    if body.is_empty():
        return body, m3d.Manifold()
    try:
        mesh = body.to_mesh()
        verts = np.array(mesh.vert_properties)
        z_min = float(verts[:, 2].min())
        z_max = float(verts[:, 2].max())
        span = max(abs(verts[:, 0].max() - verts[:, 0].min()),
                   abs(verts[:, 1].max() - verts[:, 1].min())) + 10.0

        x_c = float(np.mean(verts[:, 0]))
        y_c = float(np.mean(verts[:, 1]))

        half_bottom = m3d.Manifold.cube([span*2, span*2, plane_z - z_min + 0.01]).translate(
            [x_c - span, y_c - span, z_min - 0.005]
        )
        half_top = m3d.Manifold.cube([span*2, span*2, z_max - plane_z + 0.01]).translate(
            [x_c - span, y_c - span, plane_z - 0.005]
        )
        bottom = body ^ half_bottom
        top    = body ^ half_top
        return (
            bottom if not bottom.is_empty() else m3d.Manifold(),
            top    if not top.is_empty()    else m3d.Manifold(),
        )
    except Exception as e:
        log.debug("split failed: %s", e)
        return body, m3d.Manifold()


# ── Per-layer feature pipeline ────────────────────────────────────────────────
def build_layer(
    layer_def: Dict,
    svg_size: Dict,
    other_bodies: Dict[str, m3d.Manifold],
) -> Optional[m3d.Manifold]:
    """
    Build the 3D body for a single layer by applying its feature list in order.

    Parameters
    ----------
    layer_def   : dict with keys: paths, features, color
    svg_size    : {w, h} of the source SVG (user units)
    other_bodies: {layer_id: manifold} for combine operations referencing other layers

    Returns a manifold3d Manifold or None if nothing was produced.
    """
    paths    = layer_def.get("paths", [])
    features = layer_def.get("features", [])

    polys = _paths_to_polygons(paths, svg_size)
    if not polys:
        log.debug("Layer %s: no polygons from paths", layer_def.get("id","?"))
        return None

    body: Optional[m3d.Manifold] = None
    current_height = 5.0   # default extrude height, updated when extrude is applied

    for feat in features:
        if not feat.get("enabled", True):
            continue
        ftype  = feat.get("type", "")
        params = feat.get("params", {})
        log.debug("  feature %s on layer %s", ftype, layer_def.get("id","?"))

        try:
            if ftype == "extrude":
                current_height = float(params.get("height", 5.0))
                body = _apply_extrude(polys, params)

            elif ftype == "press_pull":
                if body is None:
                    body = _apply_extrude(polys, {"height": current_height})
                if body:
                    body = _apply_press_pull(body, polys, params)

            elif ftype == "revolve":
                body = _apply_revolve(polys, params)

            elif ftype == "fillet":
                if body is None:
                    body = _apply_extrude(polys, {"height": current_height})
                if body:
                    body = _apply_fillet(body, polys, params, current_height)

            elif ftype == "shell":
                if body is None:
                    body = _apply_extrude(polys, {"height": current_height})
                if body:
                    body = _apply_shell(body, polys, params)

            elif ftype == "holes":
                if body is None:
                    body = _apply_extrude(polys, {"height": current_height})
                if body:
                    body = _apply_holes(body, params)

            elif ftype == "split":
                if body is None:
                    body = _apply_extrude(polys, {"height": current_height})
                if body:
                    bottom, top = _apply_split(body, params)
                    keep = params.get("keep", "bottom")
                    body = bottom if keep == "bottom" else top

            elif ftype == "combine":
                target_id = params.get("target_layer_id", "")
                operation  = params.get("operation", "union")
                other = other_bodies.get(target_id)
                if other is not None and body is not None:
                    if operation == "union":
                        body = body + other
                    elif operation == "subtract":
                        body = body - other
                    elif operation == "intersect":
                        body = body ^ other

            elif ftype == "translate":
                if body is not None:
                    tx = float(params.get("x", 0))
                    ty = float(params.get("y", 0))
                    tz = float(params.get("z", 0))
                    body = body.translate([tx, ty, tz])

            elif ftype == "rotate":
                if body is not None:
                    rx = float(params.get("x", 0))
                    ry = float(params.get("y", 0))
                    rz = float(params.get("z", 0))
                    body = body.rotate([rx, ry, rz])

        except Exception as e:
            log.warning("Feature %s failed on layer %s: %s", ftype, layer_def.get("id","?"), e)

    if body is None or body.is_empty():
        # Auto-extrude if no extrude feature was specified
        body = _apply_extrude(polys, {"height": current_height})

    return body if (body and not body.is_empty()) else None


# ── Full build ────────────────────────────────────────────────────────────────
def build_cad_model(
    layers_def: List[Dict],
    svg_size: Dict,
    combine_ops: Optional[List[Dict]] = None,
    progress_cb=None,
) -> List[BodyResult]:
    """
    Build a 3D model from a list of layer definitions.

    Each layer_def:
        id, name, color, paths, features, material (color, metalness, roughness),
        visible

    Returns a list of BodyResult objects ready for export.
    """
    def progress(msg: str) -> None:
        if progress_cb:
            progress_cb(msg)
        log.info(msg)

    results: List[BodyResult] = []
    bodies_by_id: Dict[str, m3d.Manifold] = {}

    visible_layers = [l for l in layers_def if l.get("visible", True)]
    progress(f"CAD Build: {len(visible_layers)} visible layer(s)")

    for layer in visible_layers:
        lid   = layer.get("id", "unknown")
        name  = layer.get("name", lid)
        color = layer.get("material", {}).get("color") or layer.get("color", "#888888")
        hex_color = color.lstrip("#").upper() if color.startswith("#") else color

        progress(f"  [{lid}] Building '{name}' ...")
        body = build_layer(layer, svg_size, bodies_by_id)

        if body is None:
            progress(f"  [{lid}] WARNING: no geometry produced")
            continue

        bodies_by_id[lid] = body

        br = BodyResult(
            name=name,
            role="cad_layer",
            hex_color=hex_color,
            bodies=[body],
        )
        results.append(br)
        progress(f"  [{lid}] Done — {body.num_tri()} triangles")

    # Post-pass: global combine ops between layers
    for op in (combine_ops or []):
        try:
            src_id  = op.get("source")
            tgt_id  = op.get("target")
            oper    = op.get("operation", "union")
            if src_id not in bodies_by_id or tgt_id not in bodies_by_id:
                continue
            src = bodies_by_id[src_id]
            tgt = bodies_by_id[tgt_id]
            if oper == "union":
                combined = src + tgt
            elif oper == "subtract":
                combined = src - tgt
            else:
                combined = src ^ tgt
            bodies_by_id[src_id] = combined
            for br in results:
                if br.name == src_id or (br.bodies and id(br.bodies[0]) == id(src)):
                    br.bodies = [combined]
                    break
        except Exception as e:
            progress(f"  Combine op failed: {e}")

    return results
