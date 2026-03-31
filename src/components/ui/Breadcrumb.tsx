// src/components/ui/Breadcrumb.tsx
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  currentTitle: string
  description?: string
}

export function Breadcrumb({ items, currentTitle, description }: BreadcrumbProps) {
  return (
    <div className="mb-8">
      <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="font-medium text-secondary hover:underline underline-offset-2 transition-colors"
            >
              {item.label}
            </Link>
            <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
          </span>
        ))}
        <span className="font-black text-2xl tracking-tight text-primary">{currentTitle}</span>
      </nav>
      {description && (
        <p className="text-sm text-on-surface-variant">{description}</p>
      )}
    </div>
  )
}
