'use client'

import { useState } from 'react'
import { markAsRead } from '@/services/posts.service'

interface MarkAsReadButtonProps {
  postId: string
}

export function MarkAsReadButton({ postId }: MarkAsReadButtonProps) {
  const [hasRead, setHasRead] = useState(false)

  function handleClick() {
    if (hasRead) return
    setHasRead(true)
    // fire-and-forget — markAsRead já trata erros silenciosamente
    void markAsRead(postId)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={hasRead}
      className="flex items-center gap-1.5 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      aria-label={hasRead ? 'Marcado como lido' : 'Marcar como lido'}
    >
      <span className="material-symbols-outlined text-lg">
        {hasRead ? 'bookmark_added' : 'bookmark'}
      </span>
      <span className="text-xs font-medium hidden sm:block">
        {hasRead ? 'Marcado como lido' : 'Marcar como lido'}
      </span>
    </button>
  )
}
