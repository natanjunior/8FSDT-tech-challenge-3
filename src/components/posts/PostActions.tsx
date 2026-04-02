'use client'

import { useState } from 'react'
import { markAsRead } from '@/services/posts.service'

interface PostActionsProps {
  postId: string
  readsCount: number
}

export function PostActions({ postId, readsCount }: PostActionsProps) {
  const [reads, setReads] = useState(readsCount)
  const [hasRead, setHasRead] = useState(false)

  async function handleMarkRead() {
    if (hasRead) return
    setHasRead(true)
    setReads((prev) => prev + 1)
    await markAsRead(postId)
  }

  return (
    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-surface-container-low">
      <button
        type="button"
        onClick={handleMarkRead}
        disabled={hasRead}
        className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={hasRead ? 'Marcado como lido' : 'Marcar como lido'}
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          {hasRead ? 'check_circle' : 'radio_button_unchecked'}
        </span>
        {hasRead ? 'Lido' : 'Marcar como lido'}
      </button>
      {reads > 0 && (
        <span className="text-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-base" aria-hidden="true">visibility</span>
          {reads} {reads === 1 ? 'leitura' : 'leituras'}
        </span>
      )}
    </div>
  )
}
