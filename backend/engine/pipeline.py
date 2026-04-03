"""
5-phase 3D geometry pipeline.

Mirrors the Fusion 360 AutoChains_V85.py pipeline using trimesh + manifold3d + shapely.

Phase 1: Parse SVG files → ComponentDef registry + Shapely profiles
Phase 2: Extrude profiles → raw manifold3d solid bodies
Phase 3: Generate tool buffer bodies (offset profiles for pocket cuts)
Phase 4: Boolean cut operations (pocket tool cuts parent bodies)
Phase 5: Post-processing (chamfer/bevel top edge, trim-lip split, fillet bottom)
"""

import logging
from typing import Dict, List, Optional, Tuple, Callable

import numpy as np
import manifold3d as m3d
import trimesh
from shapely.geometry import Polygon, MultiPolygon
from shapely.validation import make_valid

from .parser import (
    ComponentDef,
    get_height_mm,
    get_level_sort_val,
    get_z_start_and_end,
    get_tool_offset_mm,
    BASE_HEIGHTS,
    LIP_LOCK_DEPTH,
    COVER_FLOOR_THICKNESS,
    GAP_FLOOR_THICKNESS,
    BASE_TRIM_LIP,
    TOL_DETAIL,
)
from .svg_extractor import extract_profiles, compute_profile_centroid

log = logging.getLogger(__name__)


def _signed_area_2d(coords) -> float:
    """Compute signed area of a 2D polygon (positive = CCW, negative = CW)."""
    n = len(coords)
    s = 0.0
    for i in range(n):
        x1, y1 = coords[i][0], coords[i][1]
        x2, y2 = coords[(i + 1) % n][0], coords[(i + 1) % n][1]
        s += x1 * y2 - x2 * y1
    return s / 2.0


def _ensure_ccw(coords) -> list:
    """Return the coordinate list in CCW order (positive signed area)."""
    if _signed_area_2d(coords) < 0:
        return list(reversed(coords))
    return list(coords)


def _ensure_cw(coords) -> list:
    """Return the coordinate list in CW order (negative signed area) for holes."""
    if _signed_area_2d(coords) > 0:
        return list(reversed(coords))
    return list(coords)


def _shapely_to_cross_section(poly: Polygon) -> Optional[m3d.CrossSection]:
    """
    Convert a Shapely Polygon (with possible holes) to a manifold3d CrossSection.

    manifold3d CrossSection requires:
    - Outer boundary: CCW (positive signed area)
    - Holes: CW (negative signed area)
    """
    if poly.is_empty or poly.area < 1e-6:
        return None

    exterior = list(poly.exterior.coords)[:-1]
    if len(exterior) < 3:
        return None

    exterior = _ensure_ccw(exterior)

    polys = [exterior]
    for interior in poly.interiors:
        hole_coords = list(interior.coords)[:-1]
        if len(hole_coords) >= 3:
            hole_coords = _ensure_cw(hole_coords)
            polys.append(hole_coords)

    try:
        cs = m3d.CrossSection(polys)
        if cs.area() < 1e-6:
            return None
        return cs
    except Exception as e:
        log.debug("CrossSection failed: %s", e)
        return None


def _extrude_polygon(
    poly: Polygon,
    z_start: float,
    z_end: float,
) -> Optional[m3d.Manifold]:
    """
    Extrude a Shapely Polygon from z_start to z_end (both in mm).
    Returns a manifold3d Manifold or None on failure.
    """
    height = z_end - z_start
    if height <= 1e-4:
        log.warning("Extrusion height %.4f is too small; skipping.", height)
        return None

    cs = _shapely_to_cross_section(poly)
    if cs is None:
        return None

    try:
        man = m3d.Manifold.extrude(cs, height)
        if not man.is_empty():
            man = man.translate([0.0, 0.0, z_start])
            return man
    except Exception as e:
        log.debug("Extrude failed: %s", e)

    return None


def _manifold_to_trimesh(man: m3d.Manifold) -> Optional[trimesh.Trimesh]:
    """Convert a manifold3d Manifold to a trimesh Trimesh."""
    try:
        m = man.to_mesh()
        verts = np.array(m.vert_properties, dtype=np.float64)
        tris = np.array(m.tri_verts, dtype=np.int32)
        mesh = trimesh.Trimesh(vertices=verts, faces=tris, process=False)
        mesh.fix_normals()
        return mesh
    except Exception as e:
        log.debug("manifold->trimesh failed: %s", e)
        return None


def _trimesh_to_manifold(mesh: trimesh.Trimesh) -> Optional[m3d.Manifold]:
    """Convert a trimesh Trimesh to a manifold3d Manifold."""
    try:
        verts = np.array(mesh.vertices, dtype=np.float32)
        tris = np.array(mesh.faces, dtype=np.int32)
        m = m3d.Mesh(vert_properties=verts, tri_verts=tris)
        man = m3d.Manifold(m)
        return man
    except Exception as e:
        log.debug("trimesh->manifold failed: %s", e)
        return None


def _bevel_edge_ring(
    poly: Polygon,
    z_position: float,
    bevel_mm: float = 0.2,
    at_top: bool = True,
) -> Optional[m3d.Manifold]:
    """
    Create a bevel-ring wedge solid to subtract from the top or bottom edge of a prism.

    The ring cross-section is the area between the original profile perimeter and an
    inward-offset profile, extruded over bevel_mm. Subtracting this from the body
    produces a 45-degree chamfer approximation.

    at_top=True  → wedge sits at (z_position - bevel_mm) to z_position  (chamfer top edge)
    at_top=False → wedge sits at z_position to (z_position + bevel_mm)  (chamfer bottom edge)
    """
    try:
        inner = poly.buffer(-bevel_mm)
        if inner.is_empty or inner.area < 1e-4:
            return None
        ring = poly.difference(inner)
        if ring.is_empty:
            return None
        ring_poly = ring if ring.geom_type == 'Polygon' else next(iter(ring.geoms), None)
        if ring_poly is None:
            return None
        cs = _shapely_to_cross_section(ring_poly)
        if cs is None:
            return None
        wedge = m3d.Manifold.extrude(cs, bevel_mm)
        if at_top:
            wedge = wedge.translate([0.0, 0.0, z_position - bevel_mm])
        else:
            wedge = wedge.translate([0.0, 0.0, z_position])
        return wedge
    except Exception as e:
        log.debug("_bevel_edge_ring failed: %s", e)
        return None


def _split_at_z(
    man: m3d.Manifold,
    z: float,
) -> Tuple[Optional[m3d.Manifold], Optional[m3d.Manifold]]:
    """
    Split a manifold into two parts at a horizontal plane at the given Z.
    Returns (bottom_part, top_part).
    """
    try:
        bounds = man.bounding_box()
        # bounds = (xmin, ymin, zmin, xmax, ymax, zmax)
        x_min, y_min, z_min_b, x_max, y_max, z_max_b = bounds
        if z <= z_min_b or z >= z_max_b:
            return man, None

        extent = max(x_max - x_min, y_max - y_min) * 2 + 10.0
        height = z_max_b - z_min_b + 10.0

        cutter = m3d.Manifold.cube([extent, extent, height])
        cutter = cutter.translate([-extent / 2, -extent / 2, z])

        bottom = man - cutter
        top = man ^ cutter

        if bottom.is_empty():
            bottom = None
        if top.is_empty():
            top = None

        return bottom, top
    except Exception as e:
        log.debug("split_at_z failed: %s", e)
        return man, None


class BodyResult:
    """Holds the final processed manifold and metadata for one component."""

    def __init__(
        self,
        name: str,
        role: str,
        hex_color: str,
        bodies: List[m3d.Manifold],
    ):
        self.name = name
        self.role = role
        self.hex_color = hex_color
        self.bodies = bodies


def run_pipeline(
    svg_files: Dict[str, bytes],
    scale: float = 1.0,
    progress_cb: Optional[Callable[[str], None]] = None,
) -> Tuple[List[BodyResult], List[str]]:
    """
    Run the full 5-phase pendant geometry pipeline.

    Parameters
    ----------
    svg_files : dict mapping filename → file bytes (already uploaded)
    scale     : uniform scale factor applied to SVG coordinates
    progress_cb : optional callback(message_str) for progress logging

    Returns
    -------
    (results, log_messages) where results is a list of BodyResult objects.
    """
    msgs: List[str] = []

    def emit(msg: str) -> None:
        msgs.append(msg)
        log.info(msg)
        if progress_cb:
            progress_cb(msg)

    emit("=== Phase 1: Parsing SVG files ===")

    import tempfile, os

    registry: Dict[str, ComponentDef] = {}
    profiles: Dict[str, List[Polygon]] = {}

    with tempfile.TemporaryDirectory() as tmp_dir:
        for filename, content in sorted(svg_files.items()):
            safe_name = os.path.basename(filename)
            if not safe_name.lower().endswith('.svg'):
                continue
            if os.sep in filename or (os.altsep and os.altsep in filename):
                emit(f"  WARNING: Rejected unsafe filename '{filename}'.")
                continue

            comp = ComponentDef.from_filename(safe_name)
            emit(f"  Parsed '{comp.name}': role={comp.role} level={comp.level_str} parent={comp.parent_name}")

            tmp_path = os.path.join(tmp_dir, safe_name)
            with open(tmp_path, 'wb') as f:
                f.write(content)

            polys = extract_profiles(tmp_path, scale=scale)
            if not polys:
                emit(f"  WARNING: No usable geometry in '{filename}' — skipping.")
                continue

            if comp.inflate_val and comp.inflate_val > 0:
                polys = [p.buffer(comp.inflate_val) for p in polys]

            all_polys: List[Polygon] = []
            for p in polys:
                if p.geom_type == 'MultiPolygon':
                    all_polys.extend(p.geoms)
                elif p.geom_type == 'Polygon':
                    all_polys.append(p)
            polys = [p for p in all_polys if p.area > 1e-4]

            if not polys:
                continue

            registry[comp.name] = comp
            profiles[comp.name] = polys
            emit(f"    -> {len(polys)} polygon(s), total area={sum(p.area for p in polys):.2f} mm²")

    if not registry:
        emit("ERROR: No components parsed — aborting.")
        return [], msgs

    sorted_comps = sorted(registry.values(), key=lambda c: get_level_sort_val(c.level_str))

    emit("\n=== Phase 2: Extruding raw bodies ===")

    raw_bodies: Dict[str, List[m3d.Manifold]] = {}

    for comp in sorted_comps:
        comp_profiles = profiles.get(comp.name)
        if not comp_profiles:
            continue

        parent = registry.get(comp.parent_name)
        z_start, z_end = get_z_start_and_end(comp, parent)

        emit(f"  Extruding '{comp.name}': z={z_start:.2f}→{z_end:.2f} mm")

        bodies: List[m3d.Manifold] = []
        for poly in comp_profiles:
            if poly.is_empty or poly.area < 1e-4:
                continue
            man = _extrude_polygon(poly, z_start, z_end)
            if man is not None and not man.is_empty():
                bodies.append(man)

        if bodies:
            raw_bodies[comp.name] = bodies
            emit(f"    -> {len(bodies)} body/bodies created.")
        else:
            emit(f"    -> WARNING: Extrusion produced no geometry.")

    emit("\n=== Phase 3: Tool buffer generation ===")

    tool_bodies: Dict[str, List[m3d.Manifold]] = {}

    for comp in sorted_comps:
        if comp.role in ('base', 'core', 'pillar') and not comp.explicit_cuts:
            continue

        comp_profiles = profiles.get(comp.name)
        if not comp_profiles:
            continue

        parent = registry.get(comp.parent_name)
        offset_mm = get_tool_offset_mm(comp)

        if comp.role in ('insert', 'detail') and parent:
            parent_top = get_height_mm(parent.level_str)

            lip_start = parent_top - LIP_LOCK_DEPTH
            gap_start = lip_start + GAP_FLOOR_THICKNESS

            tight_tol = TOL_DETAIL if comp.role == 'detail' else 0.1

            tools: List[m3d.Manifold] = []
            for poly in comp_profiles:
                if poly.is_empty or poly.area < 1e-4:
                    continue

                exact_poly = poly.buffer(tight_tol)
                if not exact_poly.is_empty:
                    exact_man = _extrude_polygon(exact_poly, lip_start, lip_start + GAP_FLOOR_THICKNESS + 0.05)
                    if exact_man and not exact_man.is_empty():
                        tools.append(exact_man)

                gap_poly = poly.buffer(offset_mm) if offset_mm > 0 else poly
                if not gap_poly.is_empty:
                    gap_man = _extrude_polygon(gap_poly, gap_start, gap_start + 80.0)
                    if gap_man and not gap_man.is_empty():
                        tools.append(gap_man)

            if tools:
                tool_bodies[comp.name] = tools
                emit(f"  '{comp.name}': {len(tools)} tool part(s) created (stepped cutter).")

        elif comp.role == 'cover':
            tools = []
            for poly in comp_profiles:
                if poly.is_empty:
                    continue
                cover_poly = poly.buffer(offset_mm) if offset_mm > 0 else poly
                man = _extrude_polygon(cover_poly, COVER_FLOOR_THICKNESS, COVER_FLOOR_THICKNESS + 80.0)
                if man and not man.is_empty():
                    tools.append(man)
            if tools:
                tool_bodies[comp.name] = tools
                emit(f"  '{comp.name}': {len(tools)} tool part(s) created (slide-fit cutter).")

        elif comp.explicit_cuts:
            z_start, z_end = get_z_start_and_end(comp, registry.get(comp.parent_name))
            tools = []
            for poly in comp_profiles:
                if poly.is_empty:
                    continue
                cut_poly = poly.buffer(offset_mm) if offset_mm > 0 else poly
                man = _extrude_polygon(cut_poly, z_start, z_end)
                if man and not man.is_empty():
                    tools.append(man)
            if tools:
                tool_bodies[comp.name] = tools
                emit(f"  '{comp.name}': {len(tools)} explicit-cut tool(s) created.")

    emit("\n=== Phase 4: Boolean operations ===")

    final_bodies: Dict[str, List[m3d.Manifold]] = {k: list(v) for k, v in raw_bodies.items()}

    for comp in sorted_comps:
        tools = tool_bodies.get(comp.name)
        if not tools:
            continue

        target_names: List[str] = []
        if comp.role in ('insert', 'detail', 'cover'):
            if comp.parent_name in final_bodies:
                target_names.append(comp.parent_name)
        for cut_name in comp.explicit_cuts:
            if cut_name in final_bodies and cut_name not in target_names:
                target_names.append(cut_name)

        for tgt_name in target_names:
            tgt_bodies = final_bodies.get(tgt_name, [])
            new_tgt: List[m3d.Manifold] = []
            for tgt_body in tgt_bodies:
                result = tgt_body
                for tool in tools:
                    try:
                        result = result - tool
                    except Exception as e:
                        emit(f"  WARNING: Boolean cut failed for {comp.name}→{tgt_name}: {e}")
                new_tgt.append(result)
            if new_tgt:
                final_bodies[tgt_name] = new_tgt
                emit(f"  Cut '{comp.name}' from '{tgt_name}' — OK.")

    emit("\n=== Phase 5: Post-processing ===")

    base_comps = [c for c in sorted_comps if c.role == 'base' and c.name in final_bodies]

    def _component_total_volume(comp: ComponentDef) -> float:
        bodies = final_bodies.get(comp.name, [])
        return sum(b.volume() for b in bodies if not b.is_empty())

    base_comp = max(base_comps, key=_component_total_volume) if base_comps else None

    if base_comp and base_comp.name in final_bodies:
        base_manifolds = final_bodies[base_comp.name]
        base_polys = profiles.get(base_comp.name, [])

        base_top_z = get_height_mm(base_comp.level_str)

        processed: List[m3d.Manifold] = []
        for idx, body in enumerate(base_manifolds):
            base_poly = base_polys[idx] if idx < len(base_polys) else (base_polys[0] if base_polys else None)

            current = body

            if base_poly is not None:
                top_bevel = _bevel_edge_ring(base_poly, base_top_z, bevel_mm=0.2, at_top=True)
                if top_bevel is not None:
                    try:
                        current = current - top_bevel
                        emit("  Applied 0.2mm chamfer to base top edge.")
                    except Exception as e:
                        emit(f"  WARNING: Top chamfer failed: {e}")

                bottom_bevel = _bevel_edge_ring(base_poly, 0.0, bevel_mm=0.2, at_top=False)
                if bottom_bevel is not None:
                    try:
                        current = current - bottom_bevel
                        emit("  Applied 0.2mm fillet approximation to base bottom edge.")
                    except Exception as e:
                        emit(f"  WARNING: Bottom fillet failed: {e}")

            trim_z = BASE_HEIGHTS[0] - BASE_TRIM_LIP
            bottom_part, top_part = _split_at_z(current, trim_z)
            if bottom_part is not None and top_part is not None:
                processed.append(bottom_part)
                processed.append(top_part)
                emit(f"  Split base at z={trim_z:.2f}mm (trim lip).")
            else:
                processed.append(current)

        final_bodies[base_comp.name] = processed

    emit("\n=== Building result list ===")

    results: List[BodyResult] = []
    for comp in sorted_comps:
        bodies = final_bodies.get(comp.name, [])
        if not bodies:
            continue
        non_empty = [b for b in bodies if not b.is_empty()]
        if non_empty:
            results.append(BodyResult(
                name=comp.name,
                role=comp.role,
                hex_color=comp.hex_color,
                bodies=non_empty,
            ))
            emit(f"  Result: '{comp.name}' ({len(non_empty)} solid(s))")

    emit(f"\nDone — {len(results)} component(s) in final model.")
    return results, msgs
