import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-on-surface-variant">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="material-symbols-outlined text-sm">chevron_right</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-secondary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-on-surface font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
