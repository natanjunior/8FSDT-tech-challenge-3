import { PublicLayout } from '@/components/layout/PublicLayout'
import { PostList } from '@/components/posts/PostList'
import { SearchBar } from '@/components/posts/SearchBar'
import type { Post, PaginatedResponse } from '@/types/post'
import { DisciplineBadge } from '@/components/ui/Badge'
import { getDisciplineIdBySlug, getDisciplineLabelBySlug } from '@/lib/discipline'

interface PostsPageProps {
  searchParams: Promise<{
    q?: string
    discipline?: string
    page?: string
  }>
}

async function fetchPosts(params: {
  query?: string
  discipline?: string
  page: number
}): Promise<PaginatedResponse<Post>> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const qs = new URLSearchParams()
  if (params.query) qs.set('query', params.query)
  if (params.discipline) qs.set('discipline', params.discipline)
  qs.set('page', String(params.page))
  qs.set('limit', '20')

  const endpoint = params.query || params.discipline ? '/posts/search' : '/posts'
  try {
    const res = await fetch(`${apiUrl}${endpoint}?${qs.toString()}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      return { data: [], pagination: { page: params.page, limit: 20, total: 0, totalPages: 0 } }
    }
    return res.json()
  } catch {
    return { data: [], pagination: { page: params.page, limit: 20, total: 0, totalPages: 0 } }
  }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page ?? 1))
  const q = sp.q?.trim()
  const disciplineSlug = sp.discipline

  // Resolve discipline slug → UUID using hardcoded seed map (no /disciplines fetch needed)
  const disciplineId = disciplineSlug ? getDisciplineIdBySlug(disciplineSlug) : undefined
  const disciplineLabel = disciplineSlug ? getDisciplineLabelBySlug(disciplineSlug) : undefined

  const { data: posts, pagination } = await fetchPosts({
    query: q,
    discipline: disciplineId,
    page,
  })

  const basePath = q
    ? `/posts?q=${encodeURIComponent(q)}`
    : disciplineSlug
    ? `/posts?discipline=${disciplineSlug}`
    : '/posts'

  return (
    <PublicLayout activeDiscipline={disciplineSlug}>
      <div className="mb-6 md:mb-10">
        <div className="max-w-2xl mb-3 md:mb-4">
          <SearchBar />
        </div>
        {q && (
          <p className="text-sm text-on-surface-variant">
            <span className="font-bold text-on-surface">{pagination.total} resultados</span> para{' '}
            <span className="font-bold text-secondary">&quot;{q}&quot;</span>
          </p>
        )}
        {disciplineSlug && !q && disciplineLabel && (
          <div className="flex items-center gap-3">
            <DisciplineBadge disciplineSlug={disciplineSlug} />
            <p className="text-sm text-on-surface-variant">
              <span className="font-bold text-on-surface">{pagination.total} posts</span> em{' '}
              <span className="font-bold text-secondary">{disciplineLabel}</span>
            </p>
          </div>
        )}
        {!q && !disciplineSlug && (
          <p className="text-sm text-on-surface-variant">
            <span className="font-bold text-on-surface">{pagination.total} posts</span> disponíveis
          </p>
        )}
      </div>

      <PostList posts={posts} pagination={pagination} basePath={basePath} />
    </PublicLayout>
  )
}
