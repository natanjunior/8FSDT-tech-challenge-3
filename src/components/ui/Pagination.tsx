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
    <nav aria-label="Paginação" className="flex items-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl disabled:opacity-40 hover:bg-surface-container-low transition-colors"
        aria-label="Página anterior"
      >
        <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>

      {getPages().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-on-surface-variant">…</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`w-9 h-9 rounded-xl text-sm font-mono transition-colors
              ${page === currentPage
                ? 'bg-primary text-white font-bold'
                : 'hover:bg-surface-container-low text-on-surface'
              }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl disabled:opacity-40 hover:bg-surface-container-low transition-colors"
        aria-label="Próxima página"
      >
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </nav>
  )
}
