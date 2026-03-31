'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/AuthContext'
import { commentSchema } from '@/lib/schemas/comment.schema'
import type { CommentPayload } from '@/types/comment'
import { Button } from '@/components/ui/Button'

interface CommentFormProps {
  onSubmit: (data: CommentPayload) => void
  isSubmitting: boolean
}

export function CommentForm({ onSubmit, isSubmitting }: CommentFormProps) {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentPayload>({
    resolver: zodResolver(commentSchema),
  })

  function handleValid(data: CommentPayload) {
    // author_name vazio → undefined (não enviar ao backend)
    const payload: CommentPayload = {
      content: data.content,
      author_name: data.author_name?.trim() || undefined,
    }
    onSubmit(payload)
    reset()
  }

  // Suppress unused variable warning — user available for future TEACHER UI
  void user

  return (
    <form onSubmit={handleSubmit(handleValid)} className="flex gap-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-secondary text-xl" aria-hidden="true">
          person
        </span>
      </div>

      <div className="flex-1 space-y-3">
        {/* Campo nome (opcional) */}
        <input
          {...register('author_name')}
          type="text"
          placeholder="Seu nome (opcional)"
          disabled={isSubmitting}
          className="w-full px-4 py-2 rounded-xl bg-surface-container-low text-on-surface text-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary/30 disabled:opacity-50"
        />

        {/* Campo comentário */}
        <div>
          <textarea
            {...register('content')}
            rows={3}
            placeholder="Escreva seu comentário..."
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary/30 resize-none disabled:opacity-50"
          />
          {errors.content && (
            <p className="text-error text-xs mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">error</span>
              {errors.content.message ?? 'Conteúdo é obrigatório'}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <span className="material-symbols-outlined text-sm animate-spin mr-1" aria-hidden="true">
                progress_activity
              </span>
            )}
            Comentar
          </Button>
        </div>
      </div>
    </form>
  )
}
