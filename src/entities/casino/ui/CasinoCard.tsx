import type { Casino } from '../types'

type Props = {
  casino: Casino
}

export default function CasinoCard({ casino }: Props) {
  return (
    <article className="rounded-lg border border-white/10 p-4 flex items-center gap-4">
      {casino.image?.url ? (
        <img
          src={casino.image.url}
          alt={casino.image.alt ?? casino.title}
          className="w-16 h-16 object-cover rounded-md"
        />
      ) : null}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold truncate">{casino.title}</h3>
        <p className="text-xs text-white/60 truncate">
          {casino.category?.title ?? 'Без категории'} • {casino.loc?.title ?? 'Без локации'}
        </p>
      </div>
    </article>
  )
}


