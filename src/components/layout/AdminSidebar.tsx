'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AdminSidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
    { href: '/admin/posts/new', label: 'Criar Post', icon: 'add_circle' },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-lowest border-r border-surface-low z-40 flex flex-col pt-20 pb-6 px-3">
      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-3 mb-2">
        Painel
      </p>
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
              ${pathname === link.href
                ? 'bg-teal-50 text-teal-800 font-semibold'
                : 'text-on-surface-variant hover:bg-surface-low'
              }`}
          >
            <span className="material-symbols-outlined text-base">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
