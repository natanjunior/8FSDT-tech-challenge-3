'use client'

import { PageEvent } from './DataTable.types'

interface DataTablePaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  total: number
  onPageChange: (event: PageEvent) => void
}

export function DataTablePagination({
  currentPage,
  totalPages,
  pageSize,
  total,
  onPageChange,
}: DataTablePaginationProps) {
  const pages = buildPageList(currentPage, totalPages)

  return (
    <div className="px-6 py-4 border-t border-surface-container-high flex items-center justify-between gap-4 flex-wrap">
      {/* Left: rows per page + total */}
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
        <span>
          por página · <strong className="text-on-surface">{total}</strong> registros
        </span>
      </div>

      {/* Right: pagination buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange({ page: currentPage - 1, pageSize })}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>

        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-on-surface-variant text-sm">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange({ page: p as number, pageSize })}
              className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                p === currentPage
                  ? 'bg-primary text-white font-bold'
                  : 'bg-surface-container-lowest border border-outline-variant/20 text-primary hover:bg-surface-container-high'
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange({ page: currentPage + 1, pageSize })}
          disabled={currentPage === totalPages || totalPages === 0}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  )
}

function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  const pages: (number | '...')[] = [1]
  if (current > 3) pages.push('...')
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p)
  }
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
}
