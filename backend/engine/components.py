"""
Parametric component builders for AutoChains pendant swap actions.

Each builder accepts a list of existing BodyResult objects (from the main pipeline),
computes the base bounding box, and returns:
  (component_body_result, cut_tool_manifold | None)

The cut_tool (if not None) should be boolean-subtracted from the first/largest
base body before the component is appended to the results list.
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
#  DXF file location (relative to this file)
# ──────────────────────────────────────────────
_HERE = os.path.dirname(__file__)
_DXF_DIR = os.path.join(_HERE, "..", "..", "PoppChainsAuto")
LOGO_DXF = os.path.join(_DXF_DIR, "Logo_Marker.dxf")

# ──────────────────────────────────────────────
#  Colour constants
# ──────────────────────────────────────────────
METAL_HEX = "A8A8A8"
LIME_HEX = "C4F500"

# ──────────────────────────────────────────────
#  Shared geometry helpers
# ──────────────────────────────────────────────

def _get_bounds(results: List[BodyResult]) -> Tuple[float, float, float, float, float, float]:
    """Return (x_min, y_min, z_min, x_max, y_max, z_max) over all bodies."""
    xs, ys, zs = [], [], []
    for br in results:
        for man in br.bodies:
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
    return float(min(xs)), float(min(ys)), float(min(zs)), \
           float(max(xs)), float(max(ys)), float(max(zs))


def _circle_cross_section(center_r: float, wire_r: float, n: int = 24) -> m3d.CrossSection:
    """Return a CrossSection that is a circle of radius wire_r centred at (center_r, 0)."""
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
    seg: int = 48,
) -> m3d.Manifold:
    """Solid annular cylinder from z=0 to z=height."""
    outer = m3d.Manifold.cylinder(height=height, radius_low=outer_r, circular_segments=seg)
    inner = m3d.Manifold.cylinder(
        height=height + 1.0, radius_low=inner_r, circular_segments=seg
    ).translate([0.0, 0.0, -0.5])
    return outer - inner


def _torus_xz(major_r: float, wire_r: float, seg_sweep: int = 48, seg_wire: int = 20) -> m3d.Manifold:
    """
    Return a torus lying in the XZ plane (axis Y).

    The default revolve() in manifold3d revolves around the Z axis (torus in XY plane).
    We apply rotate([90,0,0]) to put the torus in the XZ plane.
    The hole of the resulting torus passes in the Y direction.
    """
    cs = _circle_cross_section(major_r, wire_r, seg_wire)
    torus_xy = m3d.Manifold.revolve(cs, seg_sweep)   # torus in XY plane
    return torus_xy.rotate([90.0, 0.0, 0.0])          # torus in XZ plane, hole in Y


# ──────────────────────────────────────────────
#  NFC cap
# ──────────────────────────────────────────────

def build_nfc(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    Annular NFC cap ring (18 mm OD, 1.5 mm wall, 3 mm tall) recessed into
    the top face of the base body.

    Returns:
      - BodyResult for the metallic NFC ring
      - cut_tool: solid cylinder that carves the pocket in the base top face
    """
    x0, y0, z0, x1, y1, z1 = _get_bounds(results)
    cx = (x0 + x1) / 2.0
    cy = (y0 + y1) / 2.0
    z_top = z1

    outer_r = 9.0      # 18 mm OD
    inner_r = 7.5      # 1.5 mm wall
    cap_h = 3.0
    z_cap = z_top - cap_h    # cap sits recessed in top face

    ring = _annular_cylinder(outer_r, inner_r, cap_h).translate([cx, cy, z_cap])

    pocket = m3d.Manifold.cylinder(
        height=cap_h + 0.5, radius_low=outer_r + 0.15, circular_segments=48
    ).translate([cx, cy, z_top - cap_h - 0.5])

    br = BodyResult(name="NFC Cap", role="nfc", hex_color=METAL_HEX, bodies=[ring])
    return br, pocket


# ──────────────────────────────────────────────
#  Hook bail
# ──────────────────────────────────────────────

def build_hook(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    D-ring bail at the top-centre of the pendant (highest Y).

    Geometry:
      - Rectangular tab (3 × 2 × 5 mm) that inserts into a slot cut into the
        pendant top edge.
      - Flat torus ring (major r = 5 mm, wire r = 1.2 mm) sits on top of tab,
        lying in the XZ plane so a chain can thread through in the Y direction.

    Returns:
      - BodyResult for the bail
      - cut_tool: box to subtract from the pendant top edge (tab pocket)
    """
    x0, y0, z0, x1, y1, z1 = _get_bounds(results)
    cx = (x0 + x1) / 2.0
    y_top = y1           # highest Y = top of pendant
    z_mid = (z0 + z1) / 2.0

    tab_w = 3.0
    tab_d = 2.0
    tab_h = 4.5          # tab goes down into pendant

    major_r = 5.0
    wire_r = 1.2

    tab = m3d.Manifold.cube([tab_w, tab_h, tab_d]).translate(
        [cx - tab_w / 2.0, y_top - tab_h, z_mid - tab_d / 2.0]
    )

    ring = _torus_xz(major_r, wire_r).translate([cx, y_top + wire_r, z_mid])

    hook_body = tab + ring

    pocket = m3d.Manifold.cube([tab_w + 0.2, tab_h + 0.1, tab_d + 0.2]).translate(
        [cx - (tab_w + 0.2) / 2.0, y_top - tab_h - 0.1, z_mid - (tab_d + 0.2) / 2.0]
    )

    br = BodyResult(name="Hook", role="hook", hex_color=METAL_HEX, bodies=[hook_body])
    return br, pocket


# ──────────────────────────────────────────────
#  Loop bail
# ──────────────────────────────────────────────

def build_loop(results: List[BodyResult]) -> Tuple[BodyResult, Optional[m3d.Manifold]]:
    """
    Closed circular loop bail at the top-centre of the pendant.

    Larger ring than the hook (major r = 7 mm, wire r = 1.5 mm) with a
    shorter connecting tab.

    Returns:
      - BodyResult for the loop
      - cut_tool: tab pocket cut
    """
    x0, y0, z0, x1, y1, z1 = _get_bounds(results)
    cx = (x0 + x1) / 2.0
    y_top = y1
    z_mid = (z0 + z1) / 2.0

    tab_w = 3.5
    tab_d = 2.5
    tab_h = 4.0

    major_r = 7.0
    wire_r = 1.5

    tab = m3d.Manifold.cube([tab_w, tab_h, tab_d]).translate(
        [cx - tab_w / 2.0, y_top - tab_h, z_mid - tab_d / 2.0]
    )

    ring = _torus_xz(major_r, wire_r).translate([cx, y_top + wire_r, z_mid])

    loop_body = tab + ring

    pocket = m3d.Manifold.cube([tab_w + 0.2, tab_h + 0.1, tab_d + 0.2]).translate(
        [cx - (tab_w + 0.2) / 2.0, y_top - tab_h - 0.1, z_mid - (tab_d + 0.2) / 2.0]
    )

    br = BodyResult(name="Loop", role="loop", hex_color=METAL_HEX, bodies=[loop_body])
    return br, pocket


# ──────────────────────────────────────────────
#  Logo insert
# ──────────────────────────────────────────────

def _parse_logo_polygons():
    """
    Parse Logo_Marker.dxf and return a list of (exterior_pts_2d, area) tuples
    for each closed polygon loop found in the marker file.

    Segments (LINE, ARC, SPLINE, LWPOLYLINE) are stitched end-to-end using
    0.01 mm snapping, then Shapely is used to extract valid polygons.
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
                cx, cy, r = e.dxf.center.x, e.dxf.center.y, e.dxf.radius
                a0 = math.radians(e.dxf.start_angle)
                a1 = math.radians(e.dxf.end_angle)
                if a1 <= a0:
                    a1 += 2 * math.pi
                pts = [
                    (cx + r * math.cos(th), cy + r * math.sin(th))
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

        adj = defaultdict(list)
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
            chain_pts = []
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
            except Exception as e:
                log.debug("logo polygon build failed: %s", e)

        return polys

    except Exception as e:
        log.warning("Logo DXF parse failed: %s", e)
        return []


def build_logo(results: List[BodyResult]) -> Tuple[BodyResult, None]:
    """
    Extrude the logo profile (from Logo_Marker.dxf) 1.5 mm above the top face
    of the pendant base.

    The logo is centred and scaled to occupy 80% of the base XY footprint while
    preserving aspect ratio.

    Returns:
      - BodyResult for the logo embossment
      - None (no cut required)
    """
    x0, y0, z0, x1, y1, z1 = _get_bounds(results)
    base_w = x1 - x0
    base_h = y1 - y0
    cx = (x0 + x1) / 2.0
    cy = (y0 + y1) / 2.0
    z_top = z1

    extrude_h = 1.5
    polys = _parse_logo_polygons()

    logo_bodies: list[m3d.Manifold] = []

    if polys:
        logo_xs = [x for pts, _ in polys for x, y in pts]
        logo_ys = [y for pts, _ in polys for x, y in pts]
        lx0, lx1 = min(logo_xs), max(logo_xs)
        ly0, ly1 = min(logo_ys), max(logo_ys)
        logo_w = lx1 - lx0 or 1.0
        logo_h = ly1 - ly0 or 1.0
        lcx = (lx0 + lx1) / 2.0
        lcy = (ly0 + ly1) / 2.0

        target_w = base_w * 0.80
        target_h = base_h * 0.80
        sx = target_w / logo_w
        sy = target_h / logo_h
        scale = min(sx, sy, 1.0)  # never scale up beyond 1:1

        for pts, area in polys:
            scaled = [
                ((x - lcx) * scale + cx, (y - lcy) * scale + cy)
                for x, y in pts
            ]
            try:
                cs = m3d.CrossSection([scaled])
                if cs.area() < 0.01:
                    continue
                body = m3d.Manifold.extrude(cs, extrude_h).translate([0.0, 0.0, z_top])
                logo_bodies.append(body)
            except Exception as e:
                log.debug("logo extrude failed: %s", e)

    if not logo_bodies:
        log.warning("Logo DXF parse yielded no geometry; using text-plate fallback.")
        plate_w = min(base_w * 0.6, 20.0)
        plate_h = min(base_h * 0.2, 5.0)
        plate = m3d.Manifold.cube([plate_w, plate_h, extrude_h]).translate(
            [cx - plate_w / 2.0, cy - plate_h / 2.0, z_top]
        )
        logo_bodies = [plate]

    merged = logo_bodies[0]
    for b in logo_bodies[1:]:
        merged = merged + b

    br = BodyResult(name="Logo", role="logo", hex_color=LIME_HEX, bodies=[merged])
    return br, None
