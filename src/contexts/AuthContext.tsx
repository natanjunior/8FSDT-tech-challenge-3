'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@/types/user'
import { loginRequest, logoutRequest } from '@/services/auth.service'
import { setAuthToken } from '@/lib/api'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, redirectTo?: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Reidrata sessão ao montar (ex: após refresh de página)
  useEffect(() => {
    async function rehydrate() {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          // Valida que a resposta tem a shape esperada antes de usar
          if (data && typeof data.id === 'string' && typeof data.role === 'string') {
            setUser(data as User)
            if (data.token) setAuthToken(data.token)
          }
        }
      } catch {
        // Falha de rede ou resposta malformada — manter estado anônimo
      } finally {
        setIsLoading(false)
      }
    }
    rehydrate()
  }, [])

  const login = useCallback(async (email: string, redirectTo?: string) => {
    const result = await loginRequest(email)
    if (!result || !result.user || !result.token) {
      throw new Error('Resposta inválida do servidor de autenticação.')
    }
    const { user, token } = result
    // Seta httpOnly cookie via API route interna
    try {
      await fetch('/api/auth/set-cookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, user }),
      })
    } catch {
      // Falha ao setar cookie — login prossegue com token em memória apenas
    }
    setAuthToken(token)
    setUser(user)
    // Use redirectTo if provided; fallback to role-based default
    const destination = redirectTo ?? (user.role === 'TEACHER' ? '/admin' : '/')
    router.push(destination)
  }, [router])

  const logout = useCallback(async () => {
    try {
      await logoutRequest()
    } catch {
      // Mesmo que o backend falhe, limpar localmente
    }
    try {
      await fetch('/api/auth/clear-cookie', { method: 'POST' })
    } catch {
      // Falha ao limpar cookie — prosseguir com logout local
    }
    setAuthToken(null)
    setUser(null)
    router.push('/login')
  }, [router])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
