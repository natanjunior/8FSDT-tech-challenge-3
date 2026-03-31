'use client'

import { Pagination } from '../Pagination'
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
  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, total)

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-surface-container-low">
      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
        <span>Linhas por página:</span>
        <select
          value={pageSize}
          onChange={(e) => onPageChange({ page: 1, pageSize: Number(e.target.value) })}
          className="bg-surface-container-low rounded px-2 py-1"
        >
          {[10, 25, 50].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>
          {start}–{end} de {total}
        </span>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => onPageChange({ page, pageSize })}
      />
    </div>
  )
}
