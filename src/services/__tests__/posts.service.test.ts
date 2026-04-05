import { describe, it, expect, vi, beforeEach } from 'vitest'
import api from '@/lib/api'
import { markAsRead, getPosts } from '@/services/posts.service'

vi.mock('@/lib/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn().mockResolvedValue({ data: {} }),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}))

describe('markAsRead', () => {
  beforeEach(() => vi.clearAllMocks())

  it('calls POST /reads with post_id in the body', async () => {
    await markAsRead('abc-123')
    expect(vi.mocked(api.post)).toHaveBeenCalledWith('/reads', { post_id: 'abc-123' })
  })

  it('does not throw when the API call fails', async () => {
    vi.mocked(api.post).mockRejectedValueOnce(new Error('Network error'))
    await expect(markAsRead('abc-123')).resolves.toBeUndefined()
  })
})

describe('buildFhirSort', () => {
  // buildFhirSort is not exported — test it indirectly via getPosts

  beforeEach(() => vi.clearAllMocks())

  it('sends ?sort=title for sortKey=title, sortDir=asc', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ sortKey: 'title', sortDir: 'asc' })
    expect(vi.mocked(api.get)).toHaveBeenCalledWith(
      '/posts/search',
      expect.objectContaining({ params: expect.objectContaining({ sort: 'title' }) })
    )
  })

  it('sends ?sort=-published_at for sortKey=date, sortDir=desc', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ sortKey: 'date', sortDir: 'desc' })
    expect(vi.mocked(api.get)).toHaveBeenCalledWith(
      '/posts/search',
      expect.objectContaining({ params: expect.objectContaining({ sort: '-published_at' }) })
    )
  })

  it('sends ?sort=-discipline for sortKey=disc, sortDir=desc', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ sortKey: 'disc', sortDir: 'desc' })
    expect(vi.mocked(api.get)).toHaveBeenCalledWith(
      '/posts/search',
      expect.objectContaining({ params: expect.objectContaining({ sort: '-discipline' }) })
    )
  })

  it('omits sort param when sortKey is "comments" (unsupported)', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ sortKey: 'comments', sortDir: 'asc' })
    const callParams = vi.mocked(api.get).mock.calls[0][1] as { params: Record<string, unknown> }
    expect(callParams.params.sort).toBeUndefined()
  })

  it('omits sort param when sortKey is null', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ page: 1 })
    const callParams = vi.mocked(api.get).mock.calls[0][1] as { params: Record<string, unknown> }
    expect(callParams.params.sort).toBeUndefined()
  })

  it('does not send sortKey or sortDir fields to the API', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({
      data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
    })
    await getPosts({ sortKey: 'title', sortDir: 'asc' })
    const callParams = vi.mocked(api.get).mock.calls[0][1] as { params: Record<string, unknown> }
    expect(callParams.params.sortKey).toBeUndefined()
    expect(callParams.params.sortDir).toBeUndefined()
  })
})
