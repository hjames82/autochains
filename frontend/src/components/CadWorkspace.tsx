import { useState, useCallback, useRef, useEffect, DragEvent, ChangeEvent } from 'react'
import { SvgLayerDef, CadLayerState, CadFeature, CadFeatureType, CadMaterial, JobStatus } from '../types'
import ViewerPanel from './ViewerPanel'
import ToolPanel from './ToolPanel'
import styles from './CadWorkspace.module.css'

let _featureCounter = 0
function newFeatureId() { return `feat-${++_featureCounter}` }

const DEFAULT_MATERIAL: CadMaterial = { color: '#888888', metalness: 0.15, roughness: 0.6 }
const POLL_INTERVAL = 1200

function layerToState(def: SvgLayerDef): CadLayerState {
  return {
    layerId: def.id,
    name: def.name,
    color: def.color,
    paths: def.paths,
    visible: true,
    features: [],
    material: { ...DEFAULT_MATERIAL, color: def.color },
  }
}

// ── Fake AppState shim so ViewerPanel stays unchanged ────────────────────────
function makeViewerState(
  jobStatus: JobStatus,
  jobLogs: string[],
  jobError: string | null,
  modelUrl: string | null,
  stlUrl: string | null,
) {
  return {
    layers: [],
    scale: 1,
    mode: 'SVG' as const,
    jobId: null,
    jobStatus,
    jobLogs,
    jobError,
    modelUrl,
    stlUrl,
    stats: null,
  }
}

// ── SVG Drop Zone ─────────────────────────────────────────────────────────────
function SvgDropZone({
  onFile,
  analyzing,
  error,
}: {
  onFile: (f: File) => void
  analyzing: boolean
  error: string | null
}) {
  const [drag, setDrag] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setDrag(false)
      const f = Array.from(e.dataTransfer.files).find(f =>
        f.name.toLowerCase().endsWith('.svg'),
      )
      if (f) onFile(f)
    },
    [onFile],
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]
      if (f) onFile(f)
      e.target.value = ''
    },
    [onFile],
  )

  return (
    <div
      className={`${styles.dropZone} ${drag ? styles.dropZoneActive : ''} ${analyzing ? styles.dropZoneAnalyzing : ''}`}
      onDrop={handleDrop}
      onDragOver={e => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onClick={() => !analyzing && inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && !analyzing && inputRef.current?.click()}
    >
      <input ref={inputRef} type="file" accept=".svg" style={{ display: 'none' }} onChange={handleChange} />
      {analyzing ? (
        <>
          <div className={styles.analyzeSpinner} />
          <p>Analyzing SVG layers…</p>
        </>
      ) : (
        <>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <p>{drag ? 'Drop SVG here' : 'Drop or click to upload SVG'}</p>
          <span>Layers detected automatically from colors, groups, and structure</span>
        </>
      )}
      {error && <p className={styles.analyzeError}>{error}</p>}
    </div>
  )
}

// ── Layer Card ────────────────────────────────────────────────────────────────
function LayerCard({
  layer,
  def,
  selected,
  onSelect,
  onToggleVisible,
}: {
  layer: CadLayerState
  def?: SvgLayerDef
  selected: boolean
  onSelect: () => void
  onToggleVisible: () => void
}) {
  return (
    <div
      className={`${styles.layerCard} ${selected ? styles.layerCardSelected : ''} ${!layer.visible ? styles.layerCardHidden : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
    >
      <div className={styles.layerSwatch} style={{ background: layer.color }} />
      <div className={styles.layerInfo}>
        <span className={styles.layerName}>{layer.name}</span>
        <span className={styles.layerMeta}>
          {def?.path_count ?? 0} path{(def?.path_count ?? 0) !== 1 ? 's' : ''}
          {layer.features.length > 0 && (
            <span className={styles.featuresBadge}>{layer.features.length} op{layer.features.length !== 1 ? 's' : ''}</span>
          )}
        </span>
      </div>
      <button
        className={`${styles.visBtn} ${!layer.visible ? styles.visBtnOff : ''}`}
        title={layer.visible ? 'Hide layer' : 'Show layer'}
        onClick={e => { e.stopPropagation(); onToggleVisible() }}
      >
        {layer.visible ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          </svg>
        )}
      </button>
    </div>
  )
}

// ── Main Workspace ────────────────────────────────────────────────────────────
export default function CadWorkspace() {
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState<string | null>(null)
  const [detectedLayers, setDetectedLayers] = useState<SvgLayerDef[]>([])
  const [svgSize, setSvgSize] = useState<{ w: number; h: number }>({ w: 100, h: 100 })
  const [sourceType, setSourceType] = useState<string>('')
  const [cadLayers, setCadLayers] = useState<CadLayerState[]>([])
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null)

  const [jobStatus, setJobStatus] = useState<JobStatus>('idle')
  const [jobLogs, setJobLogs] = useState<string[]>([])
  const [jobError, setJobError] = useState<string | null>(null)
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [stlUrl, setStlUrl] = useState<string | null>(null)

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // ── SVG Analysis ────────────────────────────────────────────────────────────
  const handleSvgFile = useCallback(async (file: File) => {
    setAnalyzing(true)
    setAnalyzeError(null)
    setDetectedLayers([])
    setCadLayers([])
    setSelectedLayerId(null)
    setModelUrl(null)
    setStlUrl(null)
    setJobStatus('idle')
    setJobLogs([])

    try {
      const fd = new FormData()
      fd.append('file', file)
      const r = await fetch('/api/analyze-svg', { method: 'POST', body: fd })
      if (!r.ok) {
        const msg = await r.text()
        setAnalyzeError(msg)
        return
      }
      const data = await r.json()
      setDetectedLayers(data.layers ?? [])
      setSvgSize(data.svg_size ?? { w: 100, h: 100 })
      setSourceType(data.source_type ?? 'unknown')
      setCadLayers((data.layers ?? []).map(layerToState))
      if (data.layers?.length > 0) {
        setSelectedLayerId(data.layers[0].id)
      }
    } catch (e) {
      setAnalyzeError(String(e))
    } finally {
      setAnalyzing(false)
    }
  }, [])

  // ── Polling ─────────────────────────────────────────────────────────────────
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
          setModelUrl(`/api/result/${id}/model.gltf`)
          setStlUrl(`/api/result/${id}/model.stl`)
        } else if (data.status === 'error') {
          clearInterval(pollRef.current!)
          setJobStatus('error')
          setJobError(data.error ?? 'Unknown error')
        } else {
          setJobStatus(data.status as JobStatus)
        }
      } catch { /* network hiccup, keep polling */ }
    }
    pollRef.current = setInterval(poll, POLL_INTERVAL)
    poll()
  }, [])

  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current) }, [])

  // ── Build 3D ────────────────────────────────────────────────────────────────
  const buildModel = useCallback(async () => {
    const visible = cadLayers.filter(l => l.visible)
    if (!visible.length) return

    setJobStatus('pending')
    setJobLogs([])
    setJobError(null)
    setModelUrl(null)

    const payload = {
      layers: cadLayers.map(l => ({
        id: l.layerId,
        name: l.name,
        color: l.color,
        paths: l.paths,
        visible: l.visible,
        features: l.features.filter(f => f.enabled),
        material: l.material,
      })),
      svg_size: svgSize,
      combine_ops: [],
    }

    try {
      const r = await fetch('/api/cad-build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!r.ok) {
        setJobStatus('error')
        setJobError(await r.text())
        return
      }
      const { job_id } = await r.json()
      startPolling(job_id)
    } catch (e) {
      setJobStatus('error')
      setJobError(String(e))
    }
  }, [cadLayers, svgSize, startPolling])

  // ── Layer mutations ──────────────────────────────────────────────────────────
  const updateLayer = useCallback((layerId: string, updates: Partial<CadLayerState>) => {
    setCadLayers(prev => prev.map(l => l.layerId === layerId ? { ...l, ...updates } : l))
  }, [])

  const addFeature = useCallback((layerId: string, type: CadFeatureType) => {
    const defaultParams: Record<CadFeatureType, object> = {
      extrude:    { height: 5.0, taper_angle: 0 },
      press_pull: { delta: 2.0 },
      revolve:    { degrees: 360, axis: 'Y', segments: 36 },
      fillet:     { radius: 1.0, mode: 'outer' },
      shell:      { thickness: 1.5 },
      holes:      { holes: [{ x: 0, y: 0, r: 2, depth: 5 }] },
      combine:    { target_layer_id: '', operation: 'union' },
      split:      { plane_z: 5.0, keep: 'bottom' },
      translate:  { x: 0, y: 0, z: 0 },
      rotate:     { x: 0, y: 0, z: 0 },
    }
    const feat: CadFeature = {
      id: newFeatureId(),
      type,
      params: { ...defaultParams[type] } as CadFeature['params'],
      enabled: true,
    }
    setCadLayers(prev => prev.map(l =>
      l.layerId === layerId ? { ...l, features: [...l.features, feat] } : l
    ))
  }, [])

  const removeFeature = useCallback((layerId: string, featId: string) => {
    setCadLayers(prev => prev.map(l =>
      l.layerId === layerId
        ? { ...l, features: l.features.filter(f => f.id !== featId) }
        : l
    ))
  }, [])

  const updateFeature = useCallback((layerId: string, featId: string, updates: Partial<CadFeature>) => {
    setCadLayers(prev => prev.map(l =>
      l.layerId === layerId
        ? { ...l, features: l.features.map(f => f.id === featId ? { ...f, ...updates } : f) }
        : l
    ))
  }, [])

  const moveFeature = useCallback((layerId: string, featId: string, dir: -1 | 1) => {
    setCadLayers(prev => prev.map(l => {
      if (l.layerId !== layerId) return l
      const idx = l.features.findIndex(f => f.id === featId)
      if (idx < 0) return l
      const next = idx + dir
      if (next < 0 || next >= l.features.length) return l
      const feats = [...l.features]
      ;[feats[idx], feats[next]] = [feats[next], feats[idx]]
      return { ...l, features: feats }
    }))
  }, [])

  const selectedLayer = cadLayers.find(l => l.layerId === selectedLayerId) ?? null

  const viewerState = makeViewerState(jobStatus, jobLogs, jobError, modelUrl, stlUrl)

  const hasLayers = cadLayers.length > 0
  const canBuild = hasLayers && cadLayers.some(l => l.visible && l.features.length > 0)

  return (
    <div className={styles.workspace}>
      {/* ── Left Panel: Layers ── */}
      <aside className={styles.leftPanel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>Layers</span>
          {sourceType && (
            <span className={styles.sourceBadge} title={`Detected via: ${sourceType}`}>
              {sourceType.replace('_', ' ')}
            </span>
          )}
        </div>

        <SvgDropZone onFile={handleSvgFile} analyzing={analyzing} error={analyzeError} />

        {hasLayers && (
          <div className={styles.layerList}>
            <p className={styles.listLabel}>{cadLayers.length} LAYER{cadLayers.length !== 1 ? 'S' : ''} DETECTED</p>
            {cadLayers.map(layer => (
              <LayerCard
                key={layer.layerId}
                layer={layer}
                def={detectedLayers.find(d => d.id === layer.layerId)}
                selected={selectedLayerId === layer.layerId}
                onSelect={() => setSelectedLayerId(layer.layerId)}
                onToggleVisible={() => updateLayer(layer.layerId, { visible: !layer.visible })}
              />
            ))}
          </div>
        )}

        {hasLayers && (
          <div className={styles.svgPreviewArea}>
            <p className={styles.listLabel}>SVG LAYER PREVIEWS</p>
            {detectedLayers.map(def => (
              <div
                key={def.id}
                className={`${styles.previewCard} ${selectedLayerId === def.id ? styles.previewCardSelected : ''}`}
                onClick={() => setSelectedLayerId(def.id)}
                title={def.name}
              >
                <div
                  className={styles.previewSvg}
                  dangerouslySetInnerHTML={{ __html: def.svg_preview }}
                />
                <span className={styles.previewLabel}>{def.name}</span>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* ── Center: 3D Viewer ── */}
      <main className={styles.viewerArea}>
        <ViewerPanel state={viewerState} />
        <div className={styles.buildBar}>
          {!hasLayers && (
            <span className={styles.buildHint}>Upload an SVG to detect layers and apply CAD operations</span>
          )}
          {hasLayers && !canBuild && (
            <span className={styles.buildHint}>Select a layer on the right and add at least one feature (e.g. Extrude)</span>
          )}
          {canBuild && (
            <button
              className={styles.buildBtn}
              onClick={buildModel}
              disabled={jobStatus === 'pending' || jobStatus === 'running'}
            >
              {(jobStatus === 'pending' || jobStatus === 'running') ? (
                <><div className={styles.buildSpinner} /> Building…</>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Build 3D Model
                </>
              )}
            </button>
          )}
          {stlUrl && jobStatus === 'done' && (
            <a className={styles.exportBtn} href={stlUrl} download="model.stl">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export STL
            </a>
          )}
        </div>
      </main>

      {/* ── Right Panel: Tool Panel ── */}
      <aside className={styles.rightPanel}>
        {selectedLayer ? (
          <ToolPanel
            layer={selectedLayer}
            allLayers={cadLayers}
            onAddFeature={type => addFeature(selectedLayer.layerId, type)}
            onRemoveFeature={featId => removeFeature(selectedLayer.layerId, featId)}
            onUpdateFeature={(featId, updates) => updateFeature(selectedLayer.layerId, featId, updates)}
            onMoveFeature={(featId, dir) => moveFeature(selectedLayer.layerId, featId, dir)}
            onUpdateMaterial={mat => updateLayer(selectedLayer.layerId, { material: mat })}
          />
        ) : (
          <div className={styles.noSelection}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            <p>Select a layer to apply CAD operations</p>
            <ul>
              <li>Extrude — give the layer depth</li>
              <li>Fillet — round the profile edges</li>
              <li>Shell — hollow it out</li>
              <li>Revolve — spin around an axis</li>
              <li>Holes — punch cylinders through</li>
              <li>Combine — boolean with another layer</li>
              <li>Split — cut at a Z plane</li>
            </ul>
          </div>
        )}
      </aside>
    </div>
  )
}
