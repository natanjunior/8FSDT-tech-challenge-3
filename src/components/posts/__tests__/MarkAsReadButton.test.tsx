import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

vi.mock('@/services/posts.service', () => ({
  markAsRead: vi.fn().mockResolvedValue(undefined),
}))

import { MarkAsReadButton } from '../MarkAsReadButton'
import { markAsRead } from '@/services/posts.service'

describe('MarkAsReadButton', () => {
  beforeEach(() => vi.clearAllMocks())

  it('renders in initial "not read" state', () => {
    render(<MarkAsReadButton postId="post-1" />)
    const button = screen.getByRole('button', { name: /marcar como lido/i })
    expect(button).not.toBeDisabled()
  })

  it('calls markAsRead and switches to "read" state when clicked', async () => {
    render(<MarkAsReadButton postId="post-1" />)
    fireEvent.click(screen.getByRole('button', { name: /marcar como lido/i }))
    expect(vi.mocked(markAsRead)).toHaveBeenCalledWith('post-1')
    expect(vi.mocked(markAsRead)).toHaveBeenCalledTimes(1)
    expect(await screen.findByRole('button', { name: /marcado como lido/i })).toBeDisabled()
  })

  it('does not call markAsRead a second time when clicked again', async () => {
    render(<MarkAsReadButton postId="post-1" />)
    const button = screen.getByRole('button', { name: /marcar como lido/i })
    fireEvent.click(button)
    fireEvent.click(await screen.findByRole('button', { name: /marcado como lido/i }))
    expect(vi.mocked(markAsRead)).toHaveBeenCalledTimes(1)
  })
})
