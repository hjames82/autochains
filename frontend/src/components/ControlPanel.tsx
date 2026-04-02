import styles from './ControlPanel.module.css'
import { AppState } from '../types'

const SWAP_ACTIONS = [
  { id: 'nfc', label: 'Add NFC Cap', icon: '📡', desc: 'Embed NFC module pocket' },
  { id: 'logo', label: 'Add Logo', icon: '🏷️', desc: 'Insert brand logo' },
  { id: 'hook', label: 'Add Hook', icon: '🪝', desc: 'Add bail hook' },
  { id: 'loop', label: 'Add Loop', icon: '⭕', desc: 'Add split ring loop' },
]

interface Props {
  state: AppState
  scale: number
  onScaleChange: (v: number) => void
  onGenerate: () => void
  onSwap: (component: string) => void
}

export default function ControlPanel({ state, scale, onScaleChange, onGenerate, onSwap }: Props) {
  const { layers, jobStatus, jobLogs, jobError, modelUrl, stlUrl, stats } = state
  const busy = jobStatus === 'pending' || jobStatus === 'running'
  const done = jobStatus === 'done'
  const canGenerate = layers.length > 0 && !busy

  const handleStlDownload = () => {
    if (!stlUrl) return
    const a = document.createElement('a')
    a.href = stlUrl
    a.download = 'pendant.stl'
    a.click()
  }

  const handleGltfDownload = () => {
    if (!modelUrl) return
    const a = document.createElement('a')
    a.href = modelUrl
    a.download = 'pendant.glb'
    a.click()
  }

  return (
    <div className={styles.panel}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Settings</h3>

        <div className={styles.field}>
          <label className={styles.label}>Scale</label>
          <div className={styles.scaleRow}>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.05"
              value={scale}
              onChange={e => onScaleChange(Number(e.target.value))}
              className={styles.slider}
              disabled={busy}
            />
            <span className={styles.scaleValue}>{scale.toFixed(2)}×</span>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Input Mode</label>
          <select className={styles.select} disabled>
            <option value="SVG">SVG (Recommended)</option>
            <option value="DXF">DXF</option>
          </select>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Generate</h3>
        {layers.length === 0 ? (
          <p className={styles.sectionDesc}>Upload SVG layers to get started.</p>
        ) : (
          <p className={styles.sectionDesc}>{layers.length} layer{layers.length !== 1 ? 's' : ''} ready to process.</p>
        )}
        <button
          className={styles.generateBtn}
          onClick={onGenerate}
          disabled={!canGenerate}
        >
          {busy ? (
            <>
              <span className={styles.spinner} />
              Processing...
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Generate Pendant
            </>
          )}
        </button>
      </div>

      {(busy || jobLogs.length > 0 || jobError) && (
        <>
          <div className={styles.divider} />
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Progress</h3>
            {jobError ? (
              <div className={styles.errorBox}>
                <span className={styles.errorIcon}>⚠</span>
                <span>{jobError}</span>
              </div>
            ) : (
              <div className={styles.logBox}>
                {jobLogs.slice(-12).map((line, i) => (
                  <div key={i} className={styles.logLine}>{line}</div>
                ))}
                {busy && <div className={styles.logLine + ' ' + styles.logPulse}>...</div>}
              </div>
            )}
          </div>
        </>
      )}

      {done && stats && (
        <>
          <div className={styles.divider} />
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Result</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statCell}>
                <span className={styles.statNum}>{(stats as Record<string, unknown>)['components'] as number ?? 0}</span>
                <span className={styles.statLabel}>Components</span>
              </div>
              <div className={styles.statCell}>
                <span className={styles.statNum}>{(stats as Record<string, unknown>)['bodies'] as number ?? 0}</span>
                <span className={styles.statLabel}>Bodies</span>
              </div>
              <div className={styles.statCell}>
                <span className={styles.statNum}>{Number((stats as Record<string, unknown>)['faces'] ?? 0).toLocaleString()}</span>
                <span className={styles.statLabel}>Faces</span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Add Components</h3>
        <p className={styles.sectionDesc}>Swap hardware components onto the generated pendant.</p>
        <div className={styles.swapGrid}>
          {SWAP_ACTIONS.map((action) => (
            <button
              key={action.id}
              className={styles.swapBtn}
              disabled={!done || busy}
              title={action.desc}
              onClick={() => onSwap(action.id)}
            >
              <span className={styles.swapIcon}>{action.icon}</span>
              <span className={styles.swapLabel}>{action.label}</span>
            </button>
          ))}
        </div>
        {!done && <p className={styles.swapHint}>Available after generation</p>}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Export</h3>
        <div className={styles.exportRow}>
          <button className={styles.exportBtn} onClick={handleStlDownload} disabled={!done}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            </svg>
            STL
          </button>
          <button className={styles.exportBtn} onClick={handleGltfDownload} disabled={!done}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            </svg>
            GLB
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Height Reference</h3>
        <div className={styles.heightTable}>
          {[
            ['h0', '12.00 mm'],
            ['h1', '13.43 mm'],
            ['h2', '14.86 mm'],
            ['h3', '16.29 mm'],
            ['h4', '17.71 mm'],
            ['h5', '19.14 mm'],
            ['h6', '20.57 mm'],
            ['h7', '22.00 mm'],
          ].map(([lvl, mm]) => (
            <div key={lvl} className={styles.heightRow}>
              <code className={styles.heightCode}>{lvl}</code>
              <span className={styles.heightMm}>{mm}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
