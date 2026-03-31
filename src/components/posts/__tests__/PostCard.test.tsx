import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from '../PostCard'
import { Post } from '@/types/post'

const mockPost: Post = {
  id: '1',
  title: 'Introdução às Frações',
  content: 'Conteúdo completo aqui.',
  status: 'PUBLISHED',
  published_at: '2024-01-15T10:00:00Z',
  created_at: '2024-01-15T10:00:00Z',
  updated_at: '2024-01-15T10:00:00Z',
  author: { id: 'u1', name: 'Prof. João Silva', email: 'joao@escola.com', role: 'TEACHER' },
  discipline: { id: 'd1', slug: 'matematica', label: 'Matemática' },
  comments_count: 3,
  reads_count: 48,
}

describe('PostCard', () => {
  it('renders post title', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Introdução às Frações')).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Prof. João Silva')).toBeInTheDocument()
  })

  it('renders discipline badge when discipline exists', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getAllByText('Matemática').length).toBeGreaterThanOrEqual(1)
  })

  it('does not render discipline badge when discipline is null', () => {
    render(<PostCard post={{ ...mockPost, discipline: null }} />)
    expect(screen.queryByText('Matemática')).not.toBeInTheDocument()
  })

  it('renders comment and bookmark counts', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
  })
})
