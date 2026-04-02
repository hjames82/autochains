"""
GLTF / STL exporter.

Converts a list of BodyResult objects (manifold3d Manifolds + metadata)
into a GLB (binary GLTF) and STL byte blob for download.

Each body gets per-mesh colour from its hex_color field.
"""

import logging
from typing import List, Optional, Tuple

import numpy as np
import trimesh
import manifold3d as m3d

from .pipeline import BodyResult

log = logging.getLogger(__name__)


def _hex_to_rgba(hex_str: str) -> List[int]:
    """Convert a 6-digit hex string (no #) to [R, G, B, 255]."""
    h = hex_str.strip('#').zfill(6)
    try:
        r = int(h[0:2], 16)
        g = int(h[2:4], 16)
        b = int(h[4:6], 16)
    except ValueError:
        r, g, b = 136, 136, 136
    return [r, g, b, 255]


def _manifold_to_colored_trimesh(
    man: m3d.Manifold,
    rgba: List[int],
) -> Optional[trimesh.Trimesh]:
    """Convert a manifold3d Manifold to a vertex-coloured trimesh.Trimesh."""
    try:
        m = man.to_mesh()
        verts = np.array(m.vert_properties, dtype=np.float64)
        tris = np.array(m.tri_verts, dtype=np.int32)
        mesh = trimesh.Trimesh(vertices=verts, faces=tris, process=False)
        mesh.fix_normals()

        face_colors = np.array([rgba] * len(mesh.faces), dtype=np.uint8)
        mesh.visual = trimesh.visual.ColorVisuals(mesh, face_colors=face_colors)
        return mesh
    except Exception as e:
        log.debug("manifold_to_colored_trimesh failed: %s", e)
        return None


def export_glb(results: List[BodyResult]) -> bytes:
    """
    Export all BodyResult bodies as a single binary GLTF (GLB) blob.

    Each sub-body is a separate node in the scene, coloured by its hex_color.
    """
    scene = trimesh.scene.Scene()

    for br in results:
        rgba = _hex_to_rgba(br.hex_color)
        for i, man in enumerate(br.bodies):
            if man.is_empty():
                continue
            mesh = _manifold_to_colored_trimesh(man, rgba)
            if mesh is None:
                continue
            geom_name = f"{br.name}_{i}" if len(br.bodies) > 1 else br.name
            scene.add_geometry(mesh, geom_name=geom_name)

    if not scene.geometry:
        raise RuntimeError("No geometry to export.")

    try:
        data = scene.export(file_type='glb')
        if not data or len(data) < 8:
            raise RuntimeError("GLB export produced empty output.")
        return data
    except Exception as e:
        raise RuntimeError(f"GLB export failed: {e}") from e


def export_stl(results: List[BodyResult]) -> bytes:
    """
    Export all BodyResult bodies merged into a single STL blob.

    STL has no colour, so all bodies are unioned into one mesh.
    """
    meshes: List[trimesh.Trimesh] = []

    for br in results:
        for man in br.bodies:
            if man.is_empty():
                continue
            try:
                m = man.to_mesh()
                verts = np.array(m.vert_properties, dtype=np.float64)
                tris = np.array(m.tri_verts, dtype=np.int32)
                mesh = trimesh.Trimesh(vertices=verts, faces=tris, process=False)
                mesh.fix_normals()
                meshes.append(mesh)
            except Exception as e:
                log.debug("STL mesh conversion failed: %s", e)

    if not meshes:
        raise RuntimeError("No geometry to export.")

    if len(meshes) == 1:
        combined = meshes[0]
    else:
        combined = trimesh.util.concatenate(meshes)

    try:
        data = combined.export(file_type='stl')
        if not data:
            raise RuntimeError("STL export produced empty output.")
        return data
    except Exception as e:
        raise RuntimeError(f"STL export failed: {e}") from e


def get_scene_stats(results: List[BodyResult]) -> dict:
    """Return basic statistics about the exported scene."""
    total_faces = 0
    total_bodies = 0
    component_names = []
    for br in results:
        component_names.append(br.name)
        for man in br.bodies:
            if not man.is_empty():
                total_bodies += 1
                try:
                    total_faces += man.to_mesh().tri_verts.shape[0]
                except Exception:
                    pass
    return {
        "components": len(results),
        "bodies": total_bodies,
        "faces": total_faces,
        "component_names": component_names,
    }
