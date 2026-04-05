import { describe, it, expect, vi, beforeEach } from 'vitest'
import api from '@/lib/api'
import {
  getComments,
  createComment,
  deleteComment,
} from '@/services/comments.service'

vi.mock('@/lib/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  },
}))

const mockComment = {
  id: 'c1',
  content: 'Ótimo artigo!',
  author_name: 'Maria',
  is_anonymous: false,
  can_delete: true,
  created_at: '2026-04-05T10:00:00.000Z',
}

const mockPaginatedResponse = {
  data: [mockComment],
  pagination: { page: 1, limit: 10, total: 1, totalPages: 1 },
}

describe('getComments', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls GET /comments/search with post_id, page and limit', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPaginatedResponse })
    await getComments('post-uuid', 2, 5)
    expect(vi.mocked(api.get)).toHaveBeenCalledWith('/comments/search', {
      params: { post_id: 'post-uuid', page: 2, limit: 5 },
    })
  })

  it('returns the paginated response', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPaginatedResponse })
    const result = await getComments('post-uuid')
    expect(result.data).toHaveLength(1)
    expect(result.pagination.total).toBe(1)
  })
})

describe('createComment', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls POST /comments with post_id merged into payload', async () => {
    vi.mocked(api.post).mockResolvedValueOnce({ data: mockComment })
    await createComment('post-uuid', { content: 'Ótimo artigo!', author_name: 'Maria' })
    expect(vi.mocked(api.post)).toHaveBeenCalledWith('/comments', {
      post_id: 'post-uuid',
      content: 'Ótimo artigo!',
      author_name: 'Maria',
    })
  })

  it('returns the created comment', async () => {
    vi.mocked(api.post).mockResolvedValueOnce({ data: mockComment })
    const result = await createComment('post-uuid', { content: 'Ótimo artigo!' })
    expect(result.id).toBe('c1')
  })
})

describe('deleteComment', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls DELETE /comments/:id (ignores postId)', async () => {
    vi.mocked(api.delete).mockResolvedValueOnce({})
    await deleteComment('post-uuid', 'comment-uuid')
    expect(vi.mocked(api.delete)).toHaveBeenCalledWith('/comments/comment-uuid')
  })
})
