'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

const DISCIPLINES = [
  { label: 'Matemática', slug: 'matematica', icon: 'functions' },
  { label: 'Português', slug: 'portugues', icon: 'menu_book' },
  { label: 'Ciências', slug: 'ciencias', icon: 'science' },
  { label: 'História', slug: 'historia', icon: 'history_edu' },
  { label: 'Geografia', slug: 'geografia', icon: 'public' },
]

interface SidebarProps {
  activeDiscipline?: string
  sidebarOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ activeDiscipline, sidebarOpen = false, onClose }: SidebarProps) {
  const { user } = useAuth()

  return (
    <>
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-on-surface/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        id="main-sidebar"
        className={`fixed left-0 top-0 h-screen w-64 bg-surface-lowest border-r border-surface-low z-40
          flex flex-col pt-20 pb-6 px-3 transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <nav className="flex-1 flex flex-col gap-1">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-3 mb-2">
            Disciplinas
          </p>
          {DISCIPLINES.map((d) => (
            <Link
              key={d.slug}
              href={`/posts?discipline=${d.slug}`}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                ${activeDiscipline === d.slug
                  ? 'bg-teal-50 text-teal-800 font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-low hover:translate-x-1'
                }`}
            >
              <span className="material-symbols-outlined text-base">{d.icon}</span>
              {d.label}
            </Link>
          ))}

          {user?.role === 'TEACHER' && (
            <Link
              href="/admin/posts/new"
              onClick={onClose}
              className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                bg-gradient-to-r from-secondary to-secondary-on-container text-white font-bold text-sm"
            >
              <span className="material-symbols-outlined text-base">add</span>
              Criar Post
            </Link>
          )}
        </nav>

        <div className="border-t border-surface-low pt-4 flex flex-col gap-1">
          <Link href="/grupo" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-low transition-colors">
            <span className="material-symbols-outlined text-base">group</span>
            Grupo
          </Link>
          <Link href="/design-system" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-low transition-colors">
            <span className="material-symbols-outlined text-base">palette</span>
            Design System
          </Link>
        </div>
      </aside>
    </>
  )
}
