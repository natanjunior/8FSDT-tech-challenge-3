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
    <PublicLayout>
      {/* Hero */}
      <section className="rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 mb-10 text-white">
        <h1 className="text-3xl lg:text-4xl font-black mb-2 tracking-tight">
          Aprenda com os professores
        </h1>
        <p className="text-base lg:text-lg opacity-80 mb-6">
          Posts educacionais sobre Matemática, Português, Ciências, História e Geografia
        </p>
        <SearchBar />
      </section>

      {/* Listagem de posts */}
      <section>
        <h2 className="text-xl font-bold text-on-surface mb-6">Posts recentes</h2>
        <PostList posts={posts} pagination={pagination} basePath="/" />
      </section>
    </PublicLayout>
  )
}
