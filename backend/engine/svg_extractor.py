"""
SVG profile extractor.

Given an SVG file, parses all closed paths using svgpathtools and converts
them to Shapely Polygon objects. Handles multi-polygon SVGs and inner holes.

SVG coordinate space has Y pointing down; pendant geometry needs Y pointing up,
so Y is flipped during conversion.
"""

import math
from typing import List, Tuple, Optional
import numpy as np
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely.validation import make_valid

import svgpathtools


def _sample_path(path: svgpathtools.Path, n_samples: int = 256) -> List[Tuple[float, float]]:
    """
    Sample a svgpathtools Path at n_samples equally-spaced parameter values.
    Returns a list of (x, y) coordinate tuples (SVG coordinate frame).
    """
    coords: List[Tuple[float, float]] = []
    try:
        total = path.length()
    except Exception:
        total = 1.0

    if total <= 0:
        return coords

    for i in range(n_samples):
        t = i / n_samples
        pt = path.point(t)
        coords.append((pt.real, pt.imag))

    return coords


def _path_to_polygon(
    path: svgpathtools.Path,
    scale: float = 1.0,
    n_samples: int = 256,
) -> Optional[Polygon]:
    """
    Convert a single closed svgpathtools Path to a Shapely Polygon.

    The SVG Y-axis points down; we flip it so Z-up geometry is correct
    (pendant sits flat on the XY plane viewed from above).

    scale: multiply all coordinates (e.g. 1.0 for mm if SVG is 1px=1mm).
    """
    if not path.isclosed():
        return None

    coords = _sample_path(path, n_samples)
    if len(coords) < 3:
        return None

    scaled = [(x * scale, -y * scale) for x, y in coords]

    try:
        poly = Polygon(scaled)
        if not poly.is_valid:
            poly = make_valid(poly)
        if poly.geom_type not in ('Polygon', 'MultiPolygon'):
            return None
        if poly.area < 1e-6:
            return None
        return poly
    except Exception:
        return None


def extract_profiles(
    svg_path: str,
    scale: float = 1.0,
    n_samples: int = 256,
) -> List[Polygon]:
    """
    Extract 2D Shapely Polygons from an SVG file.

    Steps:
    1. Parse all closed paths.
    2. Convert each to a Polygon.
    3. Identify outer vs hole polygons by containment.
    4. Subtract hole polygons from their parent outers.
    5. Return final list of (possibly holed) Polygon objects.

    Returns an empty list if the SVG contains no usable geometry.
    """
    try:
        paths, attrs = svgpathtools.svg2paths(svg_path)
    except Exception:
        return []

    raw_polys: List[Polygon] = []
    for path in paths:
        if not path.isclosed():
            for segment in path:
                pass
            if not path.isclosed():
                continue
        poly = _path_to_polygon(path, scale=scale, n_samples=n_samples)
        if poly is not None:
            if poly.geom_type == 'MultiPolygon':
                raw_polys.extend(poly.geoms)
            else:
                raw_polys.append(poly)

    if not raw_polys:
        return []

    raw_polys.sort(key=lambda p: p.area, reverse=True)

    outers: List[Polygon] = []
    holes: List[Polygon] = []

    for poly in raw_polys:
        is_hole = False
        for outer in outers:
            if outer.contains(poly):
                is_hole = True
                break
        if is_hole:
            holes.append(poly)
        else:
            outers.append(poly)

    result: List[Polygon] = []
    for outer in outers:
        combined = outer
        for hole in holes:
            if outer.contains(hole):
                try:
                    combined = combined.difference(hole)
                except Exception:
                    pass
        if combined.geom_type == 'MultiPolygon':
            result.extend(combined.geoms)
        elif combined.geom_type == 'Polygon' and combined.area > 1e-6:
            result.append(combined)

    return result


def compute_profile_centroid(profiles: List[Polygon]) -> Tuple[float, float]:
    """Return the centroid (x, y) of all profiles combined."""
    if not profiles:
        return 0.0, 0.0
    combined = unary_union(profiles)
    c = combined.centroid
    return c.x, c.y


def center_profiles(profiles: List[Polygon]) -> List[Polygon]:
    """Translate all profiles so their collective centroid is at the origin."""
    cx, cy = compute_profile_centroid(profiles)
    return [
        Polygon(
            [(x - cx, y - cy) for x, y in p.exterior.coords],
            [[(x - cx, y - cy) for x, y in ring.coords] for ring in p.interiors],
        )
        for p in profiles
    ]
