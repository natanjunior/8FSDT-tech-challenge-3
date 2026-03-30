import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusBadge, DisciplineBadge } from '../Badge'

describe('StatusBadge', () => {
  it('renders PUBLISHED badge', () => {
    render(<StatusBadge status="PUBLISHED" />)
    expect(screen.getByText('Publicado')).toBeInTheDocument()
  })

  it('renders DRAFT badge', () => {
    render(<StatusBadge status="DRAFT" />)
    expect(screen.getByText('Rascunho')).toBeInTheDocument()
  })

  it('renders ARCHIVED badge', () => {
    render(<StatusBadge status="ARCHIVED" />)
    expect(screen.getByText('Arquivado')).toBeInTheDocument()
  })
})

describe('DisciplineBadge', () => {
  it('renders discipline label', () => {
    render(<DisciplineBadge label="Matemática" />)
    expect(screen.getByText('Matemática')).toBeInTheDocument()
  })

  it('renders nothing when label is null', () => {
    const { container } = render(<DisciplineBadge label={null} />)
    expect(container).toBeEmptyDOMElement()
  })
})
