// src/components/ui/AuthorId.tsx
interface AuthorIdProps {
  name: string
  initials?: string
  subtitle?: string // ex: 'Matemática', 'Professor · Matemática'
  size?: 'sm' | 'md' | 'lg' // sm=36px (header/sidebar), md=40px (PostCard), lg=48px (article footer)
  colorClass?: string // ex: 'bg-emerald-100 border-emerald-200 text-emerald-700'
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')
}

// Cor padrão rotativa baseada no nome (protótipos usam cores diferentes por pessoa)
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

export function AuthorId({ name, initials, subtitle, size = 'md', colorClass }: AuthorIdProps) {
  const displayInitials = initials ?? getInitials(name)
  const color = colorClass ?? getColorByName(name)

  // sm = 36px — Header autenticado / Sidebar (gap-3)
  if (size === 'sm') {
    return (
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${color} border-2 flex items-center justify-center text-xs font-black shrink-0`}>
          {displayInitials}
        </div>
        <div>
          <p className="text-sm font-bold text-primary leading-none">{name}</p>
          {subtitle && <p className="text-[10px] text-outline leading-none mt-0.5">{subtitle}</p>}
        </div>
      </div>
    )
  }

  // lg = 48px — Rodapé de artigo (gap-4)
  if (size === 'lg') {
    return (
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${color} border-2 flex items-center justify-center text-sm font-black shrink-0`}>
          {displayInitials}
        </div>
        <div>
          <p className="font-bold text-primary">{name}</p>
          {subtitle && <p className="text-xs text-on-surface-variant">{subtitle}</p>}
        </div>
      </div>
    )
  }

  // md = 40px — PostCard (gap-3, default)
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full ${color} border-2 flex items-center justify-center text-xs font-black shrink-0`}>
        {displayInitials}
      </div>
      <div>
        <p className="text-sm font-bold text-primary">{name}</p>
        {subtitle && <p className="text-[10px] text-outline">{subtitle}</p>}
      </div>
    </div>
  )
}
