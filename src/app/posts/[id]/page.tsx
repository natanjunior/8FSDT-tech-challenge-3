import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { PublicLayout } from '@/components/layout/PublicLayout'
import { CommentSection } from '@/components/comments/CommentSection'
import { DisciplineBadge, StatusBadge } from '@/components/ui/Badge'
import type { Post } from '@/types/post'
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

interface PostPageProps {
  params: Promise<{ id: string }>
}

async function fetchPost(id: string, token?: string): Promise<Post | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const headers: HeadersInit = {}
  if (token) headers['Authorization'] = `Bearer ${token}`

  try {
    const res = await fetch(`${apiUrl}/posts/${id}`, {
      headers,
      cache: 'no-store',
    })
    if (res.status === 404) return null
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  const post = await fetchPost(id, token)

  if (!post) notFound()

  if (post.status !== 'PUBLISHED' && !token) {
    redirect('/posts')
  }

  const disciplineSlug = post.discipline ? getDisciplineSlug(post.discipline.label) : undefined
  const authorColor = getColorByName(post.author.name)
  const authorInitials = getInitials(post.author.name)

  return (
    <PublicLayout activeDiscipline={disciplineSlug}>
      <article>
        {/* Cabeçalho do artigo */}
        <header className="mb-10">

          {/* Badges + contadores + data */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {disciplineSlug && <DisciplineBadge disciplineSlug={disciplineSlug} />}
            <StatusBadge status={post.status} />
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                <span className="material-symbols-outlined text-outline" style={{ fontSize: 16 }}>forum</span>
                {post.comments_count ?? 0}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                <span className="material-symbols-outlined text-outline" style={{ fontSize: 16 }}>bookmark</span>
                {post.reads_count ?? 0}
              </span>
            </div>
            <span className="text-xs font-mono text-on-surface-variant ml-auto">
              <span className="md:hidden">
                {new Date(post.published_at ?? post.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit', month: '2-digit', year: '2-digit',
                })}
              </span>
              <span className="hidden md:inline">
                {new Date(post.published_at ?? post.created_at).toLocaleDateString('pt-BR', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </span>
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-8">
            {post.title}
          </h1>

          {/* Autor + ações */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low">
            <div className={`w-14 h-14 rounded-full ${authorColor} border-2 flex items-center justify-center font-black text-lg shrink-0`}>
              {authorInitials}
            </div>
            <div className="flex-1">
              <p className="font-bold text-primary leading-none mb-1">{post.author.name}</p>
              <p className="text-sm text-on-surface-variant">
                Professor{post.discipline ? ` · ${post.discipline.label}` : ''}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
                <span className="text-xs font-medium hidden sm:block">Compartilhar</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span className="material-symbols-outlined text-lg">bookmark</span>
                <span className="text-xs font-medium hidden sm:block">Marcar como lido</span>
              </button>
            </div>
          </div>
        </header>

        {/* Corpo do artigo */}
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Seção de comentários */}
        <CommentSection postId={post.id} initialCount={post.comments_count ?? 0} />
      </article>
    </PublicLayout>
  )
}
