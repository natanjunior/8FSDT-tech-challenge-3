import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import PostForm from '@/components/admin/PostForm'

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'u1', name: 'Prof. Marcos Viana', email: 'marcos@escola.com', role: 'TEACHER' },
  }),
}))

const mockOnSubmit = vi.fn()
const mockOnCancel = vi.fn()

describe('PostForm', () => {
  beforeEach(() => vi.clearAllMocks())

  it('renders title, content, status, author fields', () => {
    render(<PostForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} submitLabel="Criar artigo" />)
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/conteúdo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/autor/i)).toBeInTheDocument()
    expect(screen.getByText('Criar artigo')).toBeInTheDocument()
  })

  it('shows validation error when title is too short', async () => {
    render(<PostForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} submitLabel="Criar artigo" />)
    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: 'abc' } })
    fireEvent.change(screen.getByLabelText(/conteúdo/i), { target: { value: 'conteudo valido longo o suficiente' } })
    fireEvent.submit(screen.getByRole('button', { name: /criar artigo/i }))
    await waitFor(() => {
      expect(screen.getByText(/entre 5 e 255 caracteres/i)).toBeInTheDocument()
    })
  })

  it('shows validation error when content is too short', async () => {
    render(<PostForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} submitLabel="Criar artigo" />)
    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: 'Título válido de teste' } })
    fireEvent.change(screen.getByLabelText(/conteúdo/i), { target: { value: 'curto' } })
    fireEvent.submit(screen.getByRole('button', { name: /criar artigo/i }))
    await waitFor(() => {
      expect(screen.getByText(/no mínimo 10 caracteres/i)).toBeInTheDocument()
    })
  })

  it('author field is disabled', () => {
    render(<PostForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} submitLabel="Criar artigo" />)
    expect(screen.getByLabelText(/autor/i)).toBeDisabled()
  })

  it('pre-fills fields from defaultValues', () => {
    render(
      <PostForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
        submitLabel="Salvar alterações"
        defaultValues={{ title: 'Título pré-preenchido', content: 'Conteúdo', status: 'PUBLISHED', discipline_id: '' }}
      />
    )
    expect(screen.getByLabelText(/título/i)).toHaveValue('Título pré-preenchido')
  })

  it('calls onCancel when cancel is clicked', () => {
    render(<PostForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} submitLabel="Criar artigo" />)
    fireEvent.click(screen.getByText('Cancelar'))
    expect(mockOnCancel).toHaveBeenCalledOnce()
  })
})
