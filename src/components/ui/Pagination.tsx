// src/components/ui/Pagination.tsx
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  function getPages(): (number | '...')[] {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages]
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors disabled:text-outline disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Página anterior"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {getPages().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-outline">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-colors
              ${page === currentPage
                ? 'bg-primary text-white'
                : 'bg-surface-container-lowest hover:bg-surface-container-high text-primary border border-outline-variant/20'
              }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors disabled:text-outline disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Próxima página"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </nav>
  )
}
