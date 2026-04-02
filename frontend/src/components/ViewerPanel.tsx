import styles from './ViewerPanel.module.css'

export default function ViewerPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>3D Viewer</span>
        <div className={styles.toolbarActions}>
          <button className={styles.toolBtn} title="Reset camera view">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            Reset View
          </button>
          <button className={styles.toolBtn} title="Download STL" disabled>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export STL
          </button>
        </div>
      </div>

      <div className={styles.viewerArea}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderCube}>
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
              <polygon points="40,10 70,27 70,57 40,74 10,57 10,27" stroke="#C4F500" strokeWidth="1.5" fill="rgba(196,245,0,0.04)" opacity="0.7"/>
              <polygon points="40,10 70,27 40,44 10,27" stroke="#C4F500" strokeWidth="1" fill="rgba(196,245,0,0.07)" opacity="0.7"/>
              <line x1="40" y1="44" x2="40" y2="74" stroke="#C4F500" strokeWidth="1" opacity="0.4"/>
              <circle cx="40" cy="44" r="2" fill="#C4F500" opacity="0.6"/>
            </svg>
          </div>
          <p className={styles.placeholderTitle}>No model generated yet</p>
          <p className={styles.placeholderDesc}>
            Upload SVG layers and click <strong>Generate Pendant</strong> to create a 3D model
          </p>
          <div className={styles.hintRow}>
            <div className={styles.hint}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
              Orbit: click + drag
            </div>
            <div className={styles.hint}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
              Zoom: scroll wheel
            </div>
            <div className={styles.hint}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
              Pan: right-click + drag
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statusBar}>
        <span className={styles.statusDot} />
        <span>Ready — upload SVG layers to begin</span>
      </div>
    </div>
  )
}
