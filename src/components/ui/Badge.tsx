import { PostStatus } from '@/types/post'

const STATUS_CONFIG: Record<PostStatus, { label: string; classes: string }> = {
  PUBLISHED: {
    label: 'Publicado',
    classes: 'bg-green-500/10 text-green-600',
  },
  DRAFT: {
    label: 'Rascunho',
    classes: 'bg-yellow-400/10 text-yellow-600',
  },
  ARCHIVED: {
    label: 'Arquivado',
    classes: 'bg-on-surface-variant/10 text-on-surface-variant',
  },
}

export function StatusBadge({ status }: { status: PostStatus }) {
  const { label, classes } = STATUS_CONFIG[status]
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${classes}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  )
}

const DISCIPLINE_COLORS: Record<string, string> = {
  Matemática: 'bg-blue-100 text-blue-700',
  Português: 'bg-purple-100 text-purple-700',
  Ciências: 'bg-emerald-100 text-emerald-700',
  História: 'bg-amber-100 text-amber-700',
  Geografia: 'bg-teal-100 text-teal-700',
}

export function DisciplineBadge({ label }: { label: string | null }) {
  if (!label) return null
  const classes = DISCIPLINE_COLORS[label] ?? 'bg-surface-low text-on-surface-variant'
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${classes}`}>
      {label}
    </span>
  )
}
