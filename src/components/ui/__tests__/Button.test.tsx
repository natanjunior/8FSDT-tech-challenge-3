import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  it('renders primary button with text', () => {
    render(<Button>Salvar</Button>)
    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Clique</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('is disabled when disabled prop is true', async () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>Salvar</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Cancelar</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('border-outline-variant')
    expect(btn.className).toContain('text-on-surface')
    expect(btn.className).toContain('px-6')
    expect(btn.className).toContain('py-3')
  })

  it('renders nav variant', () => {
    render(<Button variant="nav">Entrar</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('primary-gradient')
    expect(btn.className).toContain('shadow-sky-950/20')
  })

  it('renders danger variant (filled)', () => {
    render(<Button variant="danger">Excluir permanentemente</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-error')
    expect(btn.className).toContain('text-white')
  })

  it('renders danger-outline variant', () => {
    render(<Button variant="danger-outline">Excluir post</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('border-error')
    expect(btn.className).toContain('text-error')
    expect(btn.className).toContain('hover:bg-red-50')
  })

  it('primary disabled has opacity-40 and cursor-not-allowed', () => {
    render(<Button disabled>Criar post</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('opacity-40')
    expect(btn.className).toContain('cursor-not-allowed')
    expect(btn).toBeDisabled()
  })

  it('secondary disabled has opacity-40 and cursor-not-allowed', () => {
    render(<Button variant="secondary" disabled>Cancelar</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('opacity-40')
    expect(btn.className).toContain('cursor-not-allowed')
    expect(btn).toBeDisabled()
  })

  it('primary loading has opacity-80, cursor-wait, and is disabled', () => {
    render(<Button isLoading>Salvando</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('opacity-80')
    expect(btn.className).toContain('cursor-wait')
    expect(btn).toBeDisabled()
  })

  it('primary loading renders spinner svg', () => {
    render(<Button isLoading>Salvando</Button>)
    const svg = document.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg!.className.baseVal).toContain('animate-spin')
  })

  it('primary loading does not have hover/active transition classes', () => {
    render(<Button isLoading>Salvando</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).not.toContain('hover:scale')
    expect(btn.className).not.toContain('active:scale')
  })

  it('isLoading on non-primary variant does not render spinner', () => {
    render(<Button variant="secondary" isLoading>Salvando</Button>)
    const svg = document.querySelector('svg')
    expect(svg).toBeNull()
  })
})
