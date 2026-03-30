import { ReactNode } from 'react'

export interface DataTableColumn<T> {
  key: keyof T | string
  label: string
  sortKey?: string
  mergedWith?: string
  mergedInto?: string
  cell?: (row: T) => ReactNode
  align?: 'left' | 'center' | 'right'
}

export interface SortEvent {
  sortKey: string
  dir: 'asc' | 'desc'
}

export interface PageEvent {
  page: number
  pageSize: number
}

export interface DataTableProps<T> {
  title: string
  columns: DataTableColumn<T>[]
  rows: T[]
  total: number
  defaultSort?: SortEvent
  defaultPageSize?: number
  filterSlot?: ReactNode
  emptySlot?: ReactNode
  headerActions?: ReactNode
  onSortChange?: (event: SortEvent | null) => void
  onPageChange?: (event: PageEvent) => void
}
