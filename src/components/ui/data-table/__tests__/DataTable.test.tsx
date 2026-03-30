import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable } from '../DataTable'
import { DataTableColumn } from '../DataTable.types'

interface Row { id: string; name: string; value: number }

const columns: DataTableColumn<Row>[] = [
  { key: 'name', label: 'Nome', sortKey: 'name' },
  { key: 'value', label: 'Valor', sortKey: 'value', align: 'right' },
]

const rows: Row[] = [
  { id: '1', name: 'Alpha', value: 10 },
  { id: '2', name: 'Beta', value: 20 },
]

describe('DataTable', () => {
  it('renders column headers', () => {
    render(<DataTable title="Test" columns={columns} rows={rows} total={2} />)
    expect(screen.getByText('Nome')).toBeInTheDocument()
    expect(screen.getByText('Valor')).toBeInTheDocument()
  })

  it('renders row data', () => {
    render(<DataTable title="Test" columns={columns} rows={rows} total={2} />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
  })

  it('shows empty slot when rows is empty', () => {
    render(
      <DataTable
        title="Test"
        columns={columns}
        rows={[]}
        total={0}
        emptySlot={<span>Nenhum item</span>}
      />
    )
    expect(screen.getByText('Nenhum item')).toBeInTheDocument()
  })

  it('calls onSortChange when sortable header is clicked', async () => {
    const onSortChange = vi.fn()
    render(
      <DataTable
        title="Test"
        columns={columns}
        rows={rows}
        total={2}
        onSortChange={onSortChange}
      />
    )
    await userEvent.click(screen.getByText('Nome'))
    expect(onSortChange).toHaveBeenCalledWith({ sortKey: 'name', dir: 'asc' })
  })

  it('cycles sort: asc → desc → null', async () => {
    const onSortChange = vi.fn()
    render(
      <DataTable title="Test" columns={columns} rows={rows} total={2} onSortChange={onSortChange} />
    )
    const nameHeader = screen.getByText('Nome')
    await userEvent.click(nameHeader) // asc
    await userEvent.click(nameHeader) // desc
    await userEvent.click(nameHeader) // null
    expect(onSortChange).toHaveBeenNthCalledWith(1, { sortKey: 'name', dir: 'asc' })
    expect(onSortChange).toHaveBeenNthCalledWith(2, { sortKey: 'name', dir: 'desc' })
    expect(onSortChange).toHaveBeenNthCalledWith(3, null)
  })

  it('does not render filter icon when filterSlot is not provided', () => {
    render(<DataTable title="Test" columns={columns} rows={rows} total={2} />)
    expect(screen.queryByText('filter_list')).not.toBeInTheDocument()
  })
})
