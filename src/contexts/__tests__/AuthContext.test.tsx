// src/contexts/__tests__/AuthContext.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider, useAuth } from '../AuthContext'

// Mock do next/navigation (useRouter não funciona fora do App Router)
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

// Mock dos serviços
vi.mock('@/services/auth.service', () => ({
  loginRequest: vi.fn(),
  logoutRequest: vi.fn(),
}))

vi.mock('@/lib/api', () => ({
  default: {},
  setAuthToken: vi.fn(),
  getAuthToken: vi.fn(),
}))

// Mock do fetch global (para /api/auth/me e /api/auth/set-cookie)
const mockFetch = vi.fn()
global.fetch = mockFetch

import { loginRequest, logoutRequest } from '@/services/auth.service'
import { setAuthToken } from '@/lib/api'

const mockUser = {
  id: '1',
  name: 'Prof. João',
  email: 'joao@escola.com',
  role: 'TEACHER' as const,
}

// Helper: componente de teste que usa o contexto
function TestComponent() {
  const { user, isLoading, login, logout } = useAuth()
  return (
    <div>
      <span data-testid="user">{user ? user.name : 'null'}</span>
      <span data-testid="loading">{isLoading ? 'loading' : 'ready'}</span>
      <button onClick={() => login('joao@escola.com')}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Por padrão: /api/auth/me retorna 401 (não autenticado)
    mockFetch.mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: 'Not authenticated' }),
    })
  })

  it('starts with user null after failed rehydration', async () => {
    render(<AuthProvider><TestComponent /></AuthProvider>)
    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('ready')
    })
    expect(screen.getByTestId('user').textContent).toBe('null')
  })

  it('sets user after successful login', async () => {
    vi.mocked(loginRequest).mockResolvedValue({ user: mockUser, token: 'tok123' })
    mockFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })

    render(<AuthProvider><TestComponent /></AuthProvider>)
    await waitFor(() => expect(screen.getByTestId('loading').textContent).toBe('ready'))

    await act(async () => {
      await userEvent.click(screen.getByText('Login'))
    })

    expect(screen.getByTestId('user').textContent).toBe('Prof. João')
    expect(setAuthToken).toHaveBeenCalledWith('tok123')
  })

  it('clears user after logout', async () => {
    vi.mocked(loginRequest).mockResolvedValue({ user: mockUser, token: 'tok123' })
    vi.mocked(logoutRequest).mockResolvedValue(undefined)
    mockFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })

    render(<AuthProvider><TestComponent /></AuthProvider>)
    await waitFor(() => expect(screen.getByTestId('loading').textContent).toBe('ready'))

    await act(async () => {
      await userEvent.click(screen.getByText('Login'))
    })
    await act(async () => {
      await userEvent.click(screen.getByText('Logout'))
    })

    expect(screen.getByTestId('user').textContent).toBe('null')
    expect(setAuthToken).toHaveBeenCalledWith(null)
  })

  it('rehydrates user from /api/auth/me on mount', async () => {
    // Simula refresh de página com sessão ativa
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ user: mockUser, token: 'tok123' }),
    })

    render(<AuthProvider><TestComponent /></AuthProvider>)
    await waitFor(() => {
      expect(screen.getByTestId('user').textContent).toBe('Prof. João')
    })
    expect(setAuthToken).toHaveBeenCalledWith('tok123')
  })
})
