"""
SVG Analyzer — intelligently detects logical layers from a single SVG file.

Detection priority:
  1. Inkscape layers  (<g inkscape:groupmode="layer" inkscape:label="...">)
  2. Illustrator layers (<g id="Layer_N"> / <g id="layer...">)
  3. Top-level named groups (<g id="..."> with visible shapes inside)
  4. Fill-colour groups  (group all shapes by computed fill colour)
  5. Fallback            (entire SVG as one layer)

Returns a dict with keys:
  layers      — list of SvgLayerDef dicts
  svg_size    — {w, h} in user-units
  source_type — detection method used
  viewbox     — raw viewBox string or None
"""
from __future__ import annotations

import hashlib
import io
import math
import re
import uuid
from typing import Dict, List, Optional, Tuple
from lxml import etree

import logging
log = logging.getLogger(__name__)

# ── XML namespaces ──────────────────────────────────────────────────────────
_SVG_NS  = "http://www.w3.org/2000/svg"
_INK_NS  = "http://www.inkscape.org/namespaces/inkscape"
_SODIPODI = "http://sodipodi.sourceforge.net/DTD/sodipodi-0.0.dtd"

def _tag(ns: str, local: str) -> str:
    return f"{{{ns}}}{local}"

# ── Named-colour lookup (W3C basic subset) ──────────────────────────────────
_NAMED: Dict[str, str] = {
    "black":"000000","white":"FFFFFF","red":"FF0000","lime":"00FF00",
    "blue":"0000FF","yellow":"FFFF00","cyan":"00FFFF","magenta":"FF00FF",
    "silver":"C0C0C0","gray":"808080","grey":"808080","maroon":"800000",
    "olive":"808000","green":"008000","purple":"800080","teal":"008080",
    "navy":"000080","orange":"FFA500","gold":"FFD700","pink":"FFC0CB",
    "brown":"A52A2A","coral":"FF7F50","salmon":"FA8072","violet":"EE82EE",
    "indigo":"4B0082","beige":"F5F5DC","ivory":"FFFFF0","lavender":"E6E6FA",
    "mint":"98FF98","turquoise":"40E0D0","tan":"D2B48C","khaki":"F0E68C",
}

def _normalise_color(raw: Optional[str]) -> Optional[str]:
    """Return '#RRGGBB' or None for transparent / unknown."""
    if not raw:
        return None
    raw = raw.strip().lower()
    if raw in ("none","transparent","inherit","","currentcolor"):
        return None
    if raw.startswith("#"):
        h = raw[1:]
        if len(h) == 3:
            h = h[0]*2 + h[1]*2 + h[2]*2
        if len(h) == 6:
            return "#" + h.upper()
        return None
    m = re.match(r"rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)", raw)
    if m:
        return "#{:02X}{:02X}{:02X}".format(int(m.group(1)), int(m.group(2)), int(m.group(3)))
    if raw in _NAMED:
        return "#" + _NAMED[raw]
    return None

def _parse_style(style_attr: str) -> Dict[str, str]:
    d: Dict[str, str] = {}
    for token in style_attr.split(";"):
        token = token.strip()
        if ":" in token:
            k, v = token.split(":", 1)
            d[k.strip()] = v.strip()
    return d

def _get_fill(elem: etree._Element, inherited: Optional[str] = None) -> Optional[str]:
    """Return normalised fill colour for an element."""
    style = _parse_style(elem.get("style", ""))
    fill = style.get("fill") or elem.get("fill") or inherited
    return _normalise_color(fill)

def _get_stroke(elem: etree._Element) -> Optional[str]:
    style = _parse_style(elem.get("style", ""))
    stroke = style.get("stroke") or elem.get("stroke")
    return _normalise_color(stroke)

# ── SVG geometry → path-d strings ───────────────────────────────────────────
_SHAPE_TAGS = {"path","rect","circle","ellipse","polygon","polyline","line",
               "use","image"}

def _elem_to_path_d(elem: etree._Element) -> Optional[str]:
    """Convert a shape element to an SVG path 'd' string."""
    tag = etree.QName(elem.tag).localname
    g = elem.get
    if tag == "path":
        return g("d")
    if tag == "rect":
        x, y = float(g("x","0")), float(g("y","0"))
        w, h = float(g("width","0")), float(g("height","0"))
        rx = float(g("rx","0") or g("ry","0") or "0")
        if rx == 0:
            return f"M{x},{y} h{w} v{h} h{-w} Z"
        rx = min(rx, w/2, h/2)
        ry = rx
        return (
            f"M{x+rx},{y} h{w-2*rx} a{rx},{ry} 0 0 1 {rx},{ry} "
            f"v{h-2*ry} a{rx},{ry} 0 0 1 {-rx},{ry} "
            f"h{-(w-2*rx)} a{rx},{ry} 0 0 1 {-rx},{-ry} "
            f"v{-(h-2*ry)} a{rx},{ry} 0 0 1 {rx},{-ry} Z"
        )
    if tag == "circle":
        cx, cy, r = float(g("cx","0")), float(g("cy","0")), float(g("r","0"))
        return (
            f"M{cx-r},{cy} a{r},{r} 0 1 0 {2*r},0 a{r},{r} 0 1 0 {-2*r},0 Z"
        )
    if tag == "ellipse":
        cx, cy = float(g("cx","0")), float(g("cy","0"))
        rx, ry = float(g("rx","0")), float(g("ry","0"))
        return (
            f"M{cx-rx},{cy} a{rx},{ry} 0 1 0 {2*rx},0 a{rx},{ry} 0 1 0 {-2*rx},0 Z"
        )
    if tag == "polygon":
        pts = g("points","").strip()
        if pts:
            return "M" + pts + " Z"
    if tag == "polyline":
        pts = g("points","").strip()
        if pts:
            return "M" + pts
    if tag == "line":
        x1,y1,x2,y2 = g("x1","0"),g("y1","0"),g("x2","0"),g("y2","0")
        return f"M{x1},{y1} L{x2},{y2}"
    return None

def _collect_shapes(
    elem: etree._Element,
    parent_fill: Optional[str] = None,
    results: Optional[List[Tuple[str, Optional[str]]]] = None,
) -> List[Tuple[str, Optional[str]]]:
    """
    Recursively collect (path_d, fill_color) from all shape elements.
    Returns list of (d_string, '#RRGGBB' | None).
    """
    if results is None:
        results = []
    tag = etree.QName(elem.tag).localname
    fill = _get_fill(elem, parent_fill)

    if tag in _SHAPE_TAGS - {"use","image"}:
        d = _elem_to_path_d(elem)
        if d:
            color = fill or _get_stroke(elem)
            results.append((d, color))
    elif tag == "g":
        for child in elem:
            _collect_shapes(child, fill, results)
    return results

def _collect_shapes_in(elem: etree._Element) -> List[Tuple[str, Optional[str]]]:
    results: List[Tuple[str, Optional[str]]] = []
    for child in elem:
        _collect_shapes(child, None, results)
    return results

# ── SVG bounds / viewbox helpers ─────────────────────────────────────────────
def _parse_viewbox(root: etree._Element) -> Tuple[float, float, float, float]:
    """Return (min_x, min_y, width, height) from viewBox or width/height attrs."""
    vb = root.get("viewBox", "")
    if vb:
        parts = re.split(r"[\s,]+", vb.strip())
        if len(parts) == 4:
            return tuple(float(p) for p in parts)  # type: ignore[return-value]
    w_str = root.get("width", "100")
    h_str = root.get("height", "100")
    w = float(re.sub(r"[^\d.eE+-]", "", w_str) or "100")
    h = float(re.sub(r"[^\d.eE+-]", "", h_str) or "100")
    return 0.0, 0.0, w, h

def _bbox_from_paths(paths: List[str]) -> Dict[str, float]:
    """Crude bbox estimation by scanning numeric coordinates in path strings."""
    xs, ys = [], []
    for d in paths:
        coords = re.findall(r"[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?", d)
        nums = [float(c) for c in coords]
        for i in range(0, len(nums)-1, 2):
            xs.append(nums[i])
            ys.append(nums[i+1])
    if not xs:
        return {"x": 0, "y": 0, "w": 0, "h": 0}
    return {
        "x": min(xs), "y": min(ys),
        "w": max(xs) - min(xs),
        "h": max(ys) - min(ys),
    }

def _make_preview(paths: List[str], color: str,
                  vbx: float, vby: float, vbw: float, vbh: float) -> str:
    """Generate a compact SVG thumbnail with tight bounding box around paths."""
    sample = paths[:80]
    path_els = "".join(
        f'<path d="{d}" fill="{color}" fill-opacity="0.85" stroke="{color}" stroke-width="0.5"/>'
        for d in sample
    )
    # Use tight bounding box so paths fill the thumbnail, not the full SVG viewport
    if sample:
        bounds = _bbox_from_paths(sample)
        if bounds["w"] > 0 and bounds["h"] > 0:
            pad = max(bounds["w"], bounds["h"]) * 0.08
            vbx = bounds["x"] - pad
            vby = bounds["y"] - pad
            vbw = bounds["w"] + 2 * pad
            vbh = bounds["h"] + 2 * pad
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="{vbx} {vby} {vbw} {vbh}" '
        f'width="160" height="100" style="background:#1a1a1a;border-radius:4px">'
        f'{path_els}</svg>'
    )

def _layer_color(shapes: List[Tuple[str, Optional[str]]]) -> str:
    """Most-common non-None fill colour among shapes, or grey default."""
    counts: Dict[str, int] = {}
    for _, c in shapes:
        if c:
            counts[c] = counts.get(c, 0) + 1
    if not counts:
        return "#888888"
    return max(counts, key=lambda k: counts[k])

def _make_layer(
    layer_id: str,
    name: str,
    shapes: List[Tuple[str, Optional[str]]],
    color: Optional[str],
    vbx: float, vby: float, vbw: float, vbh: float,
) -> Dict:
    paths = [d for d, _ in shapes]
    final_color = color or _layer_color(shapes) or "#888888"
    bounds = _bbox_from_paths(paths)
    area = bounds["w"] * bounds["h"]
    preview = _make_preview(paths, final_color, vbx, vby, vbw, vbh)
    return {
        "id": layer_id,
        "name": name,
        "color": final_color,
        "paths": paths,
        "bounds": bounds,
        "area": area,
        "path_count": len(paths),
        "svg_preview": preview,
    }

# ── Detection strategies ─────────────────────────────────────────────────────
def _detect_inkscape(root, vbx, vby, vbw, vbh) -> Optional[List[Dict]]:
    """Inkscape: <g inkscape:groupmode="layer">"""
    ink_layer = _tag(_INK_NS, "groupmode")
    ink_label  = _tag(_INK_NS, "label")
    groups = [
        e for e in root.iter(_tag(_SVG_NS, "g"))
        if e.get(ink_layer) == "layer"
    ]
    if not groups:
        return None
    layers = []
    for idx, g in enumerate(groups):
        shapes = _collect_shapes_in(g)
        if not shapes:
            continue
        name = g.get(ink_label) or g.get("id") or f"Layer {idx+1}"
        color = _layer_color(shapes)
        layers.append(_make_layer(
            f"ink-{idx}", name, shapes, color, vbx, vby, vbw, vbh
        ))
    return layers if layers else None

def _detect_illustrator(root, vbx, vby, vbw, vbh) -> Optional[List[Dict]]:
    """Illustrator: <g id="Layer_N"> or <g id="layerN">"""
    pat = re.compile(r"^[Ll]ayer[_\s]?\d*", re.I)
    groups = [
        e for e in root.iter(_tag(_SVG_NS, "g"))
        if e.get("id") and pat.match(e.get("id",""))
    ]
    if not groups:
        return None
    layers = []
    for idx, g in enumerate(groups):
        shapes = _collect_shapes_in(g)
        if not shapes:
            continue
        name = g.get("id","").replace("_"," ").strip() or f"Layer {idx+1}"
        color = _layer_color(shapes)
        layers.append(_make_layer(
            f"ai-{idx}", name, shapes, color, vbx, vby, vbw, vbh
        ))
    return layers if layers else None

def _detect_named_groups(root, vbx, vby, vbw, vbh) -> Optional[List[Dict]]:
    """Top-level named groups with ≥ 2 paths each."""
    top_groups = [
        e for e in root
        if etree.QName(e.tag).localname == "g"
        and e.get("id")
        and not e.get("id","").startswith("defs")
    ]
    if len(top_groups) < 2:
        return None
    layers = []
    for idx, g in enumerate(top_groups):
        shapes = _collect_shapes_in(g)
        if not shapes:
            continue
        name = (g.get(_tag(_INK_NS,"label"))
                or g.get("id","").replace("_"," ").replace("-"," ").strip()
                or f"Group {idx+1}")
        color = _layer_color(shapes)
        layers.append(_make_layer(
            f"grp-{idx}", name, shapes, color, vbx, vby, vbw, vbh
        ))
    return layers if len(layers) >= 2 else None

def _detect_by_color(root, vbx, vby, vbw, vbh) -> List[Dict]:
    """Group every shape by its fill colour."""
    all_shapes: List[Tuple[str, Optional[str]]] = []
    for elem in root.iter():
        tag = etree.QName(elem.tag).localname
        if tag in _SHAPE_TAGS - {"use","image"}:
            d = _elem_to_path_d(elem)
            if d:
                fill = _get_fill(elem)
                stroke = _get_stroke(elem) if not fill else None
                all_shapes.append((d, fill or stroke))

    groups: Dict[str, List[Tuple[str, Optional[str]]]] = {}
    for d, c in all_shapes:
        key = c or "#888888"
        groups.setdefault(key, []).append((d, c))

    if not groups:
        return [_make_layer("mono-0", "All Paths", all_shapes, "#888888", vbx, vby, vbw, vbh)]

    layers = []
    for idx, (color, shapes) in enumerate(groups.items()):
        name = f"Fill {color}"
        layers.append(_make_layer(
            f"col-{idx}", name, shapes, color, vbx, vby, vbw, vbh
        ))
    return layers

# ── Public API ───────────────────────────────────────────────────────────────
def analyze_svg(svg_bytes: bytes) -> Dict:
    """
    Analyse *svg_bytes* and return a dict with:
      layers      — list of layer dicts
      svg_size    — {w, h}
      source_type — how layers were detected
      viewbox     — raw viewBox string
    """
    try:
        root = etree.fromstring(svg_bytes)
    except etree.XMLSyntaxError as e:
        raise ValueError(f"Invalid SVG: {e}") from e

    vbx, vby, vbw, vbh = _parse_viewbox(root)

    source_type = "monolithic"
    layers: Optional[List[Dict]] = None

    layers = _detect_inkscape(root, vbx, vby, vbw, vbh)
    if layers:
        source_type = "inkscape"
    else:
        layers = _detect_illustrator(root, vbx, vby, vbw, vbh)
        if layers:
            source_type = "illustrator"
        else:
            layers = _detect_named_groups(root, vbx, vby, vbw, vbh)
            if layers:
                source_type = "named_groups"
            else:
                layers = _detect_by_color(root, vbx, vby, vbw, vbh)
                source_type = "color_groups" if len(layers) > 1 else "monolithic"

    # Filter out empty or tiny layers
    layers = [l for l in (layers or []) if l["path_count"] > 0]
    if not layers:
        layers = [_make_layer("mono-0","All Paths",
                               _collect_shapes_in(root), "#888888",
                               vbx, vby, vbw, vbh)]

    return {
        "layers": layers,
        "svg_size": {"w": vbw, "h": vbh},
        "source_type": source_type,
        "viewbox": root.get("viewBox"),
    }
