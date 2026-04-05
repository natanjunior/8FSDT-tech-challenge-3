import api from '@/lib/api'
import type { Comment, CommentPayload } from '@/types/comment'
import type { PaginatedResponse } from '@/types/post'

export async function getComments(
  postId: string,
  page = 1,
  limit = 10
): Promise<PaginatedResponse<Comment>> {
  const { data } = await api.get<PaginatedResponse<Comment>>(
    '/comments/search',
    { params: { post_id: postId, page, limit } }
  )
  return data
}

export async function createComment(
  postId: string,
  payload: CommentPayload
): Promise<Comment> {
  const { data } = await api.post<Comment>('/comments', {
    post_id: postId,
    ...payload,
  })
  return data
}

export async function deleteComment(
  _postId: string,
  commentId: string
): Promise<void> {
  await api.delete(`/comments/${commentId}`)
}
