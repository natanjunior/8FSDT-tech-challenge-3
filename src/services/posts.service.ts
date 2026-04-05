import api from '@/lib/api'
import { Post, PostPayload, PaginatedResponse } from '@/types/post'

export interface GetPostsParams {
  page?: number
  limit?: number
  status?: string
  discipline?: string
  query?: string
  sortKey?: string | null
  sortDir?: 'asc' | 'desc' | null
}

export interface SearchPostsParams {
  query?: string
  discipline?: string
  page?: number
  limit?: number
}

const SORT_FIELD_MAP: Record<string, string> = {
  title: 'title',
  author: 'author',
  disc: 'discipline',
  status: 'status',
  date: 'published_at',
}

function buildFhirSort(
  sortKey?: string | null,
  sortDir?: 'asc' | 'desc' | null
): string | undefined {
  if (!sortKey || !sortDir) return undefined
  const apiField = SORT_FIELD_MAP[sortKey]
  if (!apiField) return undefined
  return sortDir === 'desc' ? `-${apiField}` : apiField
}

export async function getPosts(
  params: GetPostsParams = {}
): Promise<PaginatedResponse<Post>> {
  const { sortKey, sortDir, ...rest } = params
  const hasFilter = rest.query || rest.discipline || rest.status || sortKey
  const endpoint = hasFilter ? '/posts/search' : '/posts'

  const sort = buildFhirSort(sortKey, sortDir)
  const queryParams = sort ? { ...rest, sort } : rest

  const { data } = await api.get<PaginatedResponse<Post>>(endpoint, {
    params: queryParams,
  })
  return data
}

export async function searchPosts(
  params: SearchPostsParams
): Promise<PaginatedResponse<Post>> {
  const { data } = await api.get<PaginatedResponse<Post>>('/posts/search', { params })
  return data
}

export async function getPost(id: string): Promise<Post> {
  const { data } = await api.get<Post>(`/posts/${id}`)
  return data
}

export async function createPost(payload: PostPayload): Promise<Post> {
  const { data } = await api.post<Post>('/posts', payload)
  return data
}

export async function updatePost(
  id: string,
  payload: Partial<PostPayload>
): Promise<Post> {
  const { data } = await api.patch<Post>(`/posts/${id}`, payload)
  return data
}

export async function deletePost(id: string): Promise<void> {
  await api.delete(`/posts/${id}`)
}

export async function markAsRead(postId: string): Promise<void> {
  try {
    await api.post('/reads', { post_id: postId })
  } catch {
    // Fire-and-forget — ignore errors silently
  }
}
