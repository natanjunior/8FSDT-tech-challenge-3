'use client'

import { DataTableColumn, SortEvent } from './DataTable.types'

interface DataTableHeaderProps<T> {
  columns: DataTableColumn<T>[]
  sortState: SortEvent | null
  onSort: (sortKey: string) => void
}

export function DataTableHeader<T>({ columns, sortState, onSort }: DataTableHeaderProps<T>) {
  return (
    <thead>
      <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
        {columns.map((col, i) => {
          const isSortable = !!col.sortKey
          const isActive = sortState?.sortKey === col.sortKey
          const isGhost = col.mergedInto !== undefined
          const prevCol = i > 0 ? columns[i - 1] : undefined
          const isGhostWithPipe = isGhost && prevCol?.mergedInto === undefined

          return (
            <th
              key={String(col.key)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant
                ${isSortable ? 'cursor-pointer select-none transition-colors' : ''}
                ${isGhost ? 'pl-0 pr-6' : ''}
                ${col.align === 'center' ? 'text-center' : ''}
                ${col.align === 'right' ? 'text-right' : ''}
              `}
              onClick={isSortable ? () => onSort(col.sortKey!) : undefined}
            >
              <span className={`flex items-center gap-1${col.align === 'center' ? ' justify-center' : col.align === 'right' ? ' justify-end' : ''}`}>
                {isGhostWithPipe && (
                  <span className="text-outline-variant font-light mr-0.5">|</span>
                )}
                {col.label}
                {isSortable && (
                  <span
                    className={`sort-arrow material-symbols-outlined text-outline-variant transition-opacity${isActive ? '' : ' opacity-0'}`}
                    style={{ fontSize: 14 }}
                  >
                    {isActive && sortState?.dir === 'desc' ? 'arrow_downward' : 'arrow_upward'}
                  </span>
                )}
              </span>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
