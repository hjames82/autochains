import { useState, useCallback, useRef, useEffect } from 'react'
import LayerPanel from './components/LayerPanel'
import ViewerPanel from './components/ViewerPanel'
import ControlPanel from './components/ControlPanel'
import CadWorkspace from './components/CadWorkspace'
import ErrorBoundary from './components/ErrorBoundary'
import DebugPanel from './components/DebugPanel'
import styles from './App.module.css'
import { AppState, LayerFile, JobStatus, SvgLayerDef } from './types'
import { makeLayerFile } from './utils/parseLayer'

// ── Helpers for SVG layer expansion ───────────────────────────────────────────
function sanitizeSem(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/^_+|_+$/g, '').slice(0, 30) || 'Layer'
}

function buildLayerSvg(paths: string[], color: string, viewbox: string): string {
  const pathEls = paths
    .map(d => `  <path d="${d.replace(/"/g, '&quot;')}" fill="${color}" fill-opacity="0.85"/>`)
    .join('\n')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}">\n${pathEls}\n</svg>`
}

const LEVEL_LADDER = ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'] as const

// Initialise fetch interceptor (side-effect import — must come after React)
import './utils/debugLogger'

const POLL_INTERVAL = 1200

export default function App() {
  const [appMode, setAppMode] = useState<'classic' | 'cad'>('classic')

  // ── Shared SVG file (synced between modes) ─────────────────────────────────
  const [sharedSvgFile, setSharedSvgFile] = useState<File | null>(null)
  const [classicAnalyzing, setClassicAnalyzing] = useState(false)

  // ── Classic pipeline state ─────────────────────────────────────────────────
  const [layers, setLayers] = useState<LayerFile[]>([])
  const [scale, setScale] = useState(1.0)
  const [mode, setMode] = useState<'SVG' | 'DXF'>('SVG')
  const [jobId, setJobId] = useState<string | null>(null)
  const [jobStatus, setJobStatus] = useState<JobStatus>('idle')
  const [jobLogs, setJobLogs] = useState<string[]>([])
  const [jobError, setJobError] = useState<string | null>(null)
  const [jobTraceback, setJobTraceback] = useState<string | null>(null)
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [stlUrl, setStlUrl] = useState<string | null>(null)
  const [stats, setStats] = useState<Record<string, unknown> | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const addFiles = useCallback(async (incoming: FileList | File[]) => {
    const svgs = Array.from(incoming).filter(f => f.name.toLowerCase().endsWith('.svg'))
    if (!svgs.length) return

    // Files that already follow the lvl= naming convention pass through unchanged
    const named   = svgs.filter(f => f.name.includes('lvl='))
    const unnamed = svgs.filter(f => !f.name.includes('lvl='))

    const filesToAdd: File[] = [...named]
    // Map from reconstructed filename → svg_preview HTML (for thumbnails)
    const previewMap = new Map<string, string>()
    // The original file to share with CAD Workspace (never a reconstructed layer)
    let originalForCad: File | null = named[0] ?? null

    if (unnamed.length > 0) {
      setClassicAnalyzing(true)
      try {
        for (const svgFile of unnamed) {
          // The first unnamed file is the one to share with CAD Workspace
          if (!originalForCad) originalForCad = svgFile

          const fd = new FormData()
          fd.append('file', svgFile)
          const r = await fetch('/api/analyze-svg', { method: 'POST', body: fd })
          if (!r.ok) { filesToAdd.push(svgFile); continue }

          const data = await r.json()
          const detectedLayers = data.layers as SvgLayerDef[]
          const viewbox: string = data.viewbox ?? '0 0 100 100'

          // Single / monolithic result → keep original file as one layer
          if (detectedLayers.length <= 1) {
            filesToAdd.push(svgFile)
          } else {
            // Multiple layers → reconstruct one SVG per layer and auto-name it
            detectedLayers.forEach((layer, i) => {
              const hex  = layer.color.replace('#', '').toUpperCase().padEnd(6, '0')
              const sem  = sanitizeSem(layer.name || `Layer${i + 1}`)
              const lvl  = LEVEL_LADDER[Math.min(i, LEVEL_LADDER.length - 1)]
              const filename = `lvl=${lvl}__sem=${sem}__rol=base__hex=${hex}.svg`
              const svgContent = buildLayerSvg(layer.paths, layer.color, viewbox)
              const blob = new Blob([svgContent], { type: 'image/svg+xml' })
              const file = new File([blob], filename, { type: 'image/svg+xml' })
              filesToAdd.push(file)
              if (layer.svg_preview) previewMap.set(filename, layer.svg_preview)
            })
          }
        }
      } catch {
        filesToAdd.push(...unnamed)
      } finally {
        setClassicAnalyzing(false)
      }
    }

    if (!filesToAdd.length) return
    // Share the ORIGINAL file with CAD Workspace, not a reconstructed layer slice
    if (originalForCad) setSharedSvgFile(originalForCad)
    setLayers(prev => {
      const existingIds = new Set(prev.map(l => l.file.name))
      const newEntries = filesToAdd
        .filter(f => !existingIds.has(f.name))
        .map(f => {
          const lf = makeLayerFile(f)
          const preview = previewMap.get(f.name)
          return preview ? { ...lf, svgPreview: preview } : lf
        })
      const merged = [...prev, ...newEntries]
      merged.sort((a, b) => a.sortKey - b.sortKey)
      return merged
    })
  }, [])

  // Called by CadWorkspace when the user uploads an SVG there
  const handleCadFileUploaded = useCallback((file: File) => {
    setSharedSvgFile(file)
    setLayers(prev => {
      if (prev.some(l => l.file.name === file.name)) return prev
      const merged = [...prev, makeLayerFile(file)]
      merged.sort((a, b) => a.sortKey - b.sortKey)
      return merged
    })
  }, [])

  const removeLayer = useCallback((id: string) => {
    setLayers(prev => prev.filter(l => l.id !== id))
  }, [])

  const updateLayer = useCallback((id: string, updates: Partial<LayerFile>) => {
    setLayers(prev => {
      const next = prev.map(l => l.id === id ? { ...l, ...updates } : l)
      next.sort((a, b) => a.sortKey - b.sortKey)
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    if (pollRef.current) clearInterval(pollRef.current)
    setLayers([])
    setJobId(null)
    setJobStatus('idle')
    setJobLogs([])
    setJobError(null)
    setJobTraceback(null)
    if (modelUrl) URL.revokeObjectURL(modelUrl)
    setModelUrl(null)
    setStlUrl(null)
    setStats(null)
  }, [modelUrl])

  const startPolling = useCallback((id: string) => {
    if (pollRef.current) clearInterval(pollRef.current)
    const poll = async () => {
      try {
        const r = await fetch(`/api/job/${id}`)
        if (!r.ok) return
        const data = await r.json()
        setJobLogs(data.logs ?? [])
        if (data.status === 'done') {
          clearInterval(pollRef.current!)
          setJobStatus('done')
          setStats(data.stats ?? null)
          setModelUrl(`/api/result/${id}/model.gltf`)
          setStlUrl(`/api/result/${id}/model.stl`)
        } else if (data.status === 'error') {
          clearInterval(pollRef.current!)
          setJobStatus('error')
          setJobError(data.error ?? 'Unknown error')
          setJobTraceback(data.traceback ?? null)
        } else {
          setJobStatus(data.status as JobStatus)
        }
      } catch {
        // transient network hiccup; keep polling
      }
    }
    pollRef.current = setInterval(poll, POLL_INTERVAL)
    poll()
  }, [])

  const generate = useCallback(async () => {
    if (!layers.length) return
    setJobStatus('pending')
    setJobLogs([])
    setJobError(null)
    setModelUrl(null)
    setStlUrl(null)
    setStats(null)

    const fd = new FormData()
    fd.append('scale', String(scale))
    fd.append('mode', mode)
    for (const layer of layers) {
      const newFile = new File([layer.file], layer.file.name, { type: layer.file.type })
      fd.append('files', newFile)
    }

    try {
      const r = await fetch('/api/generate', { method: 'POST', body: fd })
      if (!r.ok) {
        const msg = await r.text()
        setJobStatus('error')
        setJobError(msg)
        return
      }
      const { job_id } = await r.json()
      setJobId(job_id)
      startPolling(job_id)
    } catch (e) {
      setJobStatus('error')
      setJobError(String(e))
    }
  }, [layers, scale, startPolling])

  const swap = useCallback(async (component: string) => {
    if (!jobId || jobStatus !== 'done') return
    setJobStatus('pending')
    try {
      const r = await fetch(`/api/swap/${jobId}/${component}`, { method: 'POST' })
      if (!r.ok) {
        setJobStatus('error')
        setJobError(await r.text())
        return
      }
      const { job_id } = await r.json()
      setJobId(job_id)
      setModelUrl(null)
      startPolling(job_id)
    } catch (e) {
      setJobStatus('error')
      setJobError(String(e))
    }
  }, [jobId, jobStatus, startPolling])

  useEffect(() => {
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [])

  const state: AppState = { layers, scale, mode, jobId, jobStatus, jobLogs, jobError, jobTraceback, modelUrl, stlUrl, stats }

  return (
    <ErrorBoundary>
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⛓️</span>
            <span className={styles.logoName}>AutoChains</span>
            <span className={styles.logoBadge}>Web</span>
          </div>
        </div>

        <nav className={styles.modeNav}>
          <button
            className={`${styles.modeBtn} ${appMode === 'classic' ? styles.modeBtnActive : ''}`}
            onClick={() => setAppMode('classic')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Classic Pipeline
          </button>
          <button
            className={`${styles.modeBtn} ${appMode === 'cad' ? styles.modeBtnActive : ''}`}
            onClick={() => setAppMode('cad')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22 8.5 12 15.5 2 8.5"/>
            </svg>
            CAD Workspace
          </button>
        </nav>

        <div className={styles.headerRight}>
          {appMode === 'classic' && layers.length > 0 && (
            <button className={styles.clearBtn} onClick={clearAll} title="Clear all layers and reset">
              Clear / Reset
            </button>
          )}
        </div>
      </header>

      <div className={`${styles.workspace} ${appMode === 'cad' ? styles.workspaceFull : ''}`}>
        {appMode === 'classic' ? (
          <>
            <aside className={styles.sidebar}>
              <LayerPanel
                layers={layers}
                onAddFiles={addFiles}
                onRemoveLayer={removeLayer}
                onUpdateLayer={updateLayer}
                analyzing={classicAnalyzing}
              />
            </aside>
            <main className={styles.viewer}>
              <ViewerPanel state={state} />
            </main>
            <aside className={styles.controls}>
              <ControlPanel
                state={state}
                scale={scale}
                onScaleChange={setScale}
                onModeChange={setMode}
                onGenerate={generate}
                onSwap={swap}
              />
            </aside>
          </>
        ) : (
          <CadWorkspace
            initialFile={sharedSvgFile}
            onFileUploaded={handleCadFileUploaded}
          />
        )}
      </div>
      <DebugPanel />
    </div>
    </ErrorBoundary>
  )
}
