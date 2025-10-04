import { type AxiosInstance } from 'axios'
import { createDatoGraphqlClient, fetchCollection } from '../../lib/datocmsGraphql'
import { type Casino } from './types'

export function getDatoClient(): AxiosInstance {
  return createDatoGraphqlClient({ preview: false })
}

export async function fetchCasinos(client = getDatoClient()): Promise<Casino[]> {
  type GqlImage = { url: string, alt?: string | null }
  type GqlLocation = { id: string, title?: string | null }
  type GqlCategory = { id: string, title?: string | null }

  const items = await fetchCollection<{
    id: string
    title: string
    image?: GqlImage | null
    loc?: GqlLocation | null
    category?: GqlCategory | null
  }>(client, {
    collection: 'casinos',
    fields: [
      'id',
      'title',
      'image { url alt }',
      'loc { id title }',
      'category { id title }',
    ],
    orderBy: 'title_ASC',
  })

  return items.map((i) => ({
    id: i.id,
    title: i.title,
    image: i.image ? { url: i.image.url, alt: i.image.alt ?? null } : null,
    loc: i.loc ? { id: i.loc.id, title: i.loc.title ?? null } : null,
    category: i.category ? { id: i.category.id, title: i.category.title ?? null } : null,
  }))
}


