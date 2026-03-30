import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmModal } from '../ConfirmModal'

describe('ConfirmModal', () => {
  it('renders title and message', () => {
    render(
      <ConfirmModal
        isOpen
        variant="delete"
        title="Excluir post"
        message="Esta ação não pode ser desfeita."
        onConfirm={vi.fn()}
        onCancel={vi.fn()}
      />
    )
    expect(screen.getByText('Excluir post')).toBeInTheDocument()
    expect(screen.getByText('Esta ação não pode ser desfeita.')).toBeInTheDocument()
  })

  it('calls onConfirm when confirm button is clicked', async () => {
    const onConfirm = vi.fn()
    render(
      <ConfirmModal
        isOpen
        variant="delete"
        title="Excluir"
        message="Confirmar?"
        onConfirm={onConfirm}
        onCancel={vi.fn()}
      />
    )
    await userEvent.click(screen.getByRole('button', { name: /excluir permanentemente/i }))
    expect(onConfirm).toHaveBeenCalledOnce()
  })

  it('calls onCancel when cancel button is clicked', async () => {
    const onCancel = vi.fn()
    render(
      <ConfirmModal
        isOpen
        variant="delete"
        title="Excluir"
        message="Confirmar?"
        onConfirm={vi.fn()}
        onCancel={onCancel}
      />
    )
    await userEvent.click(screen.getByRole('button', { name: /cancelar/i }))
    expect(onCancel).toHaveBeenCalledOnce()
  })

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <ConfirmModal
        isOpen={false}
        variant="delete"
        title="Excluir"
        message="Confirmar?"
        onConfirm={vi.fn()}
        onCancel={vi.fn()}
      />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
