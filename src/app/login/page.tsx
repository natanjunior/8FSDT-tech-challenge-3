'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/AuthContext'
import { loginSchema, LoginFormData } from '@/lib/schemas/login.schema'

export default function LoginPage() {
  const { login } = useAuth()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginFormData) {
    setServerError(null)
    try {
      await login(data.email)
    } catch (err: unknown) {
      const axiosErr = err as { response?: { status: number } }
      if (axiosErr.response?.status === 404) {
        setServerError('E-mail não encontrado no sistema.')
      } else {
        setServerError('Erro ao fazer login. Tente novamente.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-primary">8FSDT TC 3</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Sistema de blogging educacional — rede pública
          </p>
        </div>

        <hr className="border-surface-container-low mb-6" />

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-on-surface mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="seu.email@escola.com"
              className={`w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder-on-surface-variant
                outline-none transition-colors
                ${errors.email ? 'border border-error/40 bg-error-container/20' : 'border border-transparent focus:border-secondary'}
              `}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
            <p className="text-on-surface-variant text-xs mt-1">
              Não é necessário senha. Basta informar o e-mail cadastrado.
            </p>
          </div>

          {serverError && (
            <p className="text-error text-sm mb-4">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r cta-gradient text-white font-bold
              disabled:opacity-50 transition-opacity"
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-xs text-on-surface-variant mt-6">
          Apenas professores e alunos cadastrados podem acessar.
        </p>
      </div>
    </div>
  )
}
