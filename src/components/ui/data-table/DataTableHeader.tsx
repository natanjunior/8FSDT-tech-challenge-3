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
      <tr className="border-b border-surface-container-low">
        {columns.map((col, i) => {
          const isSortable = !!col.sortKey
          const isActive = sortState?.sortKey === col.sortKey
          const nextToCol = columns[i + 1]
          const hasPipe = col.mergedInto === undefined && nextToCol?.mergedInto !== undefined

          return (
            <th
              key={String(col.key)}
              className={`px-4 py-3 text-left text-xs font-semibold text-on-surface-variant
                ${isSortable ? 'cursor-pointer hover:text-secondary select-none' : ''}
                ${col.align === 'center' ? 'text-center' : ''}
                ${col.align === 'right' ? 'text-right' : ''}
              `}
              onClick={isSortable ? () => onSort(col.sortKey!) : undefined}
            >
              <span className="flex items-center gap-1">
                {col.label}
                {hasPipe && (
                  <span className="text-on-surface-variant/40 font-light mx-1">|</span>
                )}
                {isSortable && (
                  <span
                    className={`material-symbols-outlined text-xs transition-opacity
                      ${isActive ? 'opacity-100 text-on-surface-variant' : 'opacity-0 group-hover:opacity-100'}`}
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
