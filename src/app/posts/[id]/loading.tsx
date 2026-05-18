import { PublicLayout } from '@/components/layout/PublicLayout'
import { Skeleton } from '@/components/ui/Skeleton'

export default function PostDetailLoading() {
  return (
    <PublicLayout>
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-20" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-4 w-10" />
            </div>
            <Skeleton className="h-4 w-32 ml-auto" />
          </div>
          <Skeleton className="h-12 mb-3" />
          <Skeleton className="h-12 w-2/3 mb-8" />
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low">
            <Skeleton className="w-14 h-14 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-32" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="h-9 w-28" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </header>
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? 'w-2/3' : ''}`} />
          ))}
        </div>
        <section className="mt-16">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
            <div className="px-6 py-4 bg-surface-container flex items-center border-b border-surface-container-high">
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="p-6 space-y-4">
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </div>
        </section>
      </article>
    </PublicLayout>
  )
}
