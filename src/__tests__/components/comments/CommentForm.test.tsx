import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CommentForm } from '@/components/comments/CommentForm'

// Mock da função de criar comentário
const mockOnSubmit = vi.fn()

// Mock do AuthContext
vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({ user: null }),
}))

describe('CommentForm', () => {
  beforeEach(() => {
    mockOnSubmit.mockClear()
  })

  it('renders content textarea and optional name field', () => {
    render(<CommentForm onSubmit={mockOnSubmit} isSubmitting={false} />)
    expect(screen.getByPlaceholderText('Escreva seu comentário...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Seu nome (opcional)')).toBeInTheDocument()
  })

  it('shows validation error when content is empty on submit', async () => {
    render(<CommentForm onSubmit={mockOnSubmit} isSubmitting={false} />)
    fireEvent.click(screen.getByRole('button', { name: /comentar/i }))
    await waitFor(() => {
      expect(screen.getByText(/conteúdo é obrigatório/i)).toBeInTheDocument()
    })
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('calls onSubmit with content and optional author_name', async () => {
    render(<CommentForm onSubmit={mockOnSubmit} isSubmitting={false} />)
    fireEvent.change(screen.getByPlaceholderText('Escreva seu comentário...'), {
      target: { value: 'Excelente post!' },
    })
    fireEvent.change(screen.getByPlaceholderText('Seu nome (opcional)'), {
      target: { value: 'Ana' },
    })
    fireEvent.click(screen.getByRole('button', { name: /comentar/i }))
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        content: 'Excelente post!',
        author_name: 'Ana',
      })
    })
  })

  it('calls onSubmit without author_name when field is empty', async () => {
    render(<CommentForm onSubmit={mockOnSubmit} isSubmitting={false} />)
    fireEvent.change(screen.getByPlaceholderText('Escreva seu comentário...'), {
      target: { value: 'Muito bom!' },
    })
    fireEvent.click(screen.getByRole('button', { name: /comentar/i }))
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        content: 'Muito bom!',
        author_name: undefined,
      })
    })
  })

  it('disables button while submitting', () => {
    render(<CommentForm onSubmit={mockOnSubmit} isSubmitting={true} />)
    expect(screen.getByRole('button', { name: /comentar/i })).toBeDisabled()
  })
})
