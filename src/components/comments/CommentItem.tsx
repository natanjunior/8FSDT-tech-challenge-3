'use client'
import type { Comment } from '@/types/comment'

interface CommentItemProps {
  comment: Comment
  onDelete: (id: string) => void
}

const COLORS = [
  'bg-violet-100 border-violet-200 text-violet-700',
  'bg-amber-100 border-amber-200 text-amber-700',
  'bg-blue-100 border-blue-200 text-blue-700',
  'bg-rose-100 border-rose-200 text-rose-700',
  'bg-teal-100 border-teal-200 text-teal-700',
]

function getColorByName(name: string): string {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return COLORS[hash % COLORS.length]
}

function formatCommentDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
    ' às ' +
    d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

export function CommentItem({ comment, onDelete }: CommentItemProps) {
  const isAnonymous = !comment.author_name

  const avatarClass = isAnonymous
    ? 'bg-slate-100 border-slate-200 text-slate-400'
    : getColorByName(comment.author_name!)

  return (
    <div className="flex gap-4 items-start">
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-full ${avatarClass} border-2 flex items-center justify-center shrink-0`}>
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>person</span>
      </div>

      <div className="flex-1">
        <p className={`text-sm font-bold ${isAnonymous ? 'text-on-surface-variant' : 'text-primary'}`}>
          {comment.author_name ?? 'Anônimo'}
        </p>
        <p className="text-sm text-on-surface leading-relaxed mt-1">{comment.content}</p>
        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-on-surface-variant">
              {formatCommentDate(comment.created_at)}
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
      </div>
    </div>
  )
}
