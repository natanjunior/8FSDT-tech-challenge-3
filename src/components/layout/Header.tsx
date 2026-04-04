'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
  activeDiscipline?: string
  showSearch?: boolean
  onToggleSidebar?: () => void
}

export function Header({ activeDiscipline, showSearch, onToggleSidebar }: HeaderProps) {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  function handleSearchKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      router.push(`/posts?q=${encodeURIComponent(e.currentTarget.value.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto gap-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-primary uppercase shrink-0">
          8FSDT TC 3
        </Link>

        {/* Nav central — disciplinas (desktop) */}
        <nav className="hidden md:flex items-center space-x-1 font-medium text-sm tracking-tight">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.slug}
              href={`/posts?discipline=${d.slug}`}
              className={
                activeDiscipline === d.slug
                  ? 'text-teal-700 font-bold border-b-2 border-teal-600 px-3 py-1'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md'
              }
            >
              {d.label}
            </Link>
          ))}
        </nav>

        {/* Direita — hamburger + search + auth */}
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only (sidebar pages) */}
          {showSearch && onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary">menu</span>
            </button>
          )}

          {/* Search input — desktop, sidebar pages only */}
          {showSearch && (
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input
                type="text"
                placeholder="Buscar posts..."
                onKeyDown={handleSearchKeyDown}
                className="bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2 text-sm w-56 focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-on-surface-variant/60"
              />
            </div>
          )}

          {user ? (
            <div className="relative" ref={dropdownRef}>
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
                <span className={`material-symbols-outlined text-base ${menuOpen ? 'text-primary' : 'text-outline'}`}>
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
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-error hover:bg-red-50 transition-colors cursor-pointer"
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
              className="primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all shrink-0"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
