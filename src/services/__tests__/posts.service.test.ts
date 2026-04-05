import { describe, it, expect, vi, beforeEach } from 'vitest'
import api from '@/lib/api'
import { markAsRead } from '@/services/posts.service'

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
