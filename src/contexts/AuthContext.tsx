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
          const { user, token } = await res.json()
          setUser(user)
          setAuthToken(token)
        }
      } finally {
        setIsLoading(false)
      }
    }
    rehydrate()
  }, [])

  const login = useCallback(async (email: string, redirectTo?: string) => {
    const { user, token } = await loginRequest(email)
    // Seta httpOnly cookie via API route interna
    await fetch('/api/auth/set-cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, user }),
    })
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
    await fetch('/api/auth/clear-cookie', { method: 'POST' })
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
