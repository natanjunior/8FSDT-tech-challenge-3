import { Post } from '@/types/post'
import { PostCard } from './PostCard'
import { Pagination } from '@/components/ui/Pagination'

interface PostListProps {
  posts: Post[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PostList({ posts, currentPage, totalPages, onPageChange }: PostListProps) {
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
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}
