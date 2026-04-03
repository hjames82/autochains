import { useState } from 'react'
import { CadLayerState, CadFeature, CadFeatureType, CadFeatureParams, CadMaterial, HoleDef } from '../types'
import styles from './ToolPanel.module.css'

// ── Tool definitions ──────────────────────────────────────────────────────────
const TOOL_LIST: { type: CadFeatureType; label: string; icon: string; desc: string }[] = [
  { type: 'extrude',    label: 'Extrude',    icon: '⬆', desc: 'Give the profile a Z depth' },
  { type: 'press_pull', label: 'Press Pull',  icon: '↕', desc: 'Push or pull the top face' },
  { type: 'revolve',    label: 'Revolve',     icon: '↻', desc: 'Rotate profile around an axis' },
  { type: 'fillet',     label: 'Fillet',      icon: '⌒', desc: 'Round the profile edges' },
  { type: 'shell',      label: 'Shell',       icon: '□', desc: 'Hollow out with wall thickness' },
  { type: 'holes',      label: 'Holes',       icon: '○', desc: 'Punch cylindrical holes' },
  { type: 'combine',    label: 'Combine',     icon: '⊕', desc: 'Boolean with another layer' },
  { type: 'split',      label: 'Split',       icon: '─', desc: 'Cut body at a Z plane' },
  { type: 'translate',  label: 'Move',        icon: '⇢', desc: 'Offset position in XYZ' },
  { type: 'rotate',     label: 'Rotate',      icon: '↺', desc: 'Rotate body in degrees' },
]

// ── Numeric slider + input ────────────────────────────────────────────────────
function NumField({
  label, value, onChange, min = -1000, max = 1000, step = 0.1, unit = '',
}: {
  label: string; value: number; onChange: (v: number) => void
  min?: number; max?: number; step?: number; unit?: string
}) {
  return (
    <div className={styles.numField}>
      <label className={styles.fieldLabel}>{label}{unit && <span className={styles.unit}>{unit}</span>}</label>
      <div className={styles.numRow}>
        <input
          type="range" min={min} max={max} step={step} value={value}
          className={styles.slider}
          onChange={e => onChange(parseFloat(e.target.value))}
        />
        <input
          type="number" min={min} max={max} step={step} value={value}
          className={styles.numInput}
          onChange={e => onChange(parseFloat(e.target.value) || 0)}
        />
      </div>
    </div>
  )
}

function SelectField<T extends string>({
  label, value, onChange, options,
}: {
  label: string; value: T; onChange: (v: T) => void
  options: { value: T; label: string }[]
}) {
  return (
    <div className={styles.numField}>
      <label className={styles.fieldLabel}>{label}</label>
      <select
        className={styles.selectField}
        value={value}
        onChange={e => onChange(e.target.value as T)}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}

// ── Feature parameter editors ─────────────────────────────────────────────────
function ExtrudeEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <>
      <NumField label="Height" value={params.height ?? 5} unit="mm"
        min={0.1} max={100} step={0.5}
        onChange={v => onChange({ ...params, height: v })} />
      <NumField label="Taper angle" value={params.taper_angle ?? 0} unit="°"
        min={-45} max={45} step={0.5}
        onChange={v => onChange({ ...params, taper_angle: v })} />
    </>
  )
}

function PressPullEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <NumField label="Delta" value={params.delta ?? 2} unit="mm"
      min={-50} max={50} step={0.5}
      onChange={v => onChange({ ...params, delta: v })} />
  )
}

function RevolveEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <>
      <NumField label="Angle" value={params.degrees ?? 360} unit="°"
        min={1} max={360} step={5}
        onChange={v => onChange({ ...params, degrees: v })} />
      <SelectField label="Axis" value={(params.axis ?? 'Y') as 'X'|'Y'|'Z'}
        onChange={v => onChange({ ...params, axis: v })}
        options={[{value:'X',label:'X'},{value:'Y',label:'Y'},{value:'Z',label:'Z'}]}
      />
      <NumField label="Segments" value={params.segments ?? 36}
        min={8} max={128} step={1}
        onChange={v => onChange({ ...params, segments: Math.round(v) })} />
    </>
  )
}

function FilletEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <>
      <NumField label="Radius" value={params.radius ?? 1} unit="mm"
        min={0.05} max={20} step={0.1}
        onChange={v => onChange({ ...params, radius: v })} />
      <SelectField label="Mode" value={(params.mode ?? 'outer') as 'outer'|'inner'|'both'}
        onChange={v => onChange({ ...params, mode: v })}
        options={[
          {value:'outer',label:'Outer (convex corners)'},
          {value:'inner',label:'Inner (concave corners)'},
          {value:'both', label:'Both'},
        ]}
      />
    </>
  )
}

function ShellEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <NumField label="Wall thickness" value={params.thickness ?? 1.5} unit="mm"
      min={0.1} max={20} step={0.1}
      onChange={v => onChange({ ...params, thickness: v })} />
  )
}

function HoleItem({
  hole, index, onChange, onRemove,
}: {
  hole: HoleDef; index: number
  onChange: (h: HoleDef) => void; onRemove: () => void
}) {
  return (
    <div className={styles.holeItem}>
      <div className={styles.holeHeader}>
        <span className={styles.holeLabel}>Hole #{index + 1}</span>
        <button className={styles.removeHoleBtn} onClick={onRemove}>✕</button>
      </div>
      <div className={styles.holeGrid}>
        {(['x','y','r','depth'] as const).map(field => (
          <div key={field} className={styles.holeField}>
            <label className={styles.holeFieldLabel}>{field === 'r' ? 'Radius' : field === 'depth' ? 'Depth' : field.toUpperCase()}</label>
            <input
              type="number" step="0.5" value={hole[field]}
              className={styles.numInput}
              onChange={e => onChange({ ...hole, [field]: parseFloat(e.target.value) || 0 })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function HolesEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  const holes: HoleDef[] = (params.holes as HoleDef[]) ?? []
  const update = (i: number, h: HoleDef) =>
    onChange({ ...params, holes: holes.map((old, idx) => idx === i ? h : old) })
  const remove = (i: number) =>
    onChange({ ...params, holes: holes.filter((_, idx) => idx !== i) })
  const add = () =>
    onChange({ ...params, holes: [...holes, { x: 0, y: 0, r: 2, depth: 5 }] })

  return (
    <div>
      {holes.map((h, i) => (
        <HoleItem key={i} hole={h} index={i}
          onChange={nh => update(i, nh)} onRemove={() => remove(i)} />
      ))}
      <button className={styles.addHoleBtn} onClick={add}>+ Add Hole</button>
    </div>
  )
}

function CombineEditor({
  params, onChange, allLayers, currentId,
}: {
  params: CadFeatureParams; onChange: (p: CadFeatureParams) => void
  allLayers: CadLayerState[]; currentId: string
}) {
  const others = allLayers.filter(l => l.layerId !== currentId)
  return (
    <>
      <div className={styles.numField}>
        <label className={styles.fieldLabel}>Target layer</label>
        <select
          className={styles.selectField}
          value={params.target_layer_id ?? ''}
          onChange={e => onChange({ ...params, target_layer_id: e.target.value })}
        >
          <option value="">— select a layer —</option>
          {others.map(l => (
            <option key={l.layerId} value={l.layerId}>{l.name}</option>
          ))}
        </select>
      </div>
      <SelectField label="Operation" value={(params.operation ?? 'union') as 'union'|'subtract'|'intersect'}
        onChange={v => onChange({ ...params, operation: v })}
        options={[
          {value:'union',    label:'Union (merge)'},
          {value:'subtract', label:'Subtract (cut away)'},
          {value:'intersect',label:'Intersect (keep overlap)'},
        ]}
      />
    </>
  )
}

function SplitEditor({ params, onChange }: { params: CadFeatureParams; onChange: (p: CadFeatureParams) => void }) {
  return (
    <>
      <NumField label="Plane Z" value={params.plane_z ?? 5} unit="mm"
        min={0} max={200} step={0.5}
        onChange={v => onChange({ ...params, plane_z: v })} />
      <SelectField label="Keep" value={(params.keep ?? 'bottom') as 'bottom'|'top'}
        onChange={v => onChange({ ...params, keep: v })}
        options={[{value:'bottom',label:'Bottom part'},{value:'top',label:'Top part'}]}
      />
    </>
  )
}

function XYZEditor({
  params, onChange, unit = '',
}: {
  params: CadFeatureParams; onChange: (p: CadFeatureParams) => void; unit?: string
}) {
  return (
    <div className={styles.xyzRow}>
      {(['x','y','z'] as const).map(ax => (
        <div key={ax} className={styles.xyzField}>
          <label className={styles.xyzLabel}>{ax.toUpperCase()}{unit && ` (${unit})`}</label>
          <input
            type="number" step="0.5" value={(params as Record<string,number>)[ax] ?? 0}
            className={styles.numInput}
            onChange={e => onChange({ ...params, [ax]: parseFloat(e.target.value) || 0 })}
          />
        </div>
      ))}
    </div>
  )
}

function FeatureParamsEditor({
  feature, allLayers, currentLayerId, onChange,
}: {
  feature: CadFeature; allLayers: CadLayerState[]; currentLayerId: string
  onChange: (p: CadFeatureParams) => void
}) {
  const p = feature.params
  switch (feature.type) {
    case 'extrude':    return <ExtrudeEditor params={p} onChange={onChange} />
    case 'press_pull': return <PressPullEditor params={p} onChange={onChange} />
    case 'revolve':    return <RevolveEditor params={p} onChange={onChange} />
    case 'fillet':     return <FilletEditor params={p} onChange={onChange} />
    case 'shell':      return <ShellEditor params={p} onChange={onChange} />
    case 'holes':      return <HolesEditor params={p} onChange={onChange} />
    case 'combine':
      return <CombineEditor params={p} onChange={onChange} allLayers={allLayers} currentId={currentLayerId} />
    case 'split':      return <SplitEditor params={p} onChange={onChange} />
    case 'translate':  return <XYZEditor params={p} onChange={onChange} unit="mm" />
    case 'rotate':     return <XYZEditor params={p} onChange={onChange} unit="°" />
    default:           return null
  }
}

// ── Feature Row ────────────────────────────────────────────────────────────────
function FeatureRow({
  feature, index, total, allLayers, currentLayerId,
  onToggle, onRemove, onMoveUp, onMoveDown, onUpdateParams,
}: {
  feature: CadFeature; index: number; total: number
  allLayers: CadLayerState[]; currentLayerId: string
  onToggle: () => void; onRemove: () => void
  onMoveUp: () => void; onMoveDown: () => void
  onUpdateParams: (p: CadFeatureParams) => void
}) {
  const [expanded, setExpanded] = useState(true)
  const tool = TOOL_LIST.find(t => t.type === feature.type)

  return (
    <div className={`${styles.featureRow} ${!feature.enabled ? styles.featureDisabled : ''}`}>
      <div className={styles.featureHeader}>
        <input
          type="checkbox" checked={feature.enabled} className={styles.featCheck}
          onChange={onToggle}
        />
        <span className={styles.featIcon}>{tool?.icon}</span>
        <button className={styles.featTitle} onClick={() => setExpanded(e => !e)}>
          {tool?.label ?? feature.type}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.15s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div className={styles.featActions}>
          <button onClick={onMoveUp} disabled={index === 0} title="Move up" className={styles.moveBtn}>↑</button>
          <button onClick={onMoveDown} disabled={index === total - 1} title="Move down" className={styles.moveBtn}>↓</button>
          <button onClick={onRemove} title="Delete feature" className={styles.deleteBtn}>✕</button>
        </div>
      </div>
      {expanded && (
        <div className={styles.featureParams}>
          <FeatureParamsEditor
            feature={feature}
            allLayers={allLayers}
            currentLayerId={currentLayerId}
            onChange={onUpdateParams}
          />
        </div>
      )}
    </div>
  )
}

// ── Add Feature Palette ────────────────────────────────────────────────────────
function AddFeaturePalette({ onAdd }: { onAdd: (type: CadFeatureType) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.addPalette}>
      <button className={styles.addPaletteBtn} onClick={() => setOpen(o => !o)}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add Operation
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.15s' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className={styles.palette}>
          {TOOL_LIST.map(t => (
            <button
              key={t.type}
              className={styles.paletteItem}
              onClick={() => { onAdd(t.type); setOpen(false) }}
              title={t.desc}
            >
              <span className={styles.paletteIcon}>{t.icon}</span>
              <div>
                <span className={styles.paletteName}>{t.label}</span>
                <span className={styles.paletteDesc}>{t.desc}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Material Editor ────────────────────────────────────────────────────────────
function MaterialEditor({
  material, onChange,
}: {
  material: CadMaterial; onChange: (m: CadMaterial) => void
}) {
  return (
    <div className={styles.materialEditor}>
      <div className={styles.sectionTitle}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        Material
      </div>
      <div className={styles.matRow}>
        <label className={styles.fieldLabel}>Color</label>
        <input
          type="color" value={material.color}
          className={styles.colorPicker}
          onChange={e => onChange({ ...material, color: e.target.value })}
        />
      </div>
      <NumField label="Metalness" value={material.metalness}
        min={0} max={1} step={0.05}
        onChange={v => onChange({ ...material, metalness: v })} />
      <NumField label="Roughness" value={material.roughness}
        min={0} max={1} step={0.05}
        onChange={v => onChange({ ...material, roughness: v })} />
    </div>
  )
}

// ── Main Tool Panel ────────────────────────────────────────────────────────────
interface Props {
  layer: CadLayerState
  allLayers: CadLayerState[]
  groupLabel?: string
  onAddFeature: (type: CadFeatureType) => void
  onRemoveFeature: (featId: string) => void
  onUpdateFeature: (featId: string, updates: Partial<CadFeature>) => void
  onMoveFeature: (featId: string, dir: -1 | 1) => void
  onUpdateMaterial: (m: CadMaterial) => void
}

export default function ToolPanel({
  layer, allLayers, groupLabel,
  onAddFeature, onRemoveFeature, onUpdateFeature, onMoveFeature, onUpdateMaterial,
}: Props) {
  return (
    <div className={styles.panel}>
      {/* Layer/Group info */}
      <div className={styles.layerHeader}>
        <div className={styles.layerSwatch} style={{ background: layer.color }} />
        <div>
          <div className={styles.layerTitle}>
            {groupLabel ? (
              <span className={styles.groupLabelBadge}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 4 }}>
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
                {layer.name}
              </span>
            ) : layer.name}
          </div>
          <div className={styles.layerSub}>{layer.features.length} operation{layer.features.length !== 1 ? 's' : ''}{groupLabel ? ' applied to all members' : ''}</div>
        </div>
      </div>

      {/* Feature tree */}
      <div className={styles.sectionTitle}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
        Feature Tree
      </div>

      {layer.features.length === 0 && (
        <div className={styles.emptyFeatures}>
          No operations yet — add one below
        </div>
      )}

      <div className={styles.featureList}>
        {layer.features.map((feat, i) => (
          <FeatureRow
            key={feat.id}
            feature={feat}
            index={i}
            total={layer.features.length}
            allLayers={allLayers}
            currentLayerId={layer.layerId}
            onToggle={() => onUpdateFeature(feat.id, { enabled: !feat.enabled })}
            onRemove={() => onRemoveFeature(feat.id)}
            onMoveUp={() => onMoveFeature(feat.id, -1)}
            onMoveDown={() => onMoveFeature(feat.id, 1)}
            onUpdateParams={p => onUpdateFeature(feat.id, { params: p })}
          />
        ))}
      </div>

      <AddFeaturePalette onAdd={onAddFeature} />

      <MaterialEditor material={layer.material} onChange={onUpdateMaterial} />
    </div>
  )
}
