import Link from 'next/link'
import { Post, PaginatedResponse } from '@/types/post'
import { PostCard } from './PostCard'

interface PostListProps {
  posts: Post[]
  pagination: PaginatedResponse<Post>['pagination']
  basePath: string
  size?: 'default' | 'large'
}

function buildPageUrl(basePath: string, page: number): string {
  const sep = basePath.includes('?') ? '&' : '?'
  return `${basePath}${sep}page=${page}`
}

function getPages(currentPage: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages]
  }
  if (currentPage >= totalPages - 2) {
    return [1, '...', totalPages - 2, totalPages - 1, totalPages]
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}

export function PostList({ posts, pagination, basePath, size = 'default' }: PostListProps) {
  const { page, totalPages } = pagination

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-on-surface-variant">
        <span className="material-symbols-outlined text-4xl block mb-2">article</span>
        <p>Nenhum post encontrado.</p>
      </div>
    )
  }

  const isLarge = size === 'large'
  const gap = isLarge ? 'gap-10' : 'gap-8'
  const navMt = isLarge ? 'mt-20' : 'mt-16'

  return (
    <div className="flex flex-col gap-8">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gap}`}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} size={size} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Paginação" className={`${navMt} flex justify-center items-center space-x-2`}>
          <Link
            href={buildPageUrl(basePath, page - 1)}
            aria-disabled={page === 1}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
              page === 1
                ? 'bg-surface-container text-primary opacity-40 cursor-not-allowed pointer-events-none'
                : 'bg-surface-container hover:bg-surface-container-high text-primary'
            }`}
            aria-label="Página anterior"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </Link>

          {getPages(page, totalPages).map((p, i) =>
            p === '...' ? (
              <span key={`ellipsis-${i}`} className="px-2 text-outline">...</span>
            ) : (
              <Link
                key={p}
                href={buildPageUrl(basePath, p)}
                aria-current={p === page ? 'page' : undefined}
                className={
                  p === page
                    ? 'w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold'
                    : 'w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors'
                }
              >
                {p}
              </Link>
            )
          )}

          <Link
            href={buildPageUrl(basePath, page + 1)}
            aria-disabled={page === totalPages}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
              page === totalPages
                ? 'bg-surface-container text-primary opacity-40 cursor-not-allowed pointer-events-none'
                : 'bg-surface-container hover:bg-surface-container-high text-primary'
            }`}
            aria-label="Próxima página"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </nav>
      )}
    </div>
  )
}
