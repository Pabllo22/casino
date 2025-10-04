import { useEffect, useState } from 'react'
import { fetchCasinos } from '../../entities/casino/api'
import type { Casino } from '../../entities/casino/types'
import CasinoCard from '../../entities/casino/ui/CasinoCard'

export default function CasinoList() {
  const [items, setItems] = useState<Casino[]>([])
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await fetchCasinos()
        if (!mounted) return
        setItems(data)
      } catch (e) {
        if (!mounted) return
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <p className="text-sm opacity-80">Загрузка…</p>
  if (error) return <p className="text-sm text-red-400">Ошибка: {error}</p>
  if (items.length === 0) return <p className="text-sm opacity-80">Нет записей</p>

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <CasinoCard key={c.id} casino={c} />
      ))}
    </div>
  )
}


