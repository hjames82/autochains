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
}

export type JobStatus = 'idle' | 'pending' | 'running' | 'done' | 'error'

export interface AppState {
  layers: LayerFile[]
  scale: number
  jobId: string | null
  jobStatus: JobStatus
  jobLogs: string[]
  jobError: string | null
  modelUrl: string | null
  stlUrl: string | null
  stats: Record<string, unknown> | null
}
