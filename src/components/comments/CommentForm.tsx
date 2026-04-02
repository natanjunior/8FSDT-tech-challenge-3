'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/AuthContext'
import { commentSchema } from '@/lib/schemas/comment.schema'
import type { CommentPayload } from '@/types/comment'

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
    defaultValues: {
      author_name: user?.name ?? '',
    },
  })

  function handleValid(data: CommentPayload) {
    const payload: CommentPayload = {
      content: data.content,
      author_name: data.author_name?.trim() || undefined,
    }
    onSubmit(payload)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleValid)} className="flex gap-4 items-start">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>person</span>
      </div>

      {/* Formulário */}
      <div className="flex-1 space-y-3">
        <input
          {...register('author_name')}
          type="text"
          placeholder="Seu nome (deixe em branco para comentar como anônimo)"
          disabled={isSubmitting}
          className="w-full bg-surface-container-low border-none rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-on-surface-variant/60 disabled:opacity-50"
        />

        <textarea
          {...register('content')}
          placeholder="Escreva seu comentário..."
          disabled={isSubmitting}
          className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-on-surface-variant/60 resize-none min-h-[100px] disabled:opacity-50"
        />
        {errors.content && (
          <p className="text-error text-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">error</span>
            {errors.content.message ?? 'Conteúdo é obrigatório'}
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-secondary to-on-secondary-container text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-secondary/20 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">send</span>
            Comentar
          </button>
        </div>
      </div>
    </form>
  )
}
