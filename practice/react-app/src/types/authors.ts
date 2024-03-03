export interface Author {
  id: number
  name: string
  comments: number
  articles: number
}

export interface Authors {
  authors: Author[]
}
