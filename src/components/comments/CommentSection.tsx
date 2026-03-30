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
      // Refetch da primeira página após criar comentário
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
      // Refetch da primeira página após deletar
      await loadPage(1)
    } catch {
      setError('Não foi possível excluir o comentário.')
    }
  }

  return (
    <section id="comments" className="mt-12 pt-8 border-t border-surface-low">
      <h2 className="text-xl font-bold text-on-surface mb-6">
        Comentários ({pagination.total})
      </h2>

      <div className="mb-8">
        <CommentForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>

      {error && (
        <p className="text-error text-sm mb-4 flex items-center gap-2">
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
    </section>
  )
}
