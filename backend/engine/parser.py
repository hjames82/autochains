"""
ComponentDef parser and Z-height system.
Mirrors the data model from AutoChains_V85.py but runs without Autodesk Fusion.
"""

import os
import re
from dataclasses import dataclass, field
from typing import Optional, List, Dict

BASE_HEIGHTS: List[float] = [12.0, 13.43, 14.86, 16.29, 17.71, 19.14, 20.57, 22.0]

TOL_INSERT_SMALL = 0.1
TOL_INSERT_LARGE = 0.2
TOL_SLIDE_FIT = 0.3
TOL_DETAIL = 0.05
STRUCTURAL_MARGIN = 0.2
LIP_LOCK_DEPTH = 1.0
COVER_FLOOR_THICKNESS = 2.0
GAP_FLOOR_THICKNESS = 0.4
BASE_TRIM_LIP = 2.0


def get_height_mm(level_str: str, parent_level_str: Optional[str] = None) -> float:
    """
    Convert a level string like 'h2', 'h3+', 'h2-' to millimetres.

    '+' means interpolate 1 quarter step toward the next level.
    '-' means interpolate 1 quarter step back toward the previous (or parent) level.
    Multiple +/- signs add additional quarter steps.
    """
    base = re.sub(r'[+-]', '', level_str)
    try:
        idx = int(base.replace('h', ''))
        idx = max(0, min(7, idx))
    except ValueError:
        return BASE_HEIGHTS[0]

    base_mm = BASE_HEIGHTS[idx]

    num_plus = level_str.count('+')
    num_minus = level_str.count('-')

    if num_plus > 0:
        if idx < 7:
            step = (BASE_HEIGHTS[idx + 1] - BASE_HEIGHTS[idx]) / 4.0
        else:
            step = 1.0 / 4.0
        return base_mm + step * num_plus

    if num_minus > 0:
        if parent_level_str:
            parent_base = re.sub(r'[+-]', '', parent_level_str)
            try:
                pidx = int(parent_base.replace('h', ''))
                pidx = max(0, min(7, pidx))
                step = (base_mm - BASE_HEIGHTS[pidx]) / 4.0
            except ValueError:
                step = 1.0 / 4.0
        else:
            step = 1.0 / 4.0
        return base_mm - step * num_minus

    return base_mm


def get_level_sort_val(level_str: str) -> float:
    """Numeric sort key for level strings so components are processed bottom→top."""
    base = re.sub(r'[+-]', '', level_str).replace('h', '')
    try:
        val = float(base)
        val += level_str.count('+') * 0.25
        val -= level_str.count('-') * 0.25
        return val
    except ValueError:
        return 99.0


def get_z_start_and_end(
    comp: 'ComponentDef',
    parent: Optional['ComponentDef'],
) -> tuple[float, float]:
    """
    Return (z_start_mm, z_end_mm) for a component based on its role.

    z_start is where the body starts extruding (offset from XY plane).
    z_end   is the top face height.

    The extrusion distance = z_end - z_start.
    """
    level_mm = get_height_mm(comp.level_str, parent.level_str if parent else None)

    if comp.role == 'base' or parent is None:
        return 0.0, level_mm

    parent_top = get_height_mm(parent.level_str)

    if comp.role == 'core':
        return parent_top, level_mm

    if comp.role in ('insert', 'detail'):
        z_start = parent_top - LIP_LOCK_DEPTH
        return z_start, level_mm

    if comp.role == 'cover':
        return COVER_FLOOR_THICKNESS, level_mm

    if comp.role == 'pillar':
        return 0.0, level_mm

    if comp.role == 'drop':
        return parent_top, level_mm

    return 0.0, level_mm


def get_tool_offset_mm(comp: 'ComponentDef') -> float:
    """Lateral buffer applied to create the cut pocket tool body."""
    if comp.tol_override is not None:
        try:
            return float(comp.tol_override)
        except ValueError:
            pass
    if comp.role == 'detail':
        return TOL_DETAIL
    if comp.role == 'insert':
        return TOL_INSERT_SMALL + STRUCTURAL_MARGIN
    if comp.role == 'cover':
        return TOL_SLIDE_FIT + STRUCTURAL_MARGIN
    return 0.0


@dataclass
class ComponentDef:
    raw_filename: str
    params: Dict[str, str] = field(default_factory=dict)
    level_str: str = 'h0'
    material: str = 'DefaultMaterial'
    name: str = ''
    parent_name: str = 'None'
    role: str = 'core'
    hex_color: str = '888888'
    inflate_val: float = 0.0
    explicit_cuts: List[str] = field(default_factory=list)
    tol_override: Optional[float] = None

    @classmethod
    def from_filename(cls, filename: str) -> 'ComponentDef':
        clean_name = os.path.splitext(filename)[0].strip()
        params: Dict[str, str] = {}
        for part in clean_name.split('__'):
            if '=' in part:
                k, v = part.split('=', 1)
                params[k.strip()] = v.strip()

        level_str = params.get('lvl', 'h0')
        material = params.get('col', 'DefaultMaterial')
        name = params.get('sem', clean_name)
        parent_name = params.get('par', 'None')
        role = params.get('rol', 'core').lower()
        hex_color = params.get('hex', '888888')

        try:
            inflate_val = float(params.get('inf', '0'))
        except ValueError:
            inflate_val = 0.0

        cut_raw = params.get('cut', '')
        explicit_cuts = [c.strip() for c in cut_raw.split(',')] if cut_raw else []

        tol_override: Optional[float] = None
        tol_raw = params.get('tol', None)
        if tol_raw is not None:
            try:
                tol_override = float(tol_raw)
            except ValueError:
                pass

        return cls(
            raw_filename=filename,
            params=params,
            level_str=level_str,
            material=material,
            name=name,
            parent_name=parent_name,
            role=role,
            hex_color=hex_color,
            inflate_val=inflate_val,
            explicit_cuts=explicit_cuts,
            tol_override=tol_override,
        )

    def hex_rgb(self) -> tuple[int, int, int]:
        """Return (r, g, b) tuple from hex_color string."""
        h = self.hex_color.strip('#')
        if len(h) < 6:
            h = h.zfill(6)
        try:
            return int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
        except ValueError:
            return 136, 136, 136
