// src/components/ui/Pagination.tsx
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  function getPages(): (number | '...')[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages]
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  return (
    <div className="flex gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Página anterior"
      >
        <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>

      {getPages().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="w-7 h-7 flex items-center justify-center">…</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors
              ${page === currentPage
                ? 'bg-primary text-white'
                : 'hover:bg-surface-container-high'
              }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Próxima página"
      >
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </div>
  )
}
