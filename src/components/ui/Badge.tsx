// src/components/ui/Badge.tsx
import { PostStatus } from '@/types/post'

const STATUS_CONFIG: Record<PostStatus, { label: string; bgClass: string; textClass: string; dotClass: string }> = {
  PUBLISHED: {
    label: 'PUBLICADO',
    bgClass: 'bg-green-500/10',
    textClass: 'text-green-600',
    dotClass: 'bg-green-500',
  },
  DRAFT: {
    label: 'RASCUNHO',
    bgClass: 'bg-yellow-500/10',
    textClass: 'text-yellow-600',
    dotClass: 'bg-yellow-500',
  },
  ARCHIVED: {
    label: 'ARQUIVADO',
    bgClass: 'bg-slate-400/10',
    textClass: 'text-slate-500',
    dotClass: 'bg-slate-400',
  },
}

export function StatusBadge({ status }: { status: PostStatus }) {
  const config = STATUS_CONFIG[status]
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${config.bgClass} ${config.textClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass} mr-2`} />
      {config.label}
    </span>
  )
}

const DISCIPLINE_CONFIG: Record<string, { label: string; bgColor: string }> = {
  matematica: { label: 'Matemática', bgColor: 'bg-blue-600' },
  portugues:  { label: 'Português',  bgColor: 'bg-amber-600' },
  ciencias:   { label: 'Ciências',   bgColor: 'bg-emerald-600' },
  historia:   { label: 'História',   bgColor: 'bg-rose-600' },
  geografia:  { label: 'Geografia',  bgColor: 'bg-teal-600' },
}

export function DisciplineBadge({ disciplineSlug }: { disciplineSlug: string | null | undefined }) {
  if (!disciplineSlug) return null
  const config = DISCIPLINE_CONFIG[disciplineSlug]
  if (!config) return null
  return (
    <span className={`${config.bgColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
      {config.label}
    </span>
  )
}
