// src/components/ui/Badge.tsx
import { PostStatus } from '@/types/post'

const STATUS_CONFIG: Record<PostStatus, { label: string; className: string }> = {
  PUBLISHED: {
    label: 'PUBLICADO',
    className: 'bg-green-500/10 text-green-600 border border-green-500/20',
  },
  DRAFT: {
    label: 'RASCUNHO',
    className: 'bg-yellow-400/10 text-yellow-600 border border-yellow-400/20',
  },
  ARCHIVED: {
    label: 'ARQUIVADO',
    className: 'bg-slate-200 text-slate-500',
  },
}

export function StatusBadge({ status }: { status: PostStatus }) {
  const config = STATUS_CONFIG[status]
  return (
    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${config.className}`}>
      {config.label}
    </span>
  )
}

const DISCIPLINE_CONFIG: Record<string, { label: string; bgColor: string }> = {
  matematica: { label: 'Matemática', bgColor: 'bg-blue-600' },
  portugues:  { label: 'Português',  bgColor: 'bg-rose-600' },
  ciencias:   { label: 'Ciências',   bgColor: 'bg-emerald-600' },
  historia:   { label: 'História',   bgColor: 'bg-amber-600' },
  geografia:  { label: 'Geografia',  bgColor: 'bg-indigo-600' },
}

export function DisciplineBadge({ disciplineSlug }: { disciplineSlug: string | null | undefined }) {
  if (!disciplineSlug) return null
  const config = DISCIPLINE_CONFIG[disciplineSlug]
  if (!config) return null
  return (
    <span className={`${config.bgColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg`}>
      {config.label}
    </span>
  )
}
