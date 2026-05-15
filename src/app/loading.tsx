import { PublicLayout } from '@/components/layout/PublicLayout'
import { Skeleton } from '@/components/ui/Skeleton'

function PostCardSkeleton({ size = 'default' }: { size?: 'default' | 'large' }) {
  const isLarge = size === 'large'
  return (
    <article className="bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10">
      <Skeleton className="absolute -top-3 left-6 h-5 w-24" />
      <div className="flex justify-between items-start pt-2 mb-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className={isLarge ? 'h-8 mb-2' : 'h-6 mb-2'} />
      <Skeleton className={isLarge ? 'h-8 w-3/4 mb-6' : 'h-6 w-3/4 mb-3'} />
      <Skeleton className="h-4 mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
        <div className="flex items-center space-x-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-3 w-8" />
          <Skeleton className="h-3 w-8" />
        </div>
      </div>
    </article>
  )
}

export default function HomeLoading() {
  return (
    <PublicLayout noSidebar>
      <section className="mb-12 md:mb-20">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12 space-y-4">
          <Skeleton className="h-12 md:h-16 mx-auto w-3/4" />
          <Skeleton className="h-4 md:h-5 mx-auto w-2/3" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <Skeleton className="h-14 md:h-20 rounded-xl" />
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, i) => <PostCardSkeleton key={i} size="large" />)}
      </div>
    </PublicLayout>
  )
}
