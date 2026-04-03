import { useState, useCallback, useRef, useEffect } from 'react'
import LayerPanel from './components/LayerPanel'
import ViewerPanel from './components/ViewerPanel'
import ControlPanel from './components/ControlPanel'
import CadWorkspace from './components/CadWorkspace'
import ErrorBoundary from './components/ErrorBoundary'
import DebugPanel from './components/DebugPanel'
import styles from './App.module.css'
import { AppState, LayerFile, JobStatus } from './types'
import { makeLayerFile } from './utils/parseLayer'

// Initialise fetch interceptor (side-effect import — must come after React)
import './utils/debugLogger'

const POLL_INTERVAL = 1200

export default function App() {
  const [appMode, setAppMode] = useState<'classic' | 'cad'>('classic')

  // ── Classic pipeline state ─────────────────────────────────────────────────
  const [layers, setLayers] = useState<LayerFile[]>([])
  const [scale, setScale] = useState(1.0)
  const [mode, setMode] = useState<'SVG' | 'DXF'>('SVG')
  const [jobId, setJobId] = useState<string | null>(null)
  const [jobStatus, setJobStatus] = useState<JobStatus>('idle')
  const [jobLogs, setJobLogs] = useState<string[]>([])
  const [jobError, setJobError] = useState<string | null>(null)
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [stlUrl, setStlUrl] = useState<string | null>(null)
  const [stats, setStats] = useState<Record<string, unknown> | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const svgs = Array.from(incoming).filter(f => f.name.toLowerCase().endsWith('.svg'))
    if (!svgs.length) return
    setLayers(prev => {
      const existingIds = new Set(prev.map(l => l.file.name))
      const newEntries = svgs
        .filter(f => !existingIds.has(f.name))
        .map(makeLayerFile)
      const merged = [...prev, ...newEntries]
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

  const state: AppState = { layers, scale, mode, jobId, jobStatus, jobLogs, jobError, modelUrl, stlUrl, stats }

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
          <CadWorkspace />
        )}
      </div>
      <DebugPanel />
    </div>
    </ErrorBoundary>
  )
}
