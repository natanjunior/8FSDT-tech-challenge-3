import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmModal } from '../ConfirmModal'

const defaultProps = {
  isOpen: true,
  icon: 'delete_forever',
  iconBgClass: 'bg-error-container/40',
  iconTextClass: 'text-error',
  title: 'Excluir post',
  cancelLabel: 'Cancelar',
  confirmLabel: 'Excluir permanentemente',
  confirmClass: 'bg-error text-white',
  onConfirm: vi.fn(),
  onCancel: vi.fn(),
}

describe('ConfirmModal', () => {
  it('renders title and description', () => {
    render(
      <ConfirmModal {...defaultProps}>
        Esta ação não pode ser desfeita.
      </ConfirmModal>
    )
    expect(screen.getByText('Excluir post')).toBeInTheDocument()
    expect(screen.getByText('Esta ação não pode ser desfeita.')).toBeInTheDocument()
  })

  it('calls onConfirm when confirm button is clicked', async () => {
    const onConfirm = vi.fn()
    render(
      <ConfirmModal {...defaultProps} onConfirm={onConfirm}>
        Confirmar?
      </ConfirmModal>
    )
    await userEvent.click(screen.getByRole('button', { name: /excluir permanentemente/i }))
    expect(onConfirm).toHaveBeenCalledOnce()
  })

  it('calls onCancel when cancel button is clicked', async () => {
    const onCancel = vi.fn()
    render(
      <ConfirmModal {...defaultProps} onCancel={onCancel}>
        Confirmar?
      </ConfirmModal>
    )
    await userEvent.click(screen.getByRole('button', { name: /cancelar/i }))
    expect(onCancel).toHaveBeenCalledOnce()
  })

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <ConfirmModal {...defaultProps} isOpen={false}>
        Confirmar?
      </ConfirmModal>
    )
    expect(container).toBeEmptyDOMElement()
  })
})
