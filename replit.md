# AutoChains Web

## Project Overview

AutoChains Web is a browser-based replacement for the desktop AutoChains V85 pipeline. It converts 2D vector artwork (SVGs with `lvl=` layer naming) into 3D pendant models using a web-first stack — no Adobe Illustrator or Autodesk Fusion 360 required.

## Architecture

Two-process full-stack application:

- **Frontend**: React + Vite + TypeScript, port 5000 (Replit webview)
- **Backend**: FastAPI + Python, port 8000 (internal)

The frontend proxies all `/api/*` requests to the backend via Vite's dev proxy.

### Project Structure

```
frontend/           React + Vite + TypeScript app
  src/
    App.tsx         Root layout + full shared state (layers, jobId, scale, modelUrl…)
    App.module.css
    types.ts        Shared TypeScript types (LayerFile, AppState, JobStatus)
    declarations.d.ts  CSS module type declarations
    utils/
      parseLayer.ts   Filename parser, buildFilename, ROLE_COLORS, LEVELS, ROLES
    components/
      LayerPanel.tsx     Left sidebar — drag-and-drop SVG upload, layer cards, inline param editor
      LayerPanel.module.css
      ViewerPanel.tsx    Center — Three.js viewer (OrbitControls, GLTFLoader, grid, lighting)
      ViewerPanel.module.css
      ControlPanel.tsx   Right panel — scale slider, generate + polling, swap buttons, export
      ControlPanel.module.css
    index.css       Global CSS variables and resets
  vite.config.ts    Host 0.0.0.0:5000, proxy /api → localhost:8000, allowedHosts:true
  package.json

backend/            FastAPI Python API
  main.py           App entry point, CORS, health, generate/job/result endpoints
  requirements.txt  fastapi, uvicorn, svgpathtools, shapely, trimesh, manifold3d
  engine/
    __init__.py
    parser.py       ComponentDef class + Z-height system (get_height_mm, get_z_start_and_end)
    svg_extractor.py  SVG → Shapely polygon extraction (handles holes, Y-flip)
    pipeline.py     5-phase geometry pipeline (extrude, tool buffers, boolean ops, post-process)
    exporter.py     GLB (binary GLTF) + STL export from manifold3d Manifold objects

PoppChainsAuto/     Original component library assets
  *.f3d             Autodesk Fusion component files
  *.dxf             DXF marker files for positioning

AutoChains_V85.py   Original Fusion script (reference for geometry engine logic)
```

### Brand Colors
- Background: `#131313`
- Surface: `#1a1a1a`
- Accent / lime: `#C4F500`
- Purple: `#7f00ff`
- Text muted: `#a0a0a0`

## Workflows

| Name | Command | Port | Type |
|------|---------|------|------|
| Start application | `cd frontend && npm run dev` | 5000 | webview |
| Start backend | `cd backend && uvicorn main:app --host localhost --port 8000 --reload` | 8000 | console |

## Deployment

- **Target**: Autoscale
- **Run**: `bash -c "cd backend && uvicorn main:app --host 0.0.0.0 --port 5000"`
- For production, a built React SPA should be served by FastAPI static files or a CDN

## Task Roadmap

| Task | Status |
|------|--------|
| #1 Project Foundation & Scaffold | Done |
| #2 3D Geometry Engine (Backend) | Done |
| #3 Frontend Application UI | Done |
| #4 Component Swap Actions & Library | Pending |

## Layer Naming Convention

SVG filenames must follow: `lvl=h2__sem=Body__rol=core__par=Base__col=White__hex=FFFFFF.svg`

| Param | Meaning |
|-------|---------|
| `lvl` | Z-height level (h0–h7, fractional: h2+, h3-) |
| `sem` | Semantic part name |
| `rol` | Role: base, core, insert, detail, cover, pillar, drop |
| `par` | Parent component name (for boolean ops) |
| `col` | Material name |
| `hex` | 6-digit hex color |
| `inf` | Side-wall inflate amount in mm |

## Height Reference

| Level | Height |
|-------|--------|
| h0 | 12.00 mm |
| h1 | 13.43 mm |
| h2 | 14.86 mm |
| h3 | 16.29 mm |
| h4 | 17.71 mm |
| h5 | 19.14 mm |
| h6 | 20.57 mm |
| h7 | 22.00 mm |
