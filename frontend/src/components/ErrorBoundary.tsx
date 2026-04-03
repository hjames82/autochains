import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Uncaught render error:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    const { error, errorInfo } = this.state
    if (!error) return this.props.children

    return (
      <div style={{
        padding: '32px',
        fontFamily: 'monospace',
        background: '#131313',
        color: '#f87171',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
          ⚠ Render Error
        </div>
        <div style={{ color: '#fca5a5', marginBottom: 8 }}>
          {error.message}
        </div>
        <div style={{
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 6,
          padding: '12px 16px',
          fontSize: 11,
          color: '#aaa',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
          marginBottom: 16,
        }}>
          {error.stack}
        </div>
        {errorInfo?.componentStack && (
          <>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#888', marginBottom: 8 }}>
              Component Stack:
            </div>
            <div style={{
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 6,
              padding: '12px 16px',
              fontSize: 11,
              color: '#aaa',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto',
            }}>
              {errorInfo.componentStack}
            </div>
          </>
        )}
        <button
          onClick={() => this.setState({ error: null, errorInfo: null })}
          style={{
            marginTop: 20,
            background: '#c4f500',
            color: '#000',
            border: 'none',
            borderRadius: 6,
            padding: '8px 18px',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: 13,
          }}
        >
          Try to recover
        </button>
      </div>
    )
  }
}
