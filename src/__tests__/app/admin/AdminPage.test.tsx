import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdminPage from '@/app/admin/page'

const mockPost = {
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
}

vi.mock('@/services/posts.service', () => ({
  getPosts: vi.fn().mockImplementation((params: { status?: string; limit?: number } = {}) => {
    if (params.status === 'PUBLISHED') {
      return Promise.resolve({ data: [], pagination: { page: 1, limit: 1, total: 5, totalPages: 5 } })
    }
    if (params.status === 'DRAFT') {
      return Promise.resolve({ data: [], pagination: { page: 1, limit: 1, total: 2, totalPages: 2 } })
    }
    if (params.status === 'ARCHIVED') {
      return Promise.resolve({ data: [], pagination: { page: 1, limit: 1, total: 1, totalPages: 1 } })
    }
    if (params.limit === 100) {
      // loadStats call to compute totalReads
      return Promise.resolve({
        data: [
          { ...mockPost, id: 'p1', reads_count: 10 },
          { ...mockPost, id: 'p2', reads_count: 20 },
        ],
        pagination: { page: 1, limit: 100, total: 2, totalPages: 1 },
      })
    }
    // Default listing call (loadPosts)
    return Promise.resolve({
      data: [mockPost],
      pagination: { page: 1, limit: 10, total: 1, totalPages: 1 },
    })
  }),
  deletePost: vi.fn(),
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

  it('shows total reads aggregated across all posts (not just current page)', async () => {
    render(<AdminPage />)
    // Wait for loadStats to complete — the "Marcados como lido" card should show 30 (10 + 20)
    const label = await screen.findByText(/marcados como lido/i)
    const card = label.closest('div')!
    await waitFor(() => expect(card).toHaveTextContent('30'))
  })
})
