import api from '@/lib/api'
import type { Comment, CommentPayload } from '@/types/comment'
import type { PaginatedResponse } from '@/types/post'

export async function getComments(
  postId: string,
  page = 1,
  limit = 10
): Promise<PaginatedResponse<Comment>> {
  const { data } = await api.get<PaginatedResponse<Comment>>(
    `/posts/${postId}/comments`,
    { params: { page, limit } }
  )
  return data
}

export async function createComment(
  postId: string,
  payload: CommentPayload
): Promise<Comment> {
  const { data } = await api.post<Comment>(`/posts/${postId}/comments`, payload)
  return data
}

export async function deleteComment(
  postId: string,
  commentId: string
): Promise<void> {
  await api.delete(`/posts/${postId}/comments/${commentId}`)
}
