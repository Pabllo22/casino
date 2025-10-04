export type Asset = {
  url: string
  alt?: string | null
}

export type LocationRef = {
  id: string
  title?: string | null
}

export type CategoryRef = {
  id: string
  title?: string | null
}

export type Casino = {
  id: string
  title: string
  image?: Asset | null
  loc?: LocationRef | null
  category?: CategoryRef | null
}


