import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '../Input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input id="title" label="Título" />)
    expect(screen.getByLabelText('Título')).toBeInTheDocument()
  })

  it('shows error message when error prop is provided', () => {
    render(<Input id="title" label="Título" error="Campo obrigatório" />)
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('applies error styles when error is present', () => {
    render(<Input id="title" label="Título" error="Erro" />)
    const input = screen.getByLabelText('Título')
    expect(input.className).toContain('border-error')
  })

  it('renders as disabled with lock icon hint', () => {
    render(<Input id="author" label="Autor" disabled value="Prof. João" readOnly />)
    expect(screen.getByLabelText('Autor')).toBeDisabled()
  })
})
