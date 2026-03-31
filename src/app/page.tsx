import { PublicLayout } from '@/components/layout/PublicLayout'
import { PostList } from '@/components/posts/PostList'
import { SearchBar } from '@/components/posts/SearchBar'
import type { Post } from '@/types/post'
import type { PaginatedResponse } from '@/types/post'

interface HomePageProps {
  searchParams: Promise<{ page?: string }>
}

async function fetchPosts(page: number): Promise<PaginatedResponse<Post>> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3030'
  const res = await fetch(`${apiUrl}/posts?page=${page}&limit=20`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    return { data: [], pagination: { page, limit: 20, total: 0, totalPages: 0 } }
  }
  return res.json()
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page ?? 1))
  const { data: posts, pagination } = await fetchPosts(page)

  return (
    <PublicLayout wide>
      {/* Hero Search */}
      <section className="mb-12 md:mb-20">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12">
          <h1 className="text-[2rem] md:text-[3.5rem] font-black tracking-tighter leading-tight md:leading-none text-primary mb-4 md:mb-6">
            Conhecimento para a <span className="text-secondary">próxima geração.</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Acesse materiais educacionais criados por professores da rede pública brasileira.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <SearchBar size="hero" />
        </div>
      </section>

      {/* Post Grid */}
      <PostList posts={posts} pagination={pagination} basePath="/" />
    </PublicLayout>
  )
}
