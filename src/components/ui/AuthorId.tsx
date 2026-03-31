// src/components/ui/AuthorId.tsx
interface AuthorIdProps {
  name: string
  initials?: string
  size?: 'normal' | 'mini'
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

export function AuthorId({ name, initials, size = 'normal', colorClass }: AuthorIdProps) {
  const displayInitials = initials ?? getInitials(name)
  const color = colorClass ?? getColorByName(name)

  if (size === 'mini') {
    return (
      <div className="flex items-center gap-2 mt-0.5">
        <div className={`w-5 h-5 rounded-full ${color} border flex items-center justify-center text-[9px] font-black shrink-0`}>
          {displayInitials}
        </div>
        <span className="text-xs font-medium text-on-surface-variant">{name}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full ${color} border-2 flex items-center justify-center text-sm font-black shrink-0`}>
        {displayInitials}
      </div>
      <div>
        <p className="text-sm font-bold text-primary leading-tight">{name}</p>
      </div>
    </div>
  )
}
