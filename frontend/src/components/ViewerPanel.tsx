import { useEffect, useRef, useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import styles from './ViewerPanel.module.css'
import { AppState } from '../types'

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

interface Props {
  state: AppState
}

export default function ViewerPanel({ state }: Props) {
  const { jobStatus, jobLogs, modelUrl, stlUrl } = state
  const canvasRef = useRef<HTMLDivElement>(null)
  const [webglUnavailable, setWebglUnavailable] = useState(false)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    controls: OrbitControls
    rafId: number
    modelGroup: THREE.Group
  } | null>(null)

  const initScene = useCallback(() => {
    if (!canvasRef.current || sceneRef.current) return
    if (!isWebGLAvailable()) {
      setWebglUnavailable(true)
      return
    }

    const container = canvasRef.current
    const w = container.clientWidth
    const h = container.clientHeight

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      setWebglUnavailable(true)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.shadowMap.enabled = true
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x131313)

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000)
    camera.position.set(0, 40, 80)
    camera.lookAt(0, 10, 0)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 10
    controls.maxDistance = 400
    controls.target.set(0, 10, 0)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2)
    sunLight.position.set(40, 80, 40)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.set(2048, 2048)
    scene.add(sunLight)

    const fillLight = new THREE.DirectionalLight(0xc4f500, 0.3)
    fillLight.position.set(-30, 20, -40)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0x7f00ff, 0.2)
    rimLight.position.set(0, -20, -60)
    scene.add(rimLight)

    const gridHelper = new THREE.GridHelper(200, 40, 0x2e2e2e, 0x2e2e2e)
    gridHelper.position.y = 0
    scene.add(gridHelper)

    const modelGroup = new THREE.Group()
    scene.add(modelGroup)

    let rafId = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      const w2 = canvasRef.current.clientWidth
      const h2 = canvasRef.current.clientHeight
      camera.aspect = w2 / h2
      camera.updateProjectionMatrix()
      renderer.setSize(w2, h2)
    }
    window.addEventListener('resize', handleResize)

    sceneRef.current = { renderer, scene, camera, controls, rafId, modelGroup }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const resetView = useCallback(() => {
    if (!sceneRef.current) return
    const { camera, controls } = sceneRef.current
    camera.position.set(0, 40, 80)
    camera.lookAt(0, 10, 0)
    controls.target.set(0, 10, 0)
    controls.update()
  }, [])

  useEffect(() => {
    const cleanup = initScene()
    return () => {
      cleanup?.()
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.rafId)
        sceneRef.current.renderer.dispose()
        if (canvasRef.current) {
          canvasRef.current.innerHTML = ''
        }
        sceneRef.current = null
      }
    }
  }, [initScene])

  const clearModelGroup = useCallback(() => {
    if (!sceneRef.current) return
    const { modelGroup, camera, controls } = sceneRef.current
    while (modelGroup.children.length > 0) {
      const child = modelGroup.children[0]
      modelGroup.remove(child)
      if ((child as THREE.Mesh).geometry) (child as THREE.Mesh).geometry.dispose()
    }
    camera.position.set(0, 40, 80)
    controls.target.set(0, 10, 0)
    controls.update()
  }, [])

  useEffect(() => {
    if (!modelUrl) {
      clearModelGroup()
      return
    }
    if (!sceneRef.current) return
    const { modelGroup, camera, controls } = sceneRef.current

    while (modelGroup.children.length > 0) {
      const child = modelGroup.children[0]
      modelGroup.remove(child)
      if ((child as THREE.Mesh).geometry) (child as THREE.Mesh).geometry.dispose()
    }

    const loader = new GLTFLoader()
    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const targetSize = 50
        const scaleFactor = targetSize / (maxDim || 1)

        model.scale.setScalar(scaleFactor)
        model.position.sub(center.multiplyScalar(scaleFactor))
        model.position.y += size.y * scaleFactor * 0.5

        model.traverse(obj => {
          if ((obj as THREE.Mesh).isMesh) {
            const mesh = obj as THREE.Mesh
            mesh.castShadow = true
            mesh.receiveShadow = true
          }
        })

        modelGroup.add(model)

        const dist = maxDim * scaleFactor * 2.5
        camera.position.set(0, size.y * scaleFactor * 0.5, dist)
        controls.target.set(0, size.y * scaleFactor * 0.3, 0)
        controls.update()
      },
      undefined,
      (err) => console.error('GLTFLoader error:', err)
    )
  }, [modelUrl])

  const showPlaceholder = jobStatus === 'idle' && !webglUnavailable
  const showProgress = jobStatus === 'pending' || jobStatus === 'running'
  const showError = jobStatus === 'error'
  const showModel = jobStatus === 'done' && modelUrl

  const latestLog = jobLogs[jobLogs.length - 1] ?? 'Starting...'

  const handleStlDownload = () => {
    if (!stlUrl) return
    const a = document.createElement('a')
    a.href = stlUrl
    a.download = 'pendant.stl'
    a.click()
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>3D Viewer</span>
        <div className={styles.toolbarActions}>
          <button className={styles.toolBtn} onClick={resetView} title="Reset camera view">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            Reset View
          </button>
          <button className={styles.toolBtn} onClick={handleStlDownload} disabled={!stlUrl} title="Download STL">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export STL
          </button>
        </div>
      </div>

      <div className={styles.viewerArea}>
        <div ref={canvasRef} className={styles.canvas} />

        {showPlaceholder && (
          <div className={styles.overlay}>
            <div className={styles.placeholder}>
              <div className={styles.placeholderCube}>
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
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
                <div className={styles.hint}>Orbit: click + drag</div>
                <div className={styles.hint}>Zoom: scroll wheel</div>
                <div className={styles.hint}>Pan: right-click + drag</div>
              </div>
            </div>
          </div>
        )}

        {webglUnavailable && (
          <div className={styles.overlay}>
            <div className={styles.noWebGLBox}>
              <div className={styles.noWebGLIcon}>🖥️</div>
              <p className={styles.placeholderTitle}>WebGL not available</p>
              <p className={styles.placeholderDesc}>
                Your browser or environment does not support WebGL.<br />
                Generation still works — you can download the STL/GLB files.
              </p>
            </div>
          </div>
        )}

        {showProgress && (
          <div className={styles.overlay}>
            <div className={styles.progressBox}>
              <div className={styles.progressSpinner} />
              <p className={styles.progressTitle}>Generating 3D model…</p>
              <p className={styles.progressLog}>{latestLog}</p>
            </div>
          </div>
        )}

        {showError && (
          <div className={styles.overlay}>
            <div className={styles.errorBox}>
              <div className={styles.errorIcon}>⚠</div>
              <p className={styles.errorTitle}>Generation failed</p>
              <p className={styles.errorMsg}>{state.jobError}</p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.statusBar}>
        <span
          className={styles.statusDot}
          style={{
            background: showProgress ? '#f59e0b' : showError ? 'var(--danger)' : showModel ? 'var(--accent)' : '#555',
            boxShadow: showProgress ? '0 0 6px rgba(245,158,11,0.5)' : showModel ? '0 0 6px rgba(196,245,0,0.5)' : 'none',
          }}
        />
        <span>
          {showPlaceholder && 'Ready — upload SVG layers to begin'}
          {showProgress && `Processing: ${latestLog}`}
          {showError && 'Error — see right panel for details'}
          {showModel && 'Model loaded — use mouse to orbit, zoom, and pan'}
        </span>
      </div>
    </div>
  )
}
