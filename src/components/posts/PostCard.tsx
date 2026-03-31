import Link from 'next/link'
import { Post } from '@/types/post'
import { DisciplineBadge } from '@/components/ui/Badge'
import { AuthorId } from '@/components/ui/AuthorId'
import { IconCount } from '@/components/ui/IconCount'

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function getExcerpt(content: string, maxLength = 120): string {
  const text = content.replace(/<[^>]*>/g, '')
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <article className="bg-surface-container-lowest rounded-xl p-5 shadow-xl shadow-sky-950/5 transition-shadow hover:shadow-2xl h-full flex flex-col">
        {/* Discipline badge */}
        <div className="mb-3">
          <DisciplineBadge disciplineSlug={post.discipline?.slug} />
        </div>

        {/* Title */}
        <h2 className="font-black text-primary text-base leading-snug line-clamp-2 group-hover:text-secondary transition-colors mb-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-on-surface-variant text-sm line-clamp-3 flex-1 mb-4">
          {getExcerpt(post.content)}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <AuthorId name={post.author.name} size="mini" />
          <div className="flex items-center gap-3">
            <IconCount type="comment" count={post.comments_count} size="sm" />
            <IconCount type="bookmark" count={post.reads_count} size="sm" />
            <span className="text-xs text-on-surface-variant font-mono">
              {formatDate(post.published_at ?? post.created_at)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
