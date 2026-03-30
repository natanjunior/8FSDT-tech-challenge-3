import Link from 'next/link'
import { Post, PaginatedResponse } from '@/types/post'
import { PostCard } from './PostCard'

interface PostListProps {
  posts: Post[]
  pagination: PaginatedResponse<Post>['pagination']
  basePath: string
}

function buildPageUrl(basePath: string, page: number): string {
  const sep = basePath.includes('?') ? '&' : '?'
  return `${basePath}${sep}page=${page}`
}

export function PostList({ posts, pagination, basePath }: PostListProps) {
  const { page, totalPages } = pagination

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-on-surface-variant">
        <span className="material-symbols-outlined text-4xl block mb-2">article</span>
        <p>Nenhum post encontrado.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Paginação" className="flex items-center justify-center gap-2">
          <Link
            href={buildPageUrl(basePath, page - 1)}
            aria-disabled={page === 1}
            className={`p-2 rounded-card transition-colors ${page === 1 ? 'pointer-events-none opacity-40' : 'hover:bg-surface-low'}`}
            aria-label="Página anterior"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </Link>

          <span className="text-sm text-on-surface-variant font-mono px-3">
            {page} / {totalPages}
          </span>

          <Link
            href={buildPageUrl(basePath, page + 1)}
            aria-disabled={page === totalPages}
            className={`p-2 rounded-card transition-colors ${page === totalPages ? 'pointer-events-none opacity-40' : 'hover:bg-surface-low'}`}
            aria-label="Próxima página"
          >
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </Link>
        </nav>
      )}
    </div>
  )
}
