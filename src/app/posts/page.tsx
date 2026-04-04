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
  query?: string
  page: number
}): Promise<PaginatedResponse<Post>> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const qs = new URLSearchParams()
  if (params.query) qs.set('query', params.query)
  qs.set('page', String(params.page))
  qs.set('limit', '20')

  const endpoint = params.query ? '/posts/search' : '/posts'
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
  const discipline = sp.discipline

  const { data: allPosts, pagination } = await fetchSearch({ query: q, page })

  // Client-side discipline filter (workaround — API does not support ?discipline=)
  const disciplineName = discipline ? DISCIPLINE_NAMES[discipline] : undefined
  const posts = disciplineName
    ? allPosts.filter((p) => p.discipline?.label === disciplineName)
    : allPosts

  const basePath = q
    ? `/posts?q=${encodeURIComponent(q)}`
    : discipline
    ? `/posts?discipline=${discipline}`
    : '/posts'

  return (
    <PublicLayout activeDiscipline={discipline}>
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
        {discipline && !q && disciplineName && (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <DisciplineBadge disciplineSlug={discipline} />
              <p className="text-sm text-on-surface-variant">
                <span className="font-bold text-on-surface">{posts.length} posts</span> em{' '}
                <span className="font-bold text-secondary">{disciplineName}</span>{' '}
                <span className="text-xs">(nesta página)</span>
              </p>
            </div>
            <p className="text-xs text-on-surface-variant/60 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">info</span>
              Filtro aplicado localmente. Use a busca por texto para resultados completos.
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
