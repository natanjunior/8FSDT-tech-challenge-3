'use client'

import { useState, ReactNode } from 'react'
import { DataTableProps, SortEvent, PageEvent } from './DataTable.types'
import { DataTableHeader } from './DataTableHeader'
import { DataTablePagination } from './DataTablePagination'

function DefaultEmptyState() {
  return (
    <div className="px-6 py-16 flex flex-col items-center gap-3 text-center">
      <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 40 }}>inbox</span>
      <p className="text-sm text-on-surface-variant">Nenhum resultado encontrado.</p>
    </div>
  )
}

export function DataTable<T extends object>({
  title,
  columns,
  rows,
  total,
  defaultSort,
  defaultPageSize = 10,
  filterSlot,
  emptySlot,
  headerActions,
  onSortChange,
  onPageChange,
}: DataTableProps<T>) {
  const [sortState, setSortState] = useState<SortEvent | null>(defaultSort ?? null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [filterOpen, setFilterOpen] = useState(false)

  const totalPages = Math.ceil(total / pageSize)

  function handleSort(sortKey: string) {
    let next: SortEvent | null
    if (!sortState || sortState.sortKey !== sortKey) {
      next = { sortKey, dir: 'asc' }
    } else if (sortState.dir === 'asc') {
      next = { sortKey, dir: 'desc' }
    } else {
      next = null
    }
    setSortState(next)
    setCurrentPage(1)
    onSortChange?.(next)
    onPageChange?.({ page: 1, pageSize })
  }

  function handlePageChange(event: PageEvent) {
    setCurrentPage(event.page)
    setPageSize(event.pageSize)
    onPageChange?.(event)
  }

  // Colunas visíveis no body (remove colunas fantasmas — mergedInto)
  const bodyColumns = columns.filter((col) => !col.mergedInto)

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
      {/* Card header */}
      <div className="px-6 py-4 bg-surface-container flex items-center gap-2 border-b border-surface-container-high">
        <h3 className="font-bold text-primary text-sm flex-1">{title}</h3>
        {headerActions}
        {filterSlot && (
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors"
            aria-label="Filtros"
          >
            <span className="material-symbols-outlined text-base">filter_list</span>
          </button>
        )}
        <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" aria-label="Mais opções">
          <span className="material-symbols-outlined text-base">more_vert</span>
        </button>
      </div>

      {/* Filter slot */}
      {filterSlot && filterOpen && (
        <div className="px-6 py-4 bg-surface-container-low/60 border-b border-surface-container-high flex flex-wrap gap-3">
          {filterSlot}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <DataTableHeader columns={columns} sortState={sortState} onSort={handleSort} />
          <tbody className="divide-y divide-surface-container-low">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={bodyColumns.length}>
                  {emptySlot ?? <DefaultEmptyState />}
                </td>
              </tr>
            ) : (
              rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="group hover:bg-surface-container-low/30 transition-colors"
                >
                  {bodyColumns.map((col) => {
                    const colspan = col.mergedWith ? 2 : 1
                    const value = col.cell
                      ? col.cell(row)
                      : String((row as Record<string, unknown>)[col.key as string] ?? '')  // eslint-disable-line @typescript-eslint/no-explicit-any
                    return (
                      <td
                        key={String(col.key)}
                        colSpan={colspan}
                        className={`px-6 py-4
                          ${col.align === 'center' ? 'text-center' : ''}
                          ${col.align === 'right' ? 'text-right' : ''}
                        `}
                      >
                        {value as ReactNode}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <DataTablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        total={total}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
