import LayerPanel from './components/LayerPanel'
import ViewerPanel from './components/ViewerPanel'
import ControlPanel from './components/ControlPanel'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⛓️</span>
          <span className={styles.logoName}>AutoChains</span>
          <span className={styles.logoBadge}>Web</span>
        </div>
        <p className={styles.tagline}>2.5D Pendant Generator — Browser Edition</p>
      </header>

      <div className={styles.workspace}>
        <aside className={styles.sidebar}>
          <LayerPanel />
        </aside>

        <main className={styles.viewer}>
          <ViewerPanel />
        </main>

        <aside className={styles.controls}>
          <ControlPanel />
        </aside>
      </div>
    </div>
  )
}
