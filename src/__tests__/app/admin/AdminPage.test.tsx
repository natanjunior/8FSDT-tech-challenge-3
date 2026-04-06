import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdminPage from '@/app/admin/page'

vi.mock('@/services/posts.service', () => ({
  getPosts: vi.fn().mockResolvedValue({
    data: [
      {
        id: 'post-1',
        title: 'Post de Teste',
        status: 'PUBLISHED',
        discipline: { id: 'd1', label: 'Ciências' },
        author: { id: 'u1', name: 'Prof. Marcos Viana', email: 'marcos@escola.com', role: 'TEACHER' },
        created_at: '2023-11-15T00:00:00Z',
        updated_at: '2023-11-15T00:00:00Z',
        published_at: null,
        content: '',
        comments_count: 3,
        reads_count: 48,
      },
    ],
    pagination: { page: 1, limit: 10, total: 1, totalPages: 1 },
  }),
  deletePost: vi.fn().mockResolvedValue(undefined),
}))

vi.mock('@/services/disciplines.service', () => ({
  getDisciplines: vi.fn().mockResolvedValue([
    { id: 'd1', label: 'Matemática' },
    { id: 'd2', label: 'Ciências' },
  ]),
}))

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'u1', name: 'Prof. Marcos', email: 'marcos@escola.com', role: 'TEACHER' },
  }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@uiw/react-md-editor', () => ({
  default: ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <textarea data-testid="md-editor" value={value} onChange={e => onChange(e.target.value)} />
  ),
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
