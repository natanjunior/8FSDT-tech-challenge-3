import Link from 'next/link'
import { Post } from '@/types/post'
import { DisciplineBadge } from '@/components/ui/Badge'
import { getDisciplineSlug } from '@/lib/discipline'

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

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')
}

const STATUS_INLINE: Record<string, { label: string; classes: string }> = {
  PUBLISHED: { label: 'PUBLICADO', classes: 'bg-green-500/10 text-green-600 border border-green-500/20' },
  DRAFT:     { label: 'RASCUNHO',  classes: 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20' },
  ARCHIVED:  { label: 'ARQUIVADO', classes: 'bg-slate-400/10 text-slate-500 border border-slate-400/20' },
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function getExcerpt(content: string, maxLength = 160): string {
  const text = content.replace(/<[^>]*>/g, '')
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text
}

interface PostCardProps {
  post: Post
  size?: 'default' | 'large'
}

export function PostCard({ post, size = 'default' }: PostCardProps) {
  const statusConfig = STATUS_INLINE[post.status] ?? STATUS_INLINE.PUBLISHED
  const authorColor = getColorByName(post.author.name)
  const authorInitials = getInitials(post.author.name)
  const disciplineSlug = post.discipline ? getDisciplineSlug(post.discipline.label) : undefined

  const isLarge = size === 'large'

  return (
    <Link href={`/posts/${post.id}`} className="block">
      <article className="group bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10">
        {/* Discipline badge — floating above card */}
        <div className="absolute -top-3 left-6">
          <DisciplineBadge disciplineSlug={disciplineSlug} />
        </div>

        {/* Top — status + date */}
        <div className={`flex justify-between items-start pt-2 ${isLarge ? 'mb-6' : 'mb-4'}`}>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusConfig.classes}`}>
            {statusConfig.label}
          </span>
          <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">
            {formatDate(post.published_at ?? post.created_at)}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-extrabold text-primary leading-tight group-hover:text-secondary transition-colors cursor-pointer ${isLarge ? 'text-2xl mb-6' : 'text-xl mb-3 line-clamp-3'}`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-on-surface-variant leading-relaxed text-sm ${isLarge ? 'mb-8 line-clamp-2' : 'mb-6 line-clamp-3'}`}>
          {getExcerpt(post.content)}
        </p>

        {/* Footer */}
        <div className={`mt-auto flex items-center justify-between border-t border-outline-variant/10 ${isLarge ? 'pt-6' : 'pt-5'}`}>
          {/* Author */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${authorColor} border-2 rounded-full flex items-center justify-center text-xs font-black shrink-0`}>
              {authorInitials}
            </div>
            <div>
              <p className="text-sm font-bold text-primary">{post.author.name}</p>
              <p className="text-[10px] text-outline">{post.discipline?.label ?? 'Sem disciplina'}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" style={{ fontSize: 16 }}>forum</span>
              {post.comments_count}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" style={{ fontSize: 16 }}>bookmark</span>
              {post.reads_count}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
