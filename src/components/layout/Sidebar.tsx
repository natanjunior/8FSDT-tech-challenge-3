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

const GITHUB_URL = 'https://github.com/natanjunior/8FSDT-tech-challenge-3'

interface SidebarProps {
  activeDiscipline?: string
  activeSection?: 'grupo'
  sidebarOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ activeDiscipline, activeSection, sidebarOpen = false, onClose }: SidebarProps) {
  const { user } = useAuth()

  return (
    <>
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-on-surface/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        id="main-sidebar"
        className={`fixed left-0 top-0 h-screen w-64 bg-slate-50 shadow-2xl shadow-sky-950/10 py-6 z-40 border-r border-outline-variant/20
          flex flex-col transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <nav className="flex-1 space-y-1 px-2 mt-20">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.slug}
              href={`/posts?discipline=${d.slug}`}
              onClick={onClose}
              className={
                activeDiscipline === d.slug
                  ? 'flex items-center px-4 py-3 bg-teal-50 text-teal-800 font-semibold rounded-lg cursor-pointer'
                  : 'flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer'
              }
            >
              <span className="material-symbols-outlined mr-3 text-lg">{d.icon}</span>
              <span className={`text-sm ${activeDiscipline === d.slug ? 'font-semibold' : 'font-medium'}`}>{d.label}</span>
            </Link>
          ))}

          {user?.role === 'TEACHER' && (
            <div className="pt-4 px-2">
              <Link
                href="/admin/posts/new"
                onClick={onClose}
                className="w-full bg-gradient-to-r from-secondary to-on-secondary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                <span className="text-sm">Criar Post</span>
              </Link>
            </div>
          )}
        </nav>

        <div className="px-2 space-y-1 border-t border-slate-200 pt-4 mt-auto">
          <Link
            href="/grupo"
            onClick={onClose}
            className={
              activeSection === 'grupo'
                ? 'flex items-center px-4 py-3 bg-teal-50 text-teal-800 font-semibold rounded-lg cursor-pointer'
                : 'flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer'
            }
          >
            <span className="material-symbols-outlined mr-3 text-lg">group</span>
            <span className="text-sm">Grupo</span>
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer"
          >
            <span className="material-symbols-outlined mr-3 text-lg">description</span>
            <span className="text-sm">Documentação</span>
          </a>
        </div>
      </aside>
    </>
  )
}
