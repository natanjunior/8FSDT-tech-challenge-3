// src/app/login/__tests__/LoginPage.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from '../page'

// Mock do AuthContext
const mockLogin = vi.fn()
vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({ login: mockLogin, user: null, isLoading: false }),
}))

describe('LoginPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders email input and submit button', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('does not show password field', () => {
    render(<LoginPage />)
    expect(screen.queryByLabelText(/senha/i)).not.toBeInTheDocument()
  })

  it('calls login with email on submit', async () => {
    mockLogin.mockResolvedValue(undefined)
    render(<LoginPage />)

    await userEvent.type(screen.getByLabelText(/e-mail/i), 'joao@escola.com')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('joao@escola.com')
    })
  })

  it('shows error message when login fails with 404', async () => {
    mockLogin.mockRejectedValue({
      response: { status: 404, data: { error: 'Email não cadastrado' } },
    })
    render(<LoginPage />)

    await userEvent.type(screen.getByLabelText(/e-mail/i), 'desconhecido@escola.com')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(screen.getByText(/e-mail não encontrado/i)).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid email', async () => {
    render(<LoginPage />)
    await userEvent.type(screen.getByLabelText(/e-mail/i), 'invalido')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument()
    })
    expect(mockLogin).not.toHaveBeenCalled()
  })
})
