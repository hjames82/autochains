"""
Parametric component builders for AutoChains pendant swap actions.

Marker DXF files drive sizing/positioning:
  NFC_Marker.dxf  → NFC cap outer radius from CIRCLE entity
  Hook_Marker.dxf → bail bounding-box drives ring major radius and tab depth
  Logo_Marker.dxf → logo polygon contours at marker scale (no rescaling)

Each builder accepts the full results list from the pipeline, locates the
base body (role == 'base'), computes bounding box + XY centroid, and returns:
  (component_body_result, cut_tool_manifold | None)

When a cut_tool is returned, the caller MUST boolean-subtract it from the
*base body* (role == 'base', or largest-volume fallback) before appending the
component BodyResult to the results list.
"""

from __future__ import annotations

import logging
import math
import os
from collections import defaultdict
from typing import List, Optional, Tuple

import numpy as np
import manifold3d as m3d

from .pipeline import BodyResult

log = logging.getLogger(__name__)

# ──────────────────────────────────────────────
#  DXF file locations (relative to this file)
# ──────────────────────────────────────────────
_HERE = os.path.dirname(__file__)
_DXF_DIR = os.path.join(_HERE, "..", "..", "PoppChainsAuto")
NFC_DXF = os.path.join(_DXF_DIR, "NFC_Marker.dxf")
HOOK_DXF = os.path.join(_DXF_DIR, "Hook_Marker.dxf")
LOGO_DXF = os.path.join(_DXF_DIR, "Logo_Marker.dxf")

# ──────────────────────────────────────────────
#  Colour constants
# ──────────────────────────────────────────────
METAL_HEX = "A8A8A8"
WHITE_HEX = "FFFFFF"   # logo spec colour

# ──────────────────────────────────────────────
#  Base-body selection helpers
# ──────────────────────────────────────────────

def _find_base_body(results: List[BodyResult]) -> Tuple[Optional[BodyResult], int]:
    """
    Return the BodyResult that represents the pendant base and its index.

    Selection priority:
      1. First result with role == 'base'
      2. Largest-volume body among all results (fallback for unusual pipelines)
    """
    for i, br in enumerate(results):
        if br.role == "base":
            return br, i

    best_vol = -1.0
    best_i = 0
    best_br: Optional[BodyResult] = results[0] if results else None
    for i, br in enumerate(results):
        for man in br.bodies:
            if not man.is_empty():
                try:
                    v = man.volume()
                    if v > best_vol:
                        best_vol = v
                        best_i = i
                        best_br = br
                except Exception:
                    pass
    return best_br, best_i


def _get_bounds_of(result: BodyResult) -> Tuple[float, float, float, float, float, float]:
    """Return (x_min, y_min, z_min, x_max, y_max, z_max) for one BodyResult."""
    xs, ys, zs = [], [], []
    for man in result.bodies:
        if man.is_empty():
            continue
        try:
            mesh = man.to_mesh()
            verts = np.array(mesh.vert_properties)
            xs.extend(verts[:, 0].tolist())
            ys.extend(verts[:, 1].tolist())
            zs.extend(verts[:, 2].tolist())
        except Exception:
            pass
    if not xs:
        return 0.0, 0.0, 0.0, 40.0, 40.0, 12.0
    return (float(min(xs)), float(min(ys)), float(min(zs)),
            float(max(xs)), float(max(ys)), float(max(zs)))


def _get_all_bounds(results: List[BodyResult]) -> Tuple[float, float, float, float, float, float]:
    """Return bounding box over ALL result bodies."""
    xs, ys, zs = [], [], []
    for br in results:
        x0, y0, z0, x1, y1, z1 = _get_bounds_of(br)
        xs += [x0, x1]; ys += [y0, y1]; zs += [z0, z1]
    if not xs:
        return 0.0, 0.0, 0.0, 40.0, 40.0, 12.0
    return float(min(xs)), float(min(ys)), float(min(zs)), \
           float(max(xs)), float(max(ys)), float(max(zs))


def _get_xy_centroid(result: BodyResult) -> Tuple[float, float]:
    """
    XY centre-of-mass of one BodyResult, computed as the vertex average.
    More accurate than bbox mid-point for asymmetric pendants.
    """
    all_x, all_y = [], []
    for man in result.bodies:
        if man.is_empty():
            continue
        try:
            mesh = man.to_mesh()
            verts = np.array(mesh.vert_properties)
            all_x.extend(verts[:, 0].tolist())
            all_y.extend(verts[:, 1].tolist())
        except Exception:
            pass
    if all_x:
        return float(np.mean(all_x)), float(np.mean(all_y))
    x0, y0, _, x1, y1, _ = _get_bounds_of(result)
    return (x0 + x1) / 2.0, (y0 + y1) / 2.0


# ──────────────────────────────────────────────
#  Low-level geometry helpers
# ──────────────────────────────────────────────

def _circle_cross_section(center_r: float, wire_r: float, n: int = 24) -> m3d.CrossSection:
    """Circle of radius wire_r centred at (center_r, 0) as a CrossSection."""
    pts = [
        (center_r + wire_r * math.cos(2 * math.pi * i / n),
         wire_r * math.sin(2 * math.pi * i / n))
        for i in range(n)
    ]
    return m3d.CrossSection([pts])


def _annular_cylinder(
    outer_r: float,
    inner_r: float,
    height: float,
    seg: int = 64,
) -> m3d.Manifold:
    """Solid annular cylinder from z=0 to z=height."""
    outer = m3d.Manifold.cylinder(height=height, radius_low=outer_r, circular_segments=seg)
    inner = m3d.Manifold.cylinder(
        height=height + 1.0, radius_low=inner_r, circular_segments=seg
    ).translate([0.0, 0.0, -0.5])
    return outer - inner


def _torus_xz_closed(major_r: float, wire_r: float,
                     seg_sweep: int = 48, seg_wire: int = 20) -> m3d.Manifold:
    """
    Full 360° torus lying in the XZ plane (axis Y).

    manifold3d revolve() rotates around Z by default, producing a torus in XY.
    We apply rotate([90,0,0]) to bring it to XZ.
    """
    cs = _circle_cross_section(major_r, wire_r, seg_wire)
    return m3d.Manifold.revolve(cs, seg_sweep).rotate([90.0, 0.0, 0.0])


def _torus_xz_open(major_r: float, wire_r: float,
                   open_deg: float = 90.0,
                   seg_sweep: int = 48, seg_wire: int = 20) -> m3d.Manifold:
    """
    Partial torus (C-ring) in the XZ plane with a gap of *open_deg* degrees.

    The gap is rotated to face downward (toward the pendant body below the bail).
    Steps:
      1. Revolve (360 - open_deg)° around Z in XY plane.
      2. Rotate 180° around Z so the gap faces +X (outward from pendant).
      3. Rotate 90° around X to place ring in XZ plane.
    """
    sweep_deg = 360.0 - open_deg
    cs = _circle_cross_section(major_r, wire_r, seg_wire)
    partial = m3d.Manifold.revolve(cs, seg_sweep, sweep_deg)
    return partial.rotate([0.0, 0.0, 180.0]).rotate([90.0, 0.0, 0.0])


# ──────────────────────────────────────────────
#  DXF dimension extractors
# ──────────────────────────────────────────────

def _read_nfc_outer_r() -> float:
    """
    Return the NFC cap outer radius from NFC_Marker.dxf (CIRCLE entity).
    Falls back to 17.5 mm if the file is unavailable.
    """
    try:
        import ezdxf
        if not os.path.isfile(NFC_DXF):
            return 17.5
        doc = ezdxf.readfile(NFC_DXF)
        msp = doc.modelspace()
        radii = [e.dxf.radius for e in msp if e.dxftype() == "CIRCLE"]
        if radii:
            return float(max(radii))
    except Exception as e:
        log.debug("NFC DXF read failed: %s", e)
    return 17.5


def _read_hook_bbox() -> Tuple[float, float]:
    """
    Return (width_mm, height_mm) from Hook_Marker.dxf bounding box.
    Falls back to (17.6, 10.4) if the file is unavailable.
    """
    try:
        import ezdxf
        if not os.path.isfile(HOOK_DXF):
            return 17.6, 10.4
        doc = ezdxf.readfile(HOOK_DXF)
        msp = doc.modelspace()
        xs, ys = [], []
        for e in msp:
            if e.dxftype() == "LINE":
                xs += [e.dxf.start.x, e.dxf.end.x]
                ys += [e.dxf.start.y, e.dxf.end.y]
            elif e.dxftype() == "SPLINE":
                for pt in e.control_points:
                    xs.append(pt[0]); ys.append(pt[1])
        if xs:
            return float(max(xs) - min(xs)), float(max(ys) - min(ys))
    except Exception as e:
        log.debug("Hook DXF read failed: %s", e)
    return 17.6, 10.4


# ──────────────────────────────────────────────
#  NFC cap
# ──────────────────────────────────────────────

def build_nfc(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    Annular NFC cap ring recessed into the top face of the base body.

    Outer radius is driven by the CIRCLE entity in NFC_Marker.dxf.
    Wall thickness: 1.5 mm (per spec).  Cap height: 3 mm.
    XY placement: vertex centroid of the base body (COM-based, not bbox).

    Returns (BodyResult, cut_tool): the pocket cylinder to subtract from the base.
    """
    outer_r = _read_nfc_outer_r()       # 17.5 mm from DXF
    inner_r = outer_r - 1.5            # 1.5 mm wall
    cap_h = 3.0

    base_br, _ = _find_base_body(results)
    if base_br is None:
        base_br = results[0]
    cx, cy = _get_xy_centroid(base_br)
    x0, y0, z0, x1, y1, z1 = _get_bounds_of(base_br)
    z_top = z1
    z_cap = z_top - cap_h              # ring sits recessed in top face

    ring = _annular_cylinder(outer_r, inner_r, cap_h).translate([cx, cy, z_cap])

    pocket = m3d.Manifold.cylinder(
        height=cap_h + 0.5, radius_low=outer_r + 0.15, circular_segments=64
    ).translate([cx, cy, z_top - cap_h - 0.5])

    br = BodyResult(name="NFC Cap", role="nfc", hex_color=METAL_HEX, bodies=[ring])
    return br, pocket


# ──────────────────────────────────────────────
#  Hook bail (open C-ring)
# ──────────────────────────────────────────────

def build_hook(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    Open D-ring / C-ring bail at the top-centre of the pendant.

    The ring is OPEN (270° sweep, 90° gap facing outward) to differentiate from
    the closed Loop bail.  Dimensions are derived from Hook_Marker.dxf:
      - Ring major radius ≈ marker_width / 4
      - Tab depth into pendant ≈ marker_height / 2

    Returns (BodyResult, cut_tool): the tab pocket to subtract from the base top edge.
    """
    hook_w, hook_h = _read_hook_bbox()     # ≈ 17.63 × 10.4 mm

    base_br, _ = _find_base_body(results)
    if base_br is None:
        base_br = results[0]
    cx, cy = _get_xy_centroid(base_br)
    x0, y0, z0, x1, y1, z1 = _get_bounds_of(base_br)
    y_top = y1
    z_mid = (z0 + z1) / 2.0

    wire_r = 1.2
    major_r = hook_w / 4.0              # ≈ 4.4 mm from 17.63 mm marker width
    tab_h = hook_h / 2.0               # ≈ 5.2 mm tab depth

    tab_w = 3.0
    tab_d = 2.0

    tab = m3d.Manifold.cube([tab_w, tab_h, tab_d]).translate(
        [cx - tab_w / 2.0, y_top - tab_h, z_mid - tab_d / 2.0]
    )

    # Open C-ring (90° gap) in XZ plane; gap faces outward from pendant body
    ring = _torus_xz_open(major_r, wire_r, open_deg=90.0).translate(
        [cx, y_top + wire_r, z_mid]
    )

    hook_body = tab + ring

    pocket = m3d.Manifold.cube([tab_w + 0.2, tab_h + 0.1, tab_d + 0.2]).translate(
        [cx - (tab_w + 0.2) / 2.0, y_top - tab_h - 0.1, z_mid - (tab_d + 0.2) / 2.0]
    )

    br = BodyResult(name="Hook", role="hook", hex_color=METAL_HEX, bodies=[hook_body])
    return br, pocket


# ──────────────────────────────────────────────
#  Loop bail (closed ring)
# ──────────────────────────────────────────────

def build_loop(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    Closed circular loop bail at the top-centre of the pendant.

    Built parametrically (no Loop_Marker.dxf exists), sized proportionally
    to the Hook_Marker.dxf dimensions but with a larger ring.
    The ring is a full 360° torus, distinguishing it visually from the open Hook.

    Returns (BodyResult, cut_tool): the tab pocket to subtract from the base top edge.
    """
    hook_w, hook_h = _read_hook_bbox()

    base_br, _ = _find_base_body(results)
    if base_br is None:
        base_br = results[0]
    cx, cy = _get_xy_centroid(base_br)
    x0, y0, z0, x1, y1, z1 = _get_bounds_of(base_br)
    y_top = y1
    z_mid = (z0 + z1) / 2.0

    wire_r = 1.5
    major_r = hook_w / 3.5             # slightly larger than hook ring

    tab_w = 3.5
    tab_d = 2.5
    tab_h = hook_h / 2.0

    tab = m3d.Manifold.cube([tab_w, tab_h, tab_d]).translate(
        [cx - tab_w / 2.0, y_top - tab_h, z_mid - tab_d / 2.0]
    )

    # Closed ring (full 360°) — distinguishes Loop from open Hook
    ring = _torus_xz_closed(major_r, wire_r).translate([cx, y_top + wire_r, z_mid])

    loop_body = tab + ring

    pocket = m3d.Manifold.cube([tab_w + 0.2, tab_h + 0.1, tab_d + 0.2]).translate(
        [cx - (tab_w + 0.2) / 2.0, y_top - tab_h - 0.1, z_mid - (tab_d + 0.2) / 2.0]
    )

    br = BodyResult(name="Loop", role="loop", hex_color=METAL_HEX, bodies=[loop_body])
    return br, pocket


# ──────────────────────────────────────────────
#  Logo insert (marker-scale, bottom face)
# ──────────────────────────────────────────────

def _parse_logo_polygons():
    """
    Parse Logo_Marker.dxf and return [(exterior_pts, area), ...] at MARKER SCALE.

    Segments (LINE, ARC, SPLINE, LWPOLYLINE) are stitched end-to-end using
    0.01 mm snapping, then closed polygon loops are extracted.

    The coordinates are returned in the DXF's own coordinate system; the caller
    is responsible for translating to the pendant coordinate system.
    """
    try:
        import ezdxf
        from shapely.geometry import Polygon
        from shapely.validation import make_valid

        if not os.path.isfile(LOGO_DXF):
            log.warning("Logo DXF not found: %s", LOGO_DXF)
            return []

        doc = ezdxf.readfile(LOGO_DXF)
        msp = doc.modelspace()

        segments = []
        for e in msp:
            t = e.dxftype()
            if t == "LINE":
                s = (e.dxf.start.x, e.dxf.start.y)
                en = (e.dxf.end.x, e.dxf.end.y)
                if abs(s[0] - en[0]) > 1e-9 or abs(s[1] - en[1]) > 1e-9:
                    segments.append({"start": s, "end": en, "mids": [s, en]})
            elif t == "ARC":
                ecx, ecy, r = e.dxf.center.x, e.dxf.center.y, e.dxf.radius
                a0 = math.radians(e.dxf.start_angle)
                a1 = math.radians(e.dxf.end_angle)
                if a1 <= a0:
                    a1 += 2 * math.pi
                pts = [
                    (ecx + r * math.cos(th), ecy + r * math.sin(th))
                    for th in np.linspace(a0, a1, 10)
                ]
                segments.append({"start": pts[0], "end": pts[-1], "mids": pts})
            elif t == "SPLINE":
                cpts = list(e.control_points)
                if len(cpts) >= 2:
                    s = (cpts[0][0], cpts[0][1])
                    en = (cpts[-1][0], cpts[-1][1])
                    segments.append(
                        {"start": s, "end": en, "mids": [(p[0], p[1]) for p in cpts]}
                    )
            elif t == "LWPOLYLINE":
                pts = [(x, y) for x, y, *_ in e.get_points()]
                if e.is_closed:
                    pts.append(pts[0])
                for i in range(len(pts) - 1):
                    segments.append(
                        {"start": pts[i], "end": pts[i + 1], "mids": [pts[i], pts[i + 1]]}
                    )

        SNAP = 0.01

        def sk(p):
            return (round(p[0] / SNAP) * SNAP, round(p[1] / SNAP) * SNAP)

        adj: dict = defaultdict(list)
        for i, seg in enumerate(segments):
            ks = sk(seg["start"])
            ke = sk(seg["end"])
            adj[ks].append((ke, i, False))
            adj[ke].append((ks, i, True))

        used: set = set()
        loops = []
        for start_key in list(adj.keys()):
            first_unused = next(
                ((nb, sidx, rev) for nb, sidx, rev in adj[start_key] if sidx not in used),
                None,
            )
            if first_unused is None:
                continue
            chain_pts: list = []
            cur = start_key
            nb, sidx, rev = first_unused
            while True:
                if sidx in used:
                    break
                used.add(sidx)
                seg = segments[sidx]
                pts = seg["mids"] if not rev else list(reversed(seg["mids"]))
                if chain_pts:
                    chain_pts.extend(pts[1:])
                else:
                    chain_pts.extend(pts)
                cur = nb
                nxt = next(
                    ((nn, ns, nr) for nn, ns, nr in adj[cur] if ns not in used),
                    None,
                )
                if nxt is None or cur == start_key:
                    break
                nb, sidx, rev = nxt

            if len(chain_pts) >= 3:
                loops.append(chain_pts)

        polys = []
        for lp in loops:
            try:
                p = Polygon(lp)
                p = make_valid(p)
                if not p.is_empty and p.area > 0.1:
                    polys.append((list(p.exterior.coords), p.area))
            except Exception as ex:
                log.debug("logo polygon build failed: %s", ex)

        return polys

    except Exception as e:
        log.warning("Logo DXF parse failed: %s", e)
        return []


def build_logo(results: List[BodyResult]) -> Tuple[BodyResult, None]:
    """
    Extrude the logo profile from Logo_Marker.dxf at MARKER SCALE (no rescaling)
    upward 1.5 mm from the *bottom face* of the pendant base (z = z_min).

    The logo's natural coordinate-space centre is aligned to the XY centroid of the
    base body.  Marker-relative layout is preserved — no blanket 80% resize.

    Colour: WHITE (#FFFFFF) per spec.

    Returns (BodyResult, None): no boolean cut into the base is required.
    """
    base_br, _ = _find_base_body(results)
    if base_br is None:
        base_br = results[0]
    cx, cy = _get_xy_centroid(base_br)
    x0, y0, z0, x1, y1, z1 = _get_bounds_of(base_br)
    z_bottom = z0          # bottom face of the pendant

    extrude_h = 1.5
    polys = _parse_logo_polygons()

    logo_bodies: list[m3d.Manifold] = []

    if polys:
        for pts, area in polys:
            # Shift DXF origin to pendant COM; preserve all natural marker-relative offsets
            # and marker scale.  Do NOT subtract the logo centroid (no centroid recentering).
            translated = [
                (x + cx, y + cy)
                for x, y in pts
            ]
            try:
                cs = m3d.CrossSection([translated])
                if cs.area() < 0.01:
                    continue
                body = m3d.Manifold.extrude(cs, extrude_h).translate(
                    [0.0, 0.0, z_bottom]
                )
                logo_bodies.append(body)
            except Exception as ex:
                log.debug("logo extrude failed: %s", ex)

    if not logo_bodies:
        log.warning("Logo DXF parse yielded no geometry; using rectangular-plate fallback.")
        base_w = x1 - x0
        base_h = y1 - y0
        plate_w = min(base_w * 0.6, 20.0)
        plate_h = min(base_h * 0.2, 5.0)
        plate = m3d.Manifold.cube([plate_w, plate_h, extrude_h]).translate(
            [cx - plate_w / 2.0, cy - plate_h / 2.0, z_bottom]
        )
        logo_bodies = [plate]

    merged = logo_bodies[0]
    for b in logo_bodies[1:]:
        merged = merged + b

    br = BodyResult(name="Logo", role="logo", hex_color=WHITE_HEX, bodies=[merged])
    return br, None
