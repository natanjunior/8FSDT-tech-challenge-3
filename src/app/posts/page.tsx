import { PublicLayout } from '@/components/layout/PublicLayout'
import { PostList } from '@/components/posts/PostList'
import { SearchBar } from '@/components/posts/SearchBar'
import type { Post, PaginatedResponse } from '@/types/post'
import { DisciplineBadge } from '@/components/ui/Badge'

const DISCIPLINE_NAMES: Record<string, string> = {
  matematica: 'Matemática',
  portugues: 'Português',
  ciencias: 'Ciências',
  historia: 'História',
  geografia: 'Geografia',
}

interface PostsPageProps {
  searchParams: Promise<{
    q?: string
    discipline?: string
    page?: string
  }>
}

async function fetchSearch(params: {
  q?: string
  discipline?: string
  page: number
}): Promise<PaginatedResponse<Post>> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const qs = new URLSearchParams()
  if (params.q) qs.set('q', params.q)
  if (params.discipline) qs.set('discipline', params.discipline)
  qs.set('page', String(params.page))
  qs.set('limit', '20')

  const endpoint = params.q ? '/posts/search' : '/posts'
  const res = await fetch(`${apiUrl}${endpoint}?${qs.toString()}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    return { data: [], pagination: { page: params.page, limit: 20, total: 0, totalPages: 0 } }
  }
  return res.json()
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page ?? 1))
  const q = sp.q?.trim()
  const discipline = q ? undefined : sp.discipline

  const { data: posts, pagination } = await fetchSearch({ q, discipline, page })

  const basePath = q
    ? `/posts?q=${encodeURIComponent(q)}`
    : discipline
    ? `/posts?discipline=${discipline}`
    : '/posts'

  return (
    <PublicLayout activeDiscipline={discipline}>
      {/* Search input + resultado */}
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
        {discipline && !q && DISCIPLINE_NAMES[discipline] && (
          <div className="flex items-center gap-3">
            <DisciplineBadge disciplineSlug={discipline} />
            <p className="text-sm text-on-surface-variant">
              <span className="font-bold text-on-surface">{pagination.total} posts</span> nesta disciplina
            </p>
          </div>
        )}
        {!q && !discipline && (
          <p className="text-sm text-on-surface-variant">
            <span className="font-bold text-on-surface">{pagination.total} posts</span> disponíveis
          </p>
        )}
      </div>

      <PostList posts={posts} pagination={pagination} basePath={basePath} />
    </PublicLayout>
  )
}
