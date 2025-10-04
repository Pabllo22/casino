import { useEffect, useState } from 'react'
import { getCmaSiteName } from '../lib/datocmsCma'

export default function DatoCmaPing() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setStatus('loading')
        const siteName = await getCmaSiteName()
        if (!mounted) return
        setStatus('ok')
        setMessage(
          siteName
            ? `CMA connected: ${siteName}`
            : 'CMA connected (site name unavailable)',
        )
      } catch (err) {
        if (!mounted) return
        setStatus('error')
        setMessage(
          err instanceof Error
            ? err.message
            : 'Unknown error connecting to DatoCMS CMA',
        )
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  if (status === 'idle' || status === 'loading') {
    return <p style={{ fontSize: 12, opacity: 0.8 }}>Connecting to DatoCMS CMA…</p>
  }

  if (status === 'error') {
    return (
      <p style={{ color: 'crimson', fontSize: 12 }}>
        DatoCMS CMA error: {message}
      </p>
    )
  }

  return <p style={{ color: 'green', fontSize: 12 }}>{message}</p>
}


