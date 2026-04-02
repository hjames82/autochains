import styles from './ControlPanel.module.css'

const SWAP_ACTIONS = [
  { id: 'nfc', label: 'Add NFC Cap', icon: '📡', desc: 'Embed NFC module pocket' },
  { id: 'logo', label: 'Add Logo', icon: '🏷️', desc: 'Insert brand logo' },
  { id: 'hook', label: 'Add Hook', icon: '🪝', desc: 'Add bail hook' },
  { id: 'loop', label: 'Add Loop', icon: '⭕', desc: 'Add split ring loop' },
]

export default function ControlPanel() {
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
              defaultValue="1.0"
              className={styles.slider}
            />
            <span className={styles.scaleValue}>1.00×</span>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Input Mode</label>
          <select className={styles.select}>
            <option value="SVG">SVG (Recommended)</option>
            <option value="DXF">DXF</option>
          </select>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Generate</h3>
        <p className={styles.sectionDesc}>
          Upload your SVG layers, then run the 3D generation pipeline.
        </p>
        <button className={styles.generateBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Generate Pendant
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Add Components</h3>
        <p className={styles.sectionDesc}>Swap hardware components onto the generated pendant.</p>
        <div className={styles.swapGrid}>
          {SWAP_ACTIONS.map((action) => (
            <button key={action.id} className={styles.swapBtn} disabled title={action.desc}>
              <span className={styles.swapIcon}>{action.icon}</span>
              <span className={styles.swapLabel}>{action.label}</span>
            </button>
          ))}
        </div>
        <p className={styles.swapHint}>Available after generation</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Export</h3>
        <div className={styles.exportRow}>
          <button className={styles.exportBtn} disabled>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            </svg>
            STL
          </button>
          <button className={styles.exportBtn} disabled>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            </svg>
            GLTF
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Height Levels Reference</h3>
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
