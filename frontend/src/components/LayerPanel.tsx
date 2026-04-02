import styles from './LayerPanel.module.css'

const SAMPLE_LAYERS = [
  { name: 'Base', level: 'h0', role: 'base', hex: 'F5F5F5' },
  { name: 'MainBody', level: 'h2', role: 'core', hex: 'C4F500' },
  { name: 'Logo', level: 'h3', role: 'insert', hex: '7f00ff' },
  { name: 'CapTop', level: 'h4', role: 'detail', hex: '000000' },
]

const ROLE_COLORS: Record<string, string> = {
  base: '#4CAF50',
  core: '#2196F3',
  insert: '#FF9800',
  detail: '#9C27B0',
  cover: '#F44336',
  pillar: '#00BCD4',
  drop: '#795548',
}

export default function LayerPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Layers</h2>
        <button className={styles.uploadBtn} title="Upload SVG files">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Upload SVGs
        </button>
      </div>

      <div className={styles.dropZone}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p>Drop SVG files here</p>
        <span>Named with <code>lvl=</code> convention</span>
      </div>

      <div className={styles.layerList}>
        <p className={styles.listLabel}>PREVIEW (sample layers)</p>
        {SAMPLE_LAYERS.map((layer, i) => (
          <div key={i} className={styles.layerCard}>
            <div
              className={styles.colorSwatch}
              style={{ background: `#${layer.hex}` }}
            />
            <div className={styles.layerInfo}>
              <span className={styles.layerName}>{layer.name}</span>
              <div className={styles.layerMeta}>
                <span className={styles.levelBadge}>{layer.level}</span>
                <span
                  className={styles.roleBadge}
                  style={{ background: ROLE_COLORS[layer.role] ?? '#666' }}
                >
                  {layer.role}
                </span>
              </div>
            </div>
          </div>
        ))}
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
