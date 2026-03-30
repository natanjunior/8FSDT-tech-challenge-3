import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CommentItem } from '@/components/comments/CommentItem'
import type { Comment } from '@/types/comment'

const baseComment: Comment = {
  id: 'comment-1',
  content: 'Ótima explicação!',
  author_name: 'Pedro',
  is_anonymous: false,
  can_delete: false,
  created_at: '2026-03-28T14:32:00.000Z',
}

describe('CommentItem', () => {
  it('renders comment content and author name', () => {
    render(<CommentItem comment={baseComment} onDelete={vi.fn()} />)
    expect(screen.getByText('Ótima explicação!')).toBeInTheDocument()
    expect(screen.getByText('Pedro')).toBeInTheDocument()
  })

  it('shows "Anônimo" when author_name is null', () => {
    render(
      <CommentItem
        comment={{ ...baseComment, author_name: null }}
        onDelete={vi.fn()}
      />,
    )
    expect(screen.getByText('Anônimo')).toBeInTheDocument()
  })

  it('hides delete button when can_delete is false', () => {
    render(<CommentItem comment={baseComment} onDelete={vi.fn()} />)
    expect(screen.queryByLabelText('Excluir comentário')).not.toBeInTheDocument()
  })

  it('shows delete button when can_delete is true', () => {
    render(
      <CommentItem
        comment={{ ...baseComment, can_delete: true }}
        onDelete={vi.fn()}
      />,
    )
    expect(screen.getByLabelText('Excluir comentário')).toBeInTheDocument()
  })

  it('calls onDelete with comment id when delete button is clicked', () => {
    const onDelete = vi.fn()
    render(
      <CommentItem
        comment={{ ...baseComment, can_delete: true }}
        onDelete={onDelete}
      />,
    )
    fireEvent.click(screen.getByLabelText('Excluir comentário'))
    expect(onDelete).toHaveBeenCalledWith('comment-1')
  })
})
