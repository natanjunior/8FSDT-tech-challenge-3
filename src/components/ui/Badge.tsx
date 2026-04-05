// src/components/ui/Badge.tsx
import { PostStatus } from '@/types/post'

const STATUS_CONFIG: Record<PostStatus, { label: string; bg: string; text: string; dot: string }> = {
  PUBLISHED: { label: 'PUBLICADO', bg: 'bg-green-500/10',  text: 'text-green-600',  dot: 'bg-green-500'  },
  DRAFT:     { label: 'RASCUNHO',  bg: 'bg-yellow-500/10', text: 'text-yellow-600', dot: 'bg-yellow-500' },
  ARCHIVED:  { label: 'ARQUIVADO', bg: 'bg-slate-400/10',  text: 'text-slate-500',  dot: 'bg-slate-400'  },
}

export function StatusBadge({ status }: { status: PostStatus }) {
  const c = STATUS_CONFIG[status]
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mr-2`}></span>
      {c.label}
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
  if (!disciplineSlug) {
    return (
      <span className="bg-slate-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
        Sem disciplina
      </span>
    )
  }
  const config = DISCIPLINE_CONFIG[disciplineSlug]
  if (!config) return null
  return (
    <span className={`${config.bgColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg`}>
      {config.label}
    </span>
  )
}
