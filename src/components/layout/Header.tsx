'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { AuthorId } from '@/components/ui/AuthorId'
import { useState } from 'react'

const DISCIPLINES = [
  { label: 'Matemática', slug: 'matematica' },
  { label: 'Português', slug: 'portugues' },
  { label: 'Ciências', slug: 'ciencias' },
  { label: 'História', slug: 'historia' },
  { label: 'Geografia', slug: 'geografia' },
]

interface HeaderProps {
  activeDiscipline?: string // slug da disciplina ativa
}

export function Header({ activeDiscipline }: HeaderProps) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="font-black text-primary text-lg shrink-0">
          8FSDT TC 3
        </Link>

        {/* Nav central — disciplinas (desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.slug}
              href={`/posts?discipline=${d.slug}`}
              className={`px-3 py-1.5 rounded text-sm transition-colors
                ${activeDiscipline === d.slug
                  ? 'text-secondary font-bold border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
            >
              {d.label}
            </Link>
          ))}
        </nav>

        {/* Direita */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <AuthorId name={user.name} size="mini" />
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  expand_more
                </span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-surface-lowest rounded-card shadow-xl shadow-sky-950/5 border border-surface-low overflow-hidden">
                  <button
                    onClick={() => { setMenuOpen(false); logout() }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-surface-low transition-colors"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-card border border-on-surface-variant/20 text-sm text-on-surface hover:bg-surface-low transition-colors"
            >
              Entrar
            </Link>
          )}

          {/* Hamburger mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
