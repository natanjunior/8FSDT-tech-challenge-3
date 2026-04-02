'use client'
import { useState, useEffect, useCallback } from 'react'
import { CommentItem } from './CommentItem'
import { CommentForm } from './CommentForm'
import { Spinner } from '@/components/ui/Spinner'
import { getComments, createComment, deleteComment } from '@/services/comments.service'
import type { Comment, CommentPayload } from '@/types/comment'
import type { PaginatedResponse } from '@/types/post'

interface CommentSectionProps {
  postId: string
  initialCount?: number
}

export function CommentSection({ postId, initialCount = 0 }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: initialCount })
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadPage = useCallback(
    async (page: number, append = false) => {
      try {
        const res: PaginatedResponse<Comment> = await getComments(postId, page, 10)
        setComments((prev) => (append ? [...prev, ...res.data] : res.data))
        setPagination({
          page: res.pagination.page,
          totalPages: res.pagination.totalPages,
          total: res.pagination.total,
        })
      } catch {
        setError('Não foi possível carregar os comentários.')
      }
    },
    [postId],
  )

  useEffect(() => {
    setIsLoading(true)
    loadPage(1).finally(() => setIsLoading(false))
  }, [loadPage])

  async function handleLoadMore() {
    setIsLoadingMore(true)
    await loadPage(pagination.page + 1, true)
    setIsLoadingMore(false)
  }

  async function handleSubmit(data: CommentPayload) {
    setIsSubmitting(true)
    try {
      await createComment(postId, data)
      await loadPage(1)
    } catch {
      setError('Não foi possível enviar o comentário.')
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleDelete(commentId: string) {
    try {
      await deleteComment(postId, commentId)
      await loadPage(1)
    } catch {
      setError('Não foi possível excluir o comentário.')
    }
  }

  return (
    <section className="mt-16">
      <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">

        {/* Card header */}
        <div className="px-6 py-4 bg-surface-container flex items-center border-b border-surface-container-high">
          <h3 className="font-bold text-primary flex items-center gap-2 text-sm">
            <span className="material-symbols-outlined text-primary/60 text-base">forum</span>
            Comentários
          </h3>
          <span className="ml-auto text-xs font-mono text-on-surface-variant">
            {pagination.total} {pagination.total === 1 ? 'comentário' : 'comentários'}
          </span>
        </div>

        <div className="p-6 space-y-6">

          {/* Formulário de novo comentário */}
          <CommentForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />

          {/* Separador */}
          <div className="border-t border-surface-container-high" />

          {/* Lista de comentários */}
          {error && (
            <p className="text-error text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base" aria-hidden="true">error</span>
              {error}
            </p>
          )}

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : (
            <div className="space-y-6">
              {comments.length === 0 ? (
                <p className="text-on-surface-variant text-sm text-center py-8">
                  Nenhum comentário ainda. Seja o primeiro a comentar!
                </p>
              ) : (
                comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} onDelete={handleDelete} />
                ))
              )}

              {pagination.page < pagination.totalPages && (
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="text-secondary font-semibold text-sm hover:underline disabled:opacity-50 flex items-center gap-2"
                  >
                    {isLoadingMore && <Spinner size="sm" />}
                    Carregar mais comentários
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
