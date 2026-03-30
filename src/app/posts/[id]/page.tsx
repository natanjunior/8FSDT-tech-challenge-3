import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { PublicLayout } from '@/components/layout/PublicLayout'
import { CommentSection } from '@/components/comments/CommentSection'
import { DisciplineBadge, StatusBadge } from '@/components/ui/Badge'
import { AuthorId } from '@/components/ui/AuthorId'
import { IconCount } from '@/components/ui/IconCount'
import type { Post } from '@/types/post'

interface PostPageProps {
  params: Promise<{ id: string }>
}

async function fetchPost(id: string, token?: string): Promise<Post | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const headers: HeadersInit = {}
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${apiUrl}/posts/${id}`, {
    headers,
    cache: 'no-store',
  })
  if (res.status === 404) return null
  if (!res.ok) return null
  return res.json()
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  const post = await fetchPost(id, token)

  if (!post) notFound()

  // Visitantes sem token só podem ver PUBLISHED
  if (post.status !== 'PUBLISHED' && !token) {
    redirect('/posts')
  }

  const disciplineSlug = post.discipline?.slug

  return (
    <PublicLayout activeDiscipline={disciplineSlug}>
      <article>
        {/* Cabeçalho do artigo */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.discipline && <DisciplineBadge disciplineSlug={post.discipline.slug} />}
            {post.status !== 'PUBLISHED' && <StatusBadge status={post.status} />}
            <IconCount type="comment" count={post.comments_count ?? 0} />
            <IconCount type="bookmark" count={post.reads_count ?? 0} />
          </div>

          {/* Data responsiva */}
          <div className="text-on-surface-variant text-sm font-mono mb-3">
            <span className="md:hidden">
              {new Date(post.published_at ?? post.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </span>
            <span className="hidden md:inline">
              {new Date(post.published_at ?? post.created_at).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-primary tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-xl text-on-surface-variant mb-6">{post.subtitle}</p>
          )}

          <AuthorId name={post.author.name} size="normal" />
        </header>

        {/* Corpo do artigo */}
        <div className="prose prose-lg max-w-none text-on-surface leading-relaxed">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Seção de comentários (Client Component) */}
        <CommentSection postId={post.id} initialCount={post.comments_count ?? 0} />
      </article>
    </PublicLayout>
  )
}
