import api from '@/lib/api'
import { Post, PostPayload, PaginatedResponse } from '@/types/post'

export interface GetPostsParams {
  page?: number
  limit?: number
}

export interface SearchPostsParams {
  q?: string
  discipline?: string
  page?: number
  limit?: number
}

export async function getPosts(
  params: GetPostsParams = {}
): Promise<PaginatedResponse<Post>> {
  const { data } = await api.get<PaginatedResponse<Post>>('/posts', { params })
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
