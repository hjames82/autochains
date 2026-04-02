import { LayerParams, LayerFile } from '../types'

const LEVEL_ORDER: Record<string, number> = {
  h0: 0, h1: 1, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6, h7: 7,
}

export function parseLevelSortKey(lvl: string): number {
  const base = lvl.replace(/[+-]$/, '')
  const baseNum = LEVEL_ORDER[base] ?? 0
  if (lvl.endsWith('+')) return baseNum + 0.25
  if (lvl.endsWith('-')) return baseNum - 0.25
  return baseNum
}

export function parseFilename(name: string): LayerParams {
  const bare = name.replace(/\.svg$/i, '')
  const parts = bare.split('__')
  const map: Record<string, string> = {}
  for (const p of parts) {
    const eq = p.indexOf('=')
    if (eq > 0) {
      map[p.slice(0, eq)] = p.slice(eq + 1)
    }
  }
  return {
    lvl: map['lvl'] ?? 'h0',
    sem: map['sem'] ?? '',
    rol: map['rol'] ?? 'base',
    col: map['col'] ?? '',
    hex: map['hex'] ?? 'CCCCCC',
    par: map['par'] ?? '',
    inf: map['inf'] ?? '',
  }
}

export function buildFilename(params: LayerParams): string {
  const parts: string[] = [`lvl=${params.lvl}`, `sem=${params.sem}`, `rol=${params.rol}`]
  if (params.par) parts.push(`par=${params.par}`)
  if (params.col) parts.push(`col=${params.col}`)
  if (params.hex) parts.push(`hex=${params.hex}`)
  if (params.inf) parts.push(`inf=${params.inf}`)
  return parts.join('__') + '.svg'
}

export function makeLayerFile(file: File): LayerFile {
  const params = parseFilename(file.name)
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    file,
    params,
    sortKey: parseLevelSortKey(params.lvl),
  }
}

export const ROLE_COLORS: Record<string, string> = {
  base: '#4CAF50',
  core: '#2196F3',
  insert: '#FF9800',
  detail: '#9C27B0',
  cover: '#F44336',
  pillar: '#00BCD4',
  drop: '#795548',
}

export const LEVELS = ['h0', 'h0+', 'h1-', 'h1', 'h1+', 'h2-', 'h2', 'h2+', 'h3-', 'h3', 'h3+', 'h4-', 'h4', 'h4+', 'h5-', 'h5', 'h5+', 'h6-', 'h6', 'h6+', 'h7-', 'h7']
export const ROLES = ['base', 'core', 'insert', 'detail', 'cover', 'pillar', 'drop']
