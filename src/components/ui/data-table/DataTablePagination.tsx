'use client'

import { PageEvent } from './DataTable.types'

interface DataTablePaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  total: number
  onPageChange: (event: PageEvent) => void
}

function getPages(currentPage: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
  if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages]
  if (currentPage >= totalPages - 2) {
    return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}

export function DataTablePagination({
  currentPage,
  totalPages,
  pageSize,
  total,
  onPageChange,
}: DataTablePaginationProps) {
  const pages = getPages(currentPage, totalPages)

  return (
    <div className="px-6 py-4 border-t border-surface-container-high flex items-center justify-between gap-4 flex-wrap">
      {/* pageSize select */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
        <span>Exibir</span>
        <select
          value={pageSize}
          onChange={(e) => onPageChange({ page: 1, pageSize: Number(e.target.value) })}
          className="bg-surface-container-low border-none rounded-xl px-3 py-1.5 text-sm font-medium text-on-surface focus:ring-2 focus:ring-primary/20 outline-none"
        >
          {[10, 25, 50].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>por página · <strong className="text-on-surface">{total}</strong> registros</span>
      </div>

      {/* Page buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange({ page: currentPage - 1, pageSize })}
          disabled={currentPage === 1}
          className={`w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary${currentPage === 1 ? ' opacity-40 cursor-not-allowed' : ''}`}
          aria-label="Página anterior"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>

        {pages.map((page, i) =>
          page === '...' ? (
            <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center">…</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange({ page: page as number, pageSize })}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold text-sm transition-colors${
                page === currentPage
                  ? ' bg-primary text-white'
                  : ' bg-surface-container-lowest hover:bg-surface-container-high border border-outline-variant/20 text-primary'
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange({ page: currentPage + 1, pageSize })}
          disabled={currentPage === totalPages}
          className={`w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary${currentPage === totalPages ? ' opacity-40 cursor-not-allowed' : ''}`}
          aria-label="Próxima página"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  )
}
