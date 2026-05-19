'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DSItem {
  href: string
  icon: string
  label: string
}

const FUNDAMENTOS: DSItem[] = [
  { href: '/design-system', icon: 'palette', label: 'Princípios' },
]

const COMPONENTES: DSItem[] = [
  { href: '/design-system/header', icon: 'web_asset', label: 'Header' },
  { href: '/design-system/sidebar', icon: 'side_navigation', label: 'Sidebar' },
  { href: '/design-system/post-card', icon: 'article', label: 'Post Card' },
  { href: '/design-system/status-badge', icon: 'label', label: 'Status Badge' },
  { href: '/design-system/discipline-badge', icon: 'school', label: 'Discipline Badge' },
  { href: '/design-system/author-id', icon: 'person', label: 'Author Id' },
  { href: '/design-system/card', icon: 'crop_square', label: 'Card' },
  { href: '/design-system/breadcrumb', icon: 'chevron_right', label: 'Breadcrumb' },
  { href: '/design-system/stats-card', icon: 'bar_chart', label: 'Stats Card' },
  { href: '/design-system/posts-table', icon: 'table', label: 'Posts Table' },
  { href: '/design-system/confirm-modal', icon: 'warning', label: 'Confirm Modal' },
  { href: '/design-system/button', icon: 'smart_button', label: 'Button' },
  { href: '/design-system/pagination', icon: 'more_horiz', label: 'Pagination' },
  { href: '/design-system/icon-count', icon: 'forum', label: 'Icon Count' },
  { href: '/design-system/data-table', icon: 'grid_on', label: 'Data Table' },
]

function NavItem({ item, active }: { item: DSItem; active: boolean }) {
  const base = 'flex items-center px-4 py-2.5 rounded-lg cursor-pointer'
  const activeCls = 'bg-teal-50 text-teal-800 font-semibold'
  const idleCls = 'text-on-surface-variant hover:bg-surface-container-low transition-all hover:translate-x-1'

  return (
    <Link href={item.href} className={`${base} ${active ? activeCls : idleCls}`}>
      <span className="material-symbols-outlined mr-3 text-base">{item.icon}</span>
      <span className={`text-sm ${active ? 'font-semibold' : ''}`}>{item.label}</span>
    </Link>
  )
}

export function DSSidebar() {
  const pathname = usePathname()

  return (
    <aside
      id="ds-sidebar"
      className="flex flex-col w-64 fixed left-0 top-0 h-screen bg-slate-50 shadow-2xl shadow-sky-950/10 z-40 border-r border-outline-variant/20 -translate-x-full lg:translate-x-0 transition-transform duration-300"
    >
      <div className="h-[72px] shrink-0" />
      <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 py-2">
        <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
          Fundamentos
        </p>
        {FUNDAMENTOS.map((item) => (
          <NavItem key={item.href} item={item} active={pathname === item.href} />
        ))}

        <p className="px-4 pt-5 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
          Componentes
        </p>
        {COMPONENTES.map((item) => (
          <NavItem key={item.href} item={item} active={pathname === item.href} />
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-slate-200 shrink-0">
        <Link
          href="/"
          className="w-full bg-gradient-to-r from-secondary to-on-secondary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">rss_feed</span>
          <span className="text-sm">Blog</span>
        </Link>
      </div>
    </aside>
  )
}
