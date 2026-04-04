'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/AuthContext'
import { loginSchema, LoginFormData } from '@/lib/schemas/login.schema'

function LoginForm() {
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
    <div className="bg-surface-container-low text-on-surface min-h-screen flex flex-col">

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <section className="bg-surface-container-lowest w-full max-w-md p-10 rounded-xl shadow-xl shadow-on-surface/5 border border-outline-variant/20">

          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 editorial-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-3xl">auto_stories</span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-primary uppercase text-center">8FSDT TC 3</h2>
            <p className="text-sm text-on-surface-variant mt-1 font-medium tracking-wide">Sistema de blogging educacional</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface tracking-tight" htmlFor="email">
                E-mail
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu.email@escola.com"
                  className={`w-full rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:border-transparent transition-all outline-none placeholder:text-outline/50
                    ${errors.email || serverError
                      ? 'bg-error-container/20 border border-error/30'
                      : 'bg-surface-container-low border border-outline-variant/20 focus:ring-primary'
                    }`}
                  {...register('email')}
                />
                {(errors.email || serverError) && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-error text-lg">error</span>
                )}
              </div>
              {errors.email && (
                <p className="text-xs font-medium text-error flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  {errors.email.message}
                </p>
              )}
              {serverError && (
                <p className="text-xs font-medium text-error flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  {serverError}
                </p>
              )}
              {!errors.email && !serverError && (
                <p className="text-xs text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">info</span>
                  Não é necessário senha. Basta informar o e-mail cadastrado.
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cta-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Entrando...' : 'Entrar'}</span>
                {!isSubmitting && <span className="material-symbols-outlined text-lg">login</span>}
              </button>
            </div>

            <p className="text-center text-xs text-on-surface-variant pt-2">
              Apenas professores e alunos cadastrados podem acessar.
            </p>

          </form>
        </section>
      </main>

      <footer className="py-6 px-8 border-t border-outline-variant/10">
        <div className="max-w-md mx-auto flex justify-between items-center opacity-60">
          <p className="text-[10px] font-light uppercase tracking-widest text-on-surface-variant">© 2026 8FSDT TC 3</p>
          <div className="flex gap-6">
            <a className="text-[10px] font-light uppercase tracking-widest hover:text-primary transition-colors" href="/grupo">Grupo</a>
            <a className="text-[10px] font-light uppercase tracking-widest hover:text-primary transition-colors" href="https://github.com/natanjunior/8FSDT-tech-challenge-3" target="_blank" rel="noopener noreferrer">Documentação</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function LoginPage() {
  return <LoginForm />
}
