import { useState, useCallback, useRef, useEffect, DragEvent, ChangeEvent } from 'react'
import { SvgLayerDef, CadLayerState, CadGroupState, CadFeature, CadFeatureType, CadMaterial, JobStatus } from '../types'
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
  jobTraceback: string | null,
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
    jobTraceback,
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
  checked,
  inGroup,
  onSelect,
  onToggleVisible,
  onToggleCheck,
}: {
  layer: CadLayerState
  def?: SvgLayerDef
  selected: boolean
  checked: boolean
  inGroup?: boolean
  onSelect: () => void
  onToggleVisible: () => void
  onToggleCheck: () => void
}) {
  return (
    <div
      className={`${styles.layerCard} ${selected ? styles.layerCardSelected : ''} ${!layer.visible ? styles.layerCardHidden : ''} ${inGroup ? styles.layerCardInGroup : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
    >
      <input
        type="checkbox"
        className={styles.layerCheck}
        checked={checked}
        onChange={onToggleCheck}
        onClick={e => e.stopPropagation()}
        title="Select for grouping"
      />
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

// ── Group Card ─────────────────────────────────────────────────────────────────
function GroupCard({
  group,
  memberLayers,
  memberDefs,
  selected,
  onSelectGroup,
  onSelectMember,
  onToggleVisible,
  onToggleExpanded,
  onDisband,
  selectedLayerId,
}: {
  group: CadGroupState
  memberLayers: CadLayerState[]
  memberDefs: (SvgLayerDef | undefined)[]
  selected: boolean
  onSelectGroup: () => void
  onSelectMember: (id: string) => void
  onToggleVisible: () => void
  onToggleExpanded: () => void
  onDisband: () => void
  selectedLayerId: string | null
}) {
  return (
    <div className={styles.groupBlock}>
      <div
        className={`${styles.groupHeader} ${selected ? styles.groupHeaderSelected : ''}`}
        onClick={onSelectGroup}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onSelectGroup()}
      >
        <button
          className={styles.groupExpand}
          onClick={e => { e.stopPropagation(); onToggleExpanded() }}
          title={group.expanded ? 'Collapse' : 'Expand'}
        >
          {group.expanded ? '▼' : '▶'}
        </button>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, opacity: 0.7 }}>
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
        <span className={styles.groupName}>{group.name}</span>
        {group.features.length > 0 && (
          <span className={styles.featuresBadge}>{group.features.length} op{group.features.length !== 1 ? 's' : ''}</span>
        )}
        <button
          className={`${styles.visBtn} ${!group.visible ? styles.visBtnOff : ''}`}
          title={group.visible ? 'Hide group' : 'Show group'}
          onClick={e => { e.stopPropagation(); onToggleVisible() }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {group.visible ? (
              <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </>
            ) : (
              <>
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </>
            )}
          </svg>
        </button>
        <button
          className={styles.disbandBtn}
          title="Disband group"
          onClick={e => { e.stopPropagation(); onDisband() }}
        >✕</button>
      </div>
      {group.expanded && memberLayers.map((layer, i) => (
        <div key={layer.layerId} className={styles.groupMemberRow}>
          <div className={styles.groupMemberIndent} />
          <div
            className={`${styles.layerCard} ${styles.layerCardInGroup} ${selectedLayerId === layer.layerId ? styles.layerCardSelected : ''} ${!layer.visible ? styles.layerCardHidden : ''}`}
            onClick={() => onSelectMember(layer.layerId)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.layerSwatch} style={{ background: layer.color }} />
            <div className={styles.layerInfo}>
              <span className={styles.layerName}>{layer.name}</span>
              <span className={styles.layerMeta}>{memberDefs[i]?.path_count ?? 0} paths</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main Workspace ────────────────────────────────────────────────────────────
// ── Selection union type ───────────────────────────────────────────────────────
type Selection = { kind: 'layer'; id: string } | { kind: 'group'; id: string }

interface CadWorkspaceProps {
  initialFile?: File | null
  onFileUploaded?: (file: File) => void
}

export default function CadWorkspace({ initialFile, onFileUploaded }: CadWorkspaceProps) {
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState<string | null>(null)
  const [detectedLayers, setDetectedLayers] = useState<SvgLayerDef[]>([])
  const [svgSize, setSvgSize] = useState<{ w: number; h: number }>({ w: 100, h: 100 })
  const [sourceType, setSourceType] = useState<string>('')
  const [cadLayers, setCadLayers] = useState<CadLayerState[]>([])
  const [groups, setGroups] = useState<CadGroupState[]>([])
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set())
  const [selection, setSelection] = useState<Selection | null>(null)

  const [jobStatus, setJobStatus] = useState<JobStatus>('idle')
  const [jobLogs, setJobLogs] = useState<string[]>([])
  const [jobError, setJobError] = useState<string | null>(null)
  const [jobTraceback, setJobTraceback] = useState<string | null>(null)
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [stlUrl, setStlUrl] = useState<string | null>(null)

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // Tracks the file name last analyzed so we don't re-trigger on re-renders
  const lastAnalyzedNameRef = useRef<string | null>(null)
  // Stable refs used by the auto-preview debounce effect
  const buildModelRef = useRef<() => Promise<void>>(async () => {})
  const jobStatusRef  = useRef<JobStatus>('idle')
  const [previewPending, setPreviewPending] = useState(false)

  // ── SVG Analysis ────────────────────────────────────────────────────────────
  const handleSvgFile = useCallback(async (file: File) => {
    lastAnalyzedNameRef.current = file.name
    onFileUploaded?.(file)
    setAnalyzing(true)
    setAnalyzeError(null)
    setDetectedLayers([])
    setCadLayers([])
    setGroups([])
    setCheckedIds(new Set())
    setSelection(null)
    setModelUrl(null)
    setStlUrl(null)
    setJobStatus('idle')
    setJobLogs([])
    setJobTraceback(null)

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
        setSelection({ kind: 'layer', id: data.layers[0].id })
      }
    } catch (e) {
      setAnalyzeError(String(e))
    } finally {
      setAnalyzing(false)
    }
  }, [onFileUploaded])

  // Auto-analyze when a file is provided from the parent (mode switch)
  useEffect(() => {
    if (!initialFile) return
    if (lastAnalyzedNameRef.current === initialFile.name) return
    handleSvgFile(initialFile)
  }, [initialFile, handleSvgFile])

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
          setJobTraceback(data.traceback ?? null)
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

    const groupedIds = new Set(groups.flatMap(g => g.layerIds))

    const ungroupedLayers = cadLayers
      .filter(l => !groupedIds.has(l.layerId))
      .map(l => ({
        id: l.layerId,
        name: l.name,
        color: l.color,
        paths: l.paths,
        visible: l.visible,
        features: l.features.filter(f => f.enabled),
        material: l.material,
      }))

    const groupLayers = groups
      .filter(g => g.visible)
      .map(g => {
        const memberPaths = g.layerIds.flatMap(lid => cadLayers.find(l => l.layerId === lid)?.paths ?? [])
        const memberColor = cadLayers.find(l => l.layerId === g.layerIds[0])?.color ?? g.material.color
        return {
          id: g.id,
          name: g.name,
          color: memberColor,
          paths: memberPaths,
          visible: true,
          features: g.features.filter(f => f.enabled),
          material: g.material,
        }
      })

    const payload = {
      layers: [...ungroupedLayers, ...groupLayers],
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
  }, [cadLayers, groups, svgSize, startPolling])

  // Keep stable refs in sync so debounce effect never captures a stale closure
  useEffect(() => { buildModelRef.current = buildModel }, [buildModel])
  useEffect(() => { jobStatusRef.current  = jobStatus  }, [jobStatus])

  // ── Auto-preview: debounced rebuild whenever features change ─────────────────
  useEffect(() => {
    const hasEnabledFeatures =
      cadLayers.some(l => l.features.some(f => f.enabled)) ||
      groups.some(g => g.features.some(f => f.enabled))

    if (!hasEnabledFeatures) return

    setPreviewPending(true)
    const t = setTimeout(() => {
      setPreviewPending(false)
      if (jobStatusRef.current !== 'running' && jobStatusRef.current !== 'pending') {
        buildModelRef.current()
      }
    }, 1800)
    return () => clearTimeout(t)
  }, [cadLayers, groups])

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

  // ── Derived selection state ──────────────────────────────────────────────────
  const selectedLayerId = selection?.kind === 'layer' ? selection.id : null
  const selectedGroupId = selection?.kind === 'group' ? selection.id : null
  const selectedLayer = cadLayers.find(l => l.layerId === selectedLayerId) ?? null
  const selectedGroup = groups.find(g => g.id === selectedGroupId) ?? null
  const allLayerIdsInGroups = new Set(groups.flatMap(g => g.layerIds))

  // Virtual CadLayerState for groups (so ToolPanel works unchanged)
  const selectedGroupAsLayer: CadLayerState | null = selectedGroup ? {
    layerId: selectedGroup.id,
    name: selectedGroup.name,
    color: selectedGroup.material.color,
    paths: selectedGroup.layerIds.flatMap(lid => cadLayers.find(l => l.layerId === lid)?.paths ?? []),
    visible: selectedGroup.visible,
    features: selectedGroup.features,
    material: selectedGroup.material,
  } : null

  const selectedItem: CadLayerState | null = selectedLayer ?? selectedGroupAsLayer

  // ── Group functions ──────────────────────────────────────────────────────────
  const _groupCounterRef = useRef(0)
  const createGroup = useCallback((name: string, ids: string[]) => {
    if (ids.length < 2) return
    const id = `group-${Date.now()}-${++_groupCounterRef.current}`
    setGroups(prev => [...prev, {
      id,
      name,
      layerIds: ids,
      features: [],
      material: { ...DEFAULT_MATERIAL },
      visible: true,
      expanded: true,
    }])
    setCheckedIds(new Set())
    setSelection({ kind: 'group', id })
  }, [])

  const disbandGroup = useCallback((groupId: string) => {
    setGroups(prev => prev.filter(g => g.id !== groupId))
    setSelection(prev => prev?.kind === 'group' && prev.id === groupId ? null : prev)
  }, [])

  const updateGroup = useCallback((groupId: string, updates: Partial<CadGroupState>) => {
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, ...updates } : g))
  }, [])

  const addGroupFeature = useCallback((groupId: string, type: CadFeatureType) => {
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
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, features: [...g.features, feat] } : g))
  }, [])

  const removeGroupFeature = useCallback((groupId: string, featId: string) => {
    setGroups(prev => prev.map(g =>
      g.id === groupId ? { ...g, features: g.features.filter(f => f.id !== featId) } : g
    ))
  }, [])

  const updateGroupFeature = useCallback((groupId: string, featId: string, updates: Partial<CadFeature>) => {
    setGroups(prev => prev.map(g =>
      g.id === groupId
        ? { ...g, features: g.features.map(f => f.id === featId ? { ...f, ...updates } : f) }
        : g
    ))
  }, [])

  const moveGroupFeature = useCallback((groupId: string, featId: string, dir: -1 | 1) => {
    setGroups(prev => prev.map(g => {
      if (g.id !== groupId) return g
      const idx = g.features.findIndex(f => f.id === featId)
      if (idx < 0) return g
      const next = idx + dir
      if (next < 0 || next >= g.features.length) return g
      const feats = [...g.features]
      ;[feats[idx], feats[next]] = [feats[next], feats[idx]]
      return { ...g, features: feats }
    }))
  }, [])

  const toggleCheck = useCallback((layerId: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev)
      if (next.has(layerId)) next.delete(layerId)
      else next.add(layerId)
      return next
    })
  }, [])

  const viewerState = makeViewerState(jobStatus, jobLogs, jobError, jobTraceback, modelUrl, stlUrl)

  const hasLayers = cadLayers.length > 0
  const ungroupedWithFeatures = cadLayers.some(l => l.visible && l.features.length > 0 && !allLayerIdsInGroups.has(l.layerId))
  const groupsWithFeatures = groups.some(g => g.visible && g.features.length > 0)
  const canBuild = hasLayers && (ungroupedWithFeatures || groupsWithFeatures)

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

            {/* Group action bar: shown when 2+ layers are checked */}
            {checkedIds.size >= 2 && (
              <div className={styles.groupActionBar}>
                <span className={styles.groupActionCount}>{checkedIds.size} selected</span>
                <button
                  className={styles.groupActionBtn}
                  onClick={() => {
                    const name = `Group ${groups.length + 1}`
                    createGroup(name, Array.from(checkedIds))
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                  Group {checkedIds.size} layers
                </button>
                <button
                  className={styles.groupActionCancel}
                  onClick={() => setCheckedIds(new Set())}
                  title="Clear selection"
                >✕</button>
              </div>
            )}

            {/* Groups */}
            {groups.map(group => (
              <GroupCard
                key={group.id}
                group={group}
                memberLayers={group.layerIds.map(id => cadLayers.find(l => l.layerId === id)!).filter(Boolean)}
                memberDefs={group.layerIds.map(id => detectedLayers.find(d => d.id === id))}
                selected={selectedGroupId === group.id}
                selectedLayerId={selectedLayerId}
                onSelectGroup={() => setSelection({ kind: 'group', id: group.id })}
                onSelectMember={id => setSelection({ kind: 'layer', id })}
                onToggleVisible={() => updateGroup(group.id, { visible: !group.visible })}
                onToggleExpanded={() => updateGroup(group.id, { expanded: !group.expanded })}
                onDisband={() => disbandGroup(group.id)}
              />
            ))}

            {/* Ungrouped layers */}
            {cadLayers
              .filter(l => !allLayerIdsInGroups.has(l.layerId))
              .map(layer => (
                <LayerCard
                  key={layer.layerId}
                  layer={layer}
                  def={detectedLayers.find(d => d.id === layer.layerId)}
                  selected={selectedLayerId === layer.layerId}
                  checked={checkedIds.has(layer.layerId)}
                  onSelect={() => setSelection({ kind: 'layer', id: layer.layerId })}
                  onToggleVisible={() => updateLayer(layer.layerId, { visible: !layer.visible })}
                  onToggleCheck={() => toggleCheck(layer.layerId)}
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
                onClick={() => setSelection({ kind: 'layer', id: def.id })}
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
        {/* SVG 2D Preview — composite of visible layer previews, shown while no 3D model is ready */}
        {detectedLayers.length > 0 && !modelUrl && jobStatus !== 'running' && jobStatus !== 'pending' && (
          <div className={styles.svgCenterPreview}>
            <div className={styles.svgCenterLabel}>
              SVG Preview — add a feature to any layer and a 3D preview will appear automatically
            </div>
            <div className={styles.svgCompositeWrap}>
              {detectedLayers.map(def => {
                const cadLayer = cadLayers.find(l => l.layerId === def.id)
                if (cadLayer && !cadLayer.visible) return null
                return (
                  <div
                    key={def.id}
                    className={styles.svgLayerSlice}
                    dangerouslySetInnerHTML={{ __html: def.svg_preview }}
                  />
                )
              })}
            </div>
          </div>
        )}
        <div className={styles.buildBar}>
          {!hasLayers && (
            <span className={styles.buildHint}>Upload an SVG to detect layers and apply CAD operations</span>
          )}
          {hasLayers && !canBuild && (
            <span className={styles.buildHint}>Select a layer or group and add at least one feature (e.g. Extrude)</span>
          )}
          {previewPending && canBuild && jobStatus === 'idle' && (
            <span className={styles.previewPendingBadge}>
              <span className={styles.previewPendingDot} />
              Computing preview…
            </span>
          )}
          {modelUrl && jobStatus === 'done' && !previewPending && (
            <span className={styles.viewerHint}>
              Orbit: click + drag &nbsp;·&nbsp; Zoom: scroll &nbsp;·&nbsp; Pan: right-click + drag
            </span>
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
        {selectedItem ? (
          <ToolPanel
            layer={selectedItem}
            allLayers={cadLayers}
            groupLabel={selectedGroup ? `Group: ${selectedGroup.name}` : undefined}
            onAddFeature={type => {
              if (selectedGroup) addGroupFeature(selectedGroup.id, type)
              else if (selectedLayer) addFeature(selectedLayer.layerId, type)
            }}
            onRemoveFeature={featId => {
              if (selectedGroup) removeGroupFeature(selectedGroup.id, featId)
              else if (selectedLayer) removeFeature(selectedLayer.layerId, featId)
            }}
            onUpdateFeature={(featId, updates) => {
              if (selectedGroup) updateGroupFeature(selectedGroup.id, featId, updates)
              else if (selectedLayer) updateFeature(selectedLayer.layerId, featId, updates)
            }}
            onMoveFeature={(featId, dir) => {
              if (selectedGroup) moveGroupFeature(selectedGroup.id, featId, dir)
              else if (selectedLayer) moveFeature(selectedLayer.layerId, featId, dir)
            }}
            onUpdateMaterial={mat => {
              if (selectedGroup) updateGroup(selectedGroup.id, { material: mat })
              else if (selectedLayer) updateLayer(selectedLayer.layerId, { material: mat })
            }}
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
