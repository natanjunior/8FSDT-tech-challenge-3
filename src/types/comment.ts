export interface Comment {
  id: string
  content: string
  author_name: string | null
  is_anonymous: boolean
  can_delete: boolean
  created_at: string
}

export interface CommentPayload {
  content: string
  author_name?: string
}
