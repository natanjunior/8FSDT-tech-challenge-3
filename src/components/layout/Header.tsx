'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

const DISCIPLINES = [
  { label: 'Matemática', slug: 'matematica' },
  { label: 'Português', slug: 'portugues' },
  { label: 'Ciências', slug: 'ciencias' },
  { label: 'História', slug: 'historia' },
  { label: 'Geografia', slug: 'geografia' },
]

const COLORS = [
  'bg-blue-100 border-blue-200 text-blue-700',
  'bg-emerald-100 border-emerald-200 text-emerald-700',
  'bg-teal-100 border-teal-200 text-teal-700',
  'bg-amber-100 border-amber-200 text-amber-700',
  'bg-rose-100 border-rose-200 text-rose-700',
  'bg-violet-100 border-violet-200 text-violet-700',
]

function getColorByName(name: string): string {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return COLORS[hash % COLORS.length]
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')
}

interface HeaderProps {
  activeDiscipline?: string // slug da disciplina ativa
}

export function Header({ activeDiscipline }: HeaderProps) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-primary uppercase shrink-0">
          8FSDT TC 3
        </Link>

        {/* Nav central — disciplinas (desktop) */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-tight">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.slug}
              href={`/posts?discipline=${d.slug}`}
              className={
                activeDiscipline === d.slug
                  ? 'text-sky-900 bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md'
              }
            >
              {d.label}
            </Link>
          ))}
        </nav>

        {/* Direita — auth */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors ${menuOpen ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'}`}
              >
                <div className={`w-9 h-9 rounded-full ${getColorByName(user.name)} border-2 flex items-center justify-center text-xs font-black shrink-0`}>
                  {getInitials(user.name)}
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-bold text-primary leading-none">{user.name}</p>
                  <p className="text-[10px] text-outline leading-none mt-0.5">{user.role === 'TEACHER' ? 'Professor' : 'Aluno'}</p>
                </div>
                <span className="material-symbols-outlined text-outline text-base">
                  {menuOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-2xl shadow-on-surface/10 border border-outline-variant/20 overflow-hidden z-50">
                  {user.role === 'TEACHER' && (
                    <Link
                      href="/admin"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-surface-container-low transition-colors"
                    >
                      <span className="material-symbols-outlined text-base text-outline">dashboard</span>
                      Painel
                    </Link>
                  )}
                  <div className="border-t border-outline-variant/10" />
                  <button
                    onClick={() => { setMenuOpen(false); logout() }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-error hover:bg-red-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">logout</span>
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
