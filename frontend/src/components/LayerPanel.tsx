import { useRef, useState, useCallback, DragEvent, ChangeEvent } from 'react'
import styles from './LayerPanel.module.css'
import { LayerFile, LayerParams } from '../types'
import { ROLE_COLORS, LEVELS, ROLES, buildFilename, parseLevelSortKey } from '../utils/parseLayer'

interface Props {
  layers: LayerFile[]
  onAddFiles: (files: FileList | File[]) => void
  onRemoveLayer: (id: string) => void
  onUpdateLayer: (id: string, updates: Partial<LayerFile>) => void
  onToggleVisibility: (id: string) => void
  analyzing?: boolean
}

export default function LayerPanel({ layers, onAddFiles, onRemoveLayer, onUpdateLayer, onToggleVisibility, analyzing }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    onAddFiles(e.dataTransfer.files)
  }, [onAddFiles])

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback(() => setDragOver(false), [])

  const handleFileInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) onAddFiles(e.target.files)
    e.target.value = ''
  }, [onAddFiles])

  const toggleExpand = (id: string) =>
    setExpandedId(prev => prev === id ? null : id)

  const updateParam = (layer: LayerFile, field: keyof LayerParams, value: string) => {
    const newParams = { ...layer.params, [field]: value }
    const newName = buildFilename(newParams)
    const newFile = new File([layer.file], newName, { type: layer.file.type })
    const newSortKey = field === 'lvl' ? parseLevelSortKey(value) : layer.sortKey
    onUpdateLayer(layer.id, { params: newParams, file: newFile, sortKey: newSortKey })
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Layers</h2>
        <button className={styles.uploadBtn} onClick={() => fileInputRef.current?.click()}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Upload SVGs
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".svg"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />
      </div>

      <div
        className={`${styles.dropZone} ${dragOver ? styles.dropZoneActive : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p>{dragOver ? 'Drop to add' : 'Drop SVG files here'}</p>
        <span>Named with <code>lvl=</code> convention</span>
      </div>

      <div className={styles.layerList}>
        {analyzing && (
          <div className={styles.analyzingMsg}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.spinIcon}>
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            Detecting layers…
          </div>
        )}
        {!analyzing && layers.length === 0 ? (
          <p className={styles.emptyMsg}>No layers yet — upload SVG files above</p>
        ) : (
          <>
            <p className={styles.listLabel}>{layers.length} LAYER{layers.length !== 1 ? 'S' : ''}</p>
            {layers.map(layer => (
              <LayerCard
                key={layer.id}
                layer={layer}
                expanded={expandedId === layer.id}
                onToggle={() => toggleExpand(layer.id)}
                onRemove={() => onRemoveLayer(layer.id)}
                onToggleVisibility={() => onToggleVisibility(layer.id)}
                onUpdateParam={(field, value) => updateParam(layer, field, value)}
              />
            ))}
          </>
        )}
      </div>

      <div className={styles.namingHelper}>
        <p className={styles.helperLabel}>NAMING SYNTAX</p>
        <code className={styles.syntaxExample}>
          lvl=h2__sem=Body__rol=core__col=White__hex=FFFFFF
        </code>
      </div>
    </div>
  )
}

interface CardProps {
  layer: LayerFile
  expanded: boolean
  onToggle: () => void
  onRemove: () => void
  onToggleVisibility: () => void
  onUpdateParam: (field: keyof LayerParams, value: string) => void
}

function LayerCard({ layer, expanded, onToggle, onRemove, onToggleVisibility, onUpdateParam }: CardProps) {
  const { params } = layer
  const hexColor = `#${params.hex || 'CCCCCC'}`
  const roleColor = ROLE_COLORS[params.rol] ?? '#666'
  const isHidden = !layer.visible

  return (
    <div className={`${styles.layerCard} ${expanded ? styles.layerCardExpanded : ''} ${isHidden ? styles.layerCardHidden : ''}`}>
      {layer.svgPreview && (
        <div
          className={styles.layerThumb}
          dangerouslySetInnerHTML={{ __html: layer.svgPreview }}
        />
      )}
      <div className={styles.cardRow} onClick={onToggle} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onToggle()}>
        <div className={styles.colorSwatch} style={{ background: hexColor, opacity: isHidden ? 0.35 : 1 }} />
        <div className={styles.layerInfo}>
          <span className={styles.layerName}>{params.sem || layer.file.name}</span>
          <div className={styles.layerMeta}>
            <span className={styles.levelBadge}>{params.lvl}</span>
            <span className={styles.roleBadge} style={{ background: roleColor }}>{params.rol}</span>
            {params.par && <span className={styles.parentBadge}>← {params.par}</span>}
          </div>
        </div>
        <div className={styles.cardActions}>
          <button
            className={`${styles.visBtn} ${isHidden ? styles.visBtnHidden : ''}`}
            title={isHidden ? 'Show layer' : 'Hide layer'}
            onClick={e => { e.stopPropagation(); onToggleVisibility() }}
          >
            {isHidden ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
          <button
            className={styles.editBtn}
            title="Edit parameters"
            onClick={e => { e.stopPropagation(); onToggle() }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/>
            </svg>
          </button>
          <button
            className={styles.removeBtn}
            title="Remove layer"
            onClick={e => { e.stopPropagation(); onRemove() }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {expanded && (
        <div className={styles.editor} onClick={e => e.stopPropagation()}>
          <div className={styles.editorGrid}>
            <ParamField label="Level (lvl)" type="select" value={params.lvl}
              options={LEVELS} onChange={v => onUpdateParam('lvl', v)} />
            <ParamField label="Semantic Name (sem)" value={params.sem}
              onChange={v => onUpdateParam('sem', v)} />
            <ParamField label="Role (rol)" type="select" value={params.rol}
              options={ROLES} onChange={v => onUpdateParam('rol', v)} />
            <ParamField label="Parent (par)" value={params.par} placeholder="optional"
              onChange={v => onUpdateParam('par', v)} />
            <ParamField label="Color Name (col)" value={params.col} placeholder="e.g. White"
              onChange={v => onUpdateParam('col', v)} />
            <ParamField label="Hex Color (hex)" value={params.hex} placeholder="FFFFFF"
              onChange={v => onUpdateParam('hex', v.replace('#', ''))}
              type="hex" hexColor={hexColor} />
            <ParamField label="Inflate (inf)" value={params.inf} placeholder="optional, e.g. 0.1"
              onChange={v => onUpdateParam('inf', v)} />
          </div>
          <div className={styles.filenamePreview}>
            <span className={styles.filenameLabel}>Filename:</span>
            <code className={styles.filenameCode}>{buildFilename(params)}</code>
          </div>
        </div>
      )}
    </div>
  )
}

interface ParamFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  type?: 'text' | 'select' | 'hex'
  options?: string[]
  placeholder?: string
  hexColor?: string
}

function ParamField({ label, value, onChange, type = 'text', options, placeholder, hexColor }: ParamFieldProps) {
  return (
    <div className={styles.paramField}>
      <label className={styles.paramLabel}>{label}</label>
      {type === 'select' && options ? (
        <select className={styles.paramSelect} value={value} onChange={e => onChange(e.target.value)}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : type === 'hex' ? (
        <>
          <div className={styles.hexRow}>
            <input
              type="color"
              className={styles.hexPicker}
              value={hexColor || '#CCCCCC'}
              onChange={e => onChange(e.target.value.replace('#', '').toUpperCase())}
            />
            <input
              className={`${styles.paramInput} ${value && !/^[0-9A-Fa-f]{6}$/.test(value) ? styles.paramInputError : ''}`}
              value={value}
              placeholder={placeholder}
              onChange={e => onChange(e.target.value.replace('#', '').toUpperCase())}
              maxLength={6}
            />
          </div>
          {value && !/^[0-9A-Fa-f]{6}$/.test(value) && (
            <span className={styles.fieldError}>Must be 6 hex digits (e.g. FFFFFF)</span>
          )}
        </>
      ) : (
        <input
          className={styles.paramInput}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </div>
  )
}
