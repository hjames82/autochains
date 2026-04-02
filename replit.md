# AutoChains V85

## Project Overview

AutoChains is an automation workflow that converts 2D vector graphics from Adobe Illustrator into 3D models within Autodesk Fusion. It specializes in "2.5D Layer Decomposition" for creating PoppChains (custom charms/keychains).

## Architecture

This is a desktop automation scripting project — not a traditional web application. The files are scripts meant to be installed into Adobe Illustrator and Autodesk Fusion on a Windows machine.

### Key Files

- **`AutoChains_V85.py`** / **`AutoChains_v85_1.py`** — Core Python script for Autodesk Fusion (uses `adsk` API)
- **`ExportAllLayersToSVGs.js`** — ExtendScript for Adobe Illustrator to export layers as SVGs
- **`01_START_HERE_Setup_Guide.html`** — Comprehensive setup guide (served as the web preview)
- **`PoppChainsAuto/`** — Library of 3D component files (.f3d) and vector markers (.dxf)
- **`serve.py`** — Simple Python HTTP server that serves the setup guide on port 5000

## Workflow

The Replit web preview serves the `01_START_HERE_Setup_Guide.html` file via `serve.py` running on port 5000. This lets users read the full installation and usage documentation in-browser.

### Desktop Workflow (actual automation)

1. **Illustrator**: User names layers using the `lvl=` syntax convention
2. **Export**: `ExportAllLayersToSVGs.js` exports layers as SVGs to `D:\POPP CHAINS\Automation_SVGs`
3. **Fusion**: `AutoChains_V85.py` reads the SVGs and component library from `D:\PoppChainsAuto` to generate the 3D model

## Deployment

- **Target**: Autoscale
- **Run command**: `python serve.py`
- **Port**: 5000
