// ── Classic pipeline types ───────────────────────────────────────────────────
export interface LayerParams {
  lvl: string
  sem: string
  rol: string
  col: string
  hex: string
  par: string
  inf: string
}

export interface LayerFile {
  id: string
  file: File
  params: LayerParams
  sortKey: number
  visible: boolean
  svgPreview?: string   // inline SVG HTML thumbnail from backend analysis
}

export type JobStatus = 'idle' | 'pending' | 'running' | 'done' | 'error'

export interface AppState {
  layers: LayerFile[]
  scale: number
  mode: 'SVG' | 'DXF'
  jobId: string | null
  jobStatus: JobStatus
  jobLogs: string[]
  jobError: string | null
  jobTraceback: string | null
  modelUrl: string | null
  stlUrl: string | null
  stats: Record<string, unknown> | null
}

// ── CAD Workspace types ──────────────────────────────────────────────────────

export interface SvgLayerDef {
  id: string
  name: string
  color: string
  paths: string[]
  bounds: { x: number; y: number; w: number; h: number }
  area: number
  path_count: number
  svg_preview: string
}

export type CadFeatureType =
  | 'extrude'
  | 'press_pull'
  | 'revolve'
  | 'fillet'
  | 'shell'
  | 'holes'
  | 'combine'
  | 'split'
  | 'translate'
  | 'rotate'

export interface HoleDef {
  x: number
  y: number
  r: number
  depth: number
}

export interface CadFeatureParams {
  // extrude
  height?: number
  taper_angle?: number
  // press_pull
  delta?: number
  // revolve
  degrees?: number
  axis?: 'X' | 'Y' | 'Z'
  segments?: number
  // fillet
  radius?: number
  mode?: 'outer' | 'inner' | 'both'
  // shell
  thickness?: number
  // holes
  holes?: HoleDef[]
  // combine
  target_layer_id?: string
  operation?: 'union' | 'subtract' | 'intersect'
  // split
  plane_z?: number
  keep?: 'bottom' | 'top'
  // translate
  x?: number
  y?: number
  z?: number
}

export interface CadFeature {
  id: string
  type: CadFeatureType
  params: CadFeatureParams
  enabled: boolean
}

export interface CadMaterial {
  color: string
  metalness: number
  roughness: number
}

export interface CadLayerState {
  layerId: string
  name: string
  color: string
  paths: string[]
  visible: boolean
  features: CadFeature[]
  material: CadMaterial
}

export interface CadGroupState {
  id: string
  name: string
  layerIds: string[]
  features: CadFeature[]
  material: CadMaterial
  visible: boolean
  expanded: boolean
}
