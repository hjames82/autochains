/**
 * Debug logger — wraps fetch to record every API call with timing,
 * request summary, response status, and body (truncated).
 *
 * Exposes a singleton `debugLog` store that components can subscribe to.
 */

export interface ApiCallEntry {
  id: string
  ts: string
  method: string
  url: string
  status: number | null
  ms: number | null
  ok: boolean | null
  requestSummary: string | null
  responseBody: string | null
  error: string | null
}

type Listener = () => void

class DebugLogger {
  private _calls: ApiCallEntry[] = []
  private _listeners: Set<Listener> = new Set()
  private _counter = 0
  readonly MAX_ENTRIES = 40

  get calls(): readonly ApiCallEntry[] {
    return this._calls
  }

  subscribe(fn: Listener): () => void {
    this._listeners.add(fn)
    return () => this._listeners.delete(fn)
  }

  private _notify() {
    this._listeners.forEach(fn => fn())
  }

  /** Called by the patched fetch before the request fires. */
  startCall(method: string, url: string, requestSummary: string | null): string {
    const id = `call-${++this._counter}`
    const entry: ApiCallEntry = {
      id,
      ts: new Date().toISOString(),
      method: method.toUpperCase(),
      url,
      status: null,
      ms: null,
      ok: null,
      requestSummary,
      responseBody: null,
      error: null,
    }
    this._calls.unshift(entry)
    if (this._calls.length > this.MAX_ENTRIES) this._calls.pop()
    this._notify()
    return id
  }

  /** Called after the response (success or failure). */
  finishCall(
    id: string,
    status: number,
    ms: number,
    ok: boolean,
    responseBody: string | null,
  ) {
    const idx = this._calls.findIndex(c => c.id === id)
    if (idx >= 0) {
      this._calls[idx] = { ...this._calls[idx], status, ms, ok, responseBody }
      this._notify()
    }
  }

  errorCall(id: string, ms: number, error: string) {
    const idx = this._calls.findIndex(c => c.id === id)
    if (idx >= 0) {
      this._calls[idx] = { ...this._calls[idx], ms, ok: false, error }
      this._notify()
    }
  }

  clear() {
    this._calls = []
    this._notify()
  }
}

export const debugLog = new DebugLogger()

// ── Patch window.fetch ────────────────────────────────────────────────────────
const _origFetch = window.fetch.bind(window)

window.fetch = async function patchedFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : (input as Request).url
  const method = init?.method ?? (input instanceof Request ? input.method : 'GET')

  let requestSummary: string | null = null
  if (init?.body) {
    if (typeof init.body === 'string') {
      try {
        const parsed = JSON.parse(init.body)
        // Truncate large payloads
        const str = JSON.stringify(parsed, null, 2)
        requestSummary = str.length > 1200 ? str.slice(0, 1200) + '\n… (truncated)' : str
      } catch {
        requestSummary = String(init.body).slice(0, 400)
      }
    } else if (init.body instanceof FormData) {
      const parts: string[] = []
      init.body.forEach((v, k) => {
        if (v instanceof File) parts.push(`${k}: [File "${v.name}" ${(v.size / 1024).toFixed(1)} KB]`)
        else parts.push(`${k}: ${String(v).slice(0, 80)}`)
      })
      requestSummary = parts.join('\n')
    }
  }

  const callId = debugLog.startCall(method, url, requestSummary)
  const t0 = performance.now()

  try {
    const response = await _origFetch(input, init)
    const ms = Math.round(performance.now() - t0)

    // Clone response to read body without consuming it
    let responseBody: string | null = null
    const contentType = response.headers.get('content-type') ?? ''
    if (contentType.includes('json')) {
      try {
        const clone = response.clone()
        const text = await clone.text()
        // Truncate large responses
        responseBody = text.length > 1200 ? text.slice(0, 1200) + '\n… (truncated)' : text
      } catch { /* ignore */ }
    }

    debugLog.finishCall(callId, response.status, ms, response.ok, responseBody)
    return response
  } catch (err) {
    const ms = Math.round(performance.now() - t0)
    debugLog.errorCall(callId, ms, String(err))
    throw err
  }
}
