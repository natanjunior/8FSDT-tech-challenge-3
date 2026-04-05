import { User } from './user'

export type PostStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'

export interface Discipline {
  id: string
  label: string
}

export interface Post {
  id: string
  title: string
  subtitle?: string
  content: string
  status: PostStatus
  published_at: string | null
  created_at: string
  updated_at: string
  author: User
  discipline: Discipline | null
  comments_count?: number
  reads_count?: number
}

export interface PostPayload {
  title: string
  content: string
  status: PostStatus
  discipline_id?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
