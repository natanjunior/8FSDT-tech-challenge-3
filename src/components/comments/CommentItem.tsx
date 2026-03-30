'use client'
import type { Comment } from '@/types/comment'

interface CommentItemProps {
  comment: Comment
  onDelete: (id: string) => void
}

export function CommentItem({ comment, onDelete }: CommentItemProps) {
  return (
    <div className="flex gap-4">
      {/* Avatar — sempre ícone person, nunca iniciais */}
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-secondary text-xl" aria-hidden="true">
          person
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-semibold text-on-surface text-sm">
            {comment.author_name ?? 'Anônimo'}
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-on-surface-variant text-xs font-mono">
              {new Date(comment.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </span>
            {comment.can_delete && (
              <button
                type="button"
                onClick={() => onDelete(comment.id)}
                aria-label="Excluir comentário"
                className="text-on-surface-variant hover:text-error transition-colors"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  delete
                </span>
              </button>
            )}
          </div>
        </div>
        <p className="text-on-surface text-sm mt-1 leading-relaxed break-words">
          {comment.content}
        </p>
      </div>
    </div>
  )
}
