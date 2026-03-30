import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdminPage from '@/app/admin/page'

vi.mock('@/services/posts.service', () => ({
  getPosts: vi.fn().mockResolvedValue({
    data: [
      {
        id: 'post-1',
        title: 'Post de Teste',
        subtitle: 'Subtítulo',
        status: 'PUBLISHED',
        discipline: { slug: 'ciencias', label: 'Ciências' },
        author: { id: 'u1', name: 'Prof. Marcos Viana' },
        created_at: '2023-11-15T00:00:00Z',
        updated_at: '2023-11-15T00:00:00Z',
        comments_count: 3,
        reads_count: 48,
      },
    ],
    pagination: { page: 1, limit: 10, total: 1, totalPages: 1 },
  }),
  deletePost: vi.fn().mockResolvedValue(undefined),
}))

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'u1', name: 'Prof. Marcos', email: 'marcos@escola.com', role: 'TEACHER' },
  }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

describe('Admin Dashboard', () => {
  beforeEach(() => vi.clearAllMocks())

  it('renders posts table after loading', async () => {
    render(<AdminPage />)
    await waitFor(() => {
      expect(screen.getByText('Post de Teste')).toBeInTheDocument()
    })
  })

  it('opens delete modal when delete button clicked', async () => {
    render(<AdminPage />)
    await waitFor(() => screen.getByText('Post de Teste'))
    fireEvent.click(screen.getByTitle('Excluir'))
    expect(screen.getByText(/excluir artigo/i)).toBeInTheDocument()
  })
})
