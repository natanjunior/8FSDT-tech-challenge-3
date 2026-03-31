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
  // ?q= e ?discipline= são mutuamente exclusivos — q tem prioridade
  const q = sp.q?.trim()
  const discipline = q ? undefined : sp.discipline

  const { data: posts, pagination } = await fetchSearch({ q, discipline, page })

  // Heading dinâmico conforme o modo
  let heading: React.ReactNode
  if (q) {
    heading = (
      <h1 className="text-2xl font-bold text-on-surface mb-6">
        <span className="text-on-surface-variant font-normal">{pagination.total} resultados para </span>
        &quot;{q}&quot;
      </h1>
    )
  } else if (discipline && DISCIPLINE_NAMES[discipline]) {
    heading = (
      <div className="mb-6">
        <DisciplineBadge disciplineSlug={discipline} />
        <h1 className="text-2xl font-bold text-on-surface mt-3">
          <span className="text-on-surface-variant font-normal">{pagination.total} posts em </span>
          {DISCIPLINE_NAMES[discipline]}
        </h1>
      </div>
    )
  } else {
    heading = (
      <h1 className="text-2xl font-bold text-on-surface mb-6">Todos os posts</h1>
    )
  }

  // basePath preserva os parâmetros de busca/filtro na paginação
  const basePath = q
    ? `/posts?q=${encodeURIComponent(q)}`
    : discipline
    ? `/posts?discipline=${discipline}`
    : '/posts'

  return (
    <PublicLayout activeDiscipline={discipline}>
      {/* Barra de busca */}
      <div className="mb-8 bg-surface-container-low rounded-xl p-6">
        <SearchBar />
      </div>

      {heading}

      <PostList posts={posts} pagination={pagination} basePath={basePath} />
    </PublicLayout>
  )
}
