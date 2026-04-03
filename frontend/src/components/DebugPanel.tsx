/**
 * Debug Panel — toggled with the small "Debug" button in the corner.
 * Shows:
 *   • Live API call log (last 40) with method, URL, status, timing, bodies
 *   • Backend /api/health snapshot
 *   • Backend /api/debug/jobs snapshot
 *   • Backend /api/debug/requests snapshot
 * Keyboard shortcut: Shift+D
 */

import { useState, useEffect, useCallback } from 'react'
import { debugLog, ApiCallEntry } from '../utils/debugLogger'
import styles from './DebugPanel.module.css'

// ── Status badge ──────────────────────────────────────────────────────────────
function StatusBadge({ status, ok }: { status: number | null; ok: boolean | null }) {
  if (status === null) return <span className={styles.badgePending}>…</span>
  const cls = ok ? styles.badgeOk : status >= 500 ? styles.badgeError : styles.badgeWarn
  return <span className={cls}>{status}</span>
}

// ── Single API call row ───────────────────────────────────────────────────────
function CallRow({ call }: { call: ApiCallEntry }) {
  const [expanded, setExpanded] = useState(false)
  const shortUrl = call.url.replace('/api/', '').slice(0, 40)

  return (
    <div className={`${styles.callRow} ${call.ok === false ? styles.callRowErr : ''}`}>
      <div className={styles.callSummary} onClick={() => setExpanded(e => !e)}>
        <span className={`${styles.methodTag} ${styles['method_' + call.method.toLowerCase()]}`}>
          {call.method}
        </span>
        <span className={styles.callUrl} title={call.url}>{shortUrl}</span>
        <StatusBadge status={call.status} ok={call.ok} />
        {call.ms !== null && <span className={styles.callMs}>{call.ms}ms</span>}
        <span className={styles.callTs}>{call.ts.slice(11, 19)}</span>
      </div>
      {expanded && (
        <div className={styles.callDetail}>
          <div className={styles.callDetailFull}><b>URL:</b> {call.url}</div>
          {call.error && (
            <div className={styles.callError}><b>Error:</b> {call.error}</div>
          )}
          {call.requestSummary && (
            <div className={styles.callSection}>
              <div className={styles.callSectionLabel}>Request</div>
              <pre className={styles.callBody}>{call.requestSummary}</pre>
            </div>
          )}
          {call.responseBody && (
            <div className={styles.callSection}>
              <div className={styles.callSectionLabel}>Response</div>
              <pre className={styles.callBody}>{call.responseBody}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── JSON viewer ───────────────────────────────────────────────────────────────
function JsonBlock({ data, loading, error }: { data: unknown; loading: boolean; error: string | null }) {
  if (loading) return <div className={styles.fetchState}>Loading…</div>
  if (error)   return <div className={styles.fetchError}>{error}</div>
  return <pre className={styles.jsonBlock}>{JSON.stringify(data, null, 2)}</pre>
}

// ── Tab ───────────────────────────────────────────────────────────────────────
type Tab = 'calls' | 'health' | 'jobs' | 'requests'

// ── Main Panel ────────────────────────────────────────────────────────────────
export default function DebugPanel() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('calls')
  const [calls, setCalls] = useState<readonly ApiCallEntry[]>(debugLog.calls)

  const [healthData, setHealthData]     = useState<unknown>(null)
  const [healthLoading, setHealthLoading] = useState(false)
  const [healthError, setHealthError]   = useState<string | null>(null)

  const [jobsData, setJobsData]         = useState<unknown>(null)
  const [jobsLoading, setJobsLoading]   = useState(false)
  const [jobsError, setJobsError]       = useState<string | null>(null)

  const [reqData, setReqData]           = useState<unknown>(null)
  const [reqLoading, setReqLoading]     = useState(false)
  const [reqError, setReqError]         = useState<string | null>(null)

  // Subscribe to API call log
  useEffect(() => {
    return debugLog.subscribe(() => setCalls([...debugLog.calls]))
  }, [])

  // Keyboard shortcut: Shift+D
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'D') setOpen(o => !o)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const fetchTab = useCallback(async (t: Tab) => {
    if (t === 'calls') return

    const endpoints: Record<Exclude<Tab, 'calls'>, string> = {
      health:   '/api/health',
      jobs:     '/api/debug/jobs',
      requests: '/api/debug/requests',
    }

    const setLoading: Record<Exclude<Tab, 'calls'>, (v: boolean) => void> = {
      health:   setHealthLoading,
      jobs:     setJobsLoading,
      requests: setReqLoading,
    }
    const setData: Record<Exclude<Tab, 'calls'>, (v: unknown) => void> = {
      health:   setHealthData,
      jobs:     setJobsData,
      requests: setReqData,
    }
    const setError: Record<Exclude<Tab, 'calls'>, (v: string | null) => void> = {
      health:   setHealthError,
      jobs:     setJobsError,
      requests: setReqError,
    }

    setLoading[t](true)
    setError[t](null)
    try {
      const r = await fetch(endpoints[t])
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      setData[t](await r.json())
    } catch (e) {
      setError[t](String(e))
    } finally {
      setLoading[t](false)
    }
  }, [])

  const handleTab = useCallback((t: Tab) => {
    setTab(t)
    fetchTab(t)
  }, [fetchTab])

  const refresh = useCallback(() => fetchTab(tab), [tab, fetchTab])

  if (!open) {
    return (
      <button
        className={styles.openBtn}
        onClick={() => { setOpen(true); fetchTab(tab) }}
        title="Open debug panel (Shift+D)"
      >
        🐛 Debug
      </button>
    )
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span className={styles.panelTitle}>🐛 Debug Panel</span>
        <span className={styles.shortcut}>Shift+D to toggle</span>
        <button className={styles.refreshBtn} onClick={refresh} title="Refresh">↻</button>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className={styles.tabs}>
        {([
          { id: 'calls',    label: `API Calls (${calls.length})` },
          { id: 'health',   label: 'Health' },
          { id: 'jobs',     label: 'Jobs' },
          { id: 'requests', label: 'Requests' },
        ] as { id: Tab; label: string }[]).map(t => (
          <button
            key={t.id}
            className={`${styles.tab} ${tab === t.id ? styles.tabActive : ''}`}
            onClick={() => handleTab(t.id)}
          >
            {t.label}
          </button>
        ))}
        {tab === 'calls' && (
          <button className={styles.clearBtn} onClick={() => { debugLog.clear(); setCalls([]) }}>
            Clear
          </button>
        )}
      </div>

      <div className={styles.body}>
        {tab === 'calls' && (
          calls.length === 0
            ? <div className={styles.empty}>No API calls yet — make a request to see it here.</div>
            : calls.map(c => <CallRow key={c.id} call={c} />)
        )}
        {tab === 'health' && (
          <JsonBlock data={healthData} loading={healthLoading} error={healthError} />
        )}
        {tab === 'jobs' && (
          <JsonBlock data={jobsData} loading={jobsLoading} error={jobsError} />
        )}
        {tab === 'requests' && (
          <JsonBlock data={reqData} loading={reqLoading} error={reqError} />
        )}
      </div>
    </div>
  )
}
