import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from '../SearchBar'

describe('SearchBar', () => {
  it('renders search input', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('calls onSearch with input value on form submit', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)
    await userEvent.type(screen.getByRole('searchbox'), 'frações')
    await userEvent.keyboard('{Enter}')
    expect(onSearch).toHaveBeenCalledWith('frações')
  })

  it('renders with initial value when defaultValue is provided', () => {
    render(<SearchBar onSearch={vi.fn()} defaultValue="matemática" />)
    expect(screen.getByRole('searchbox')).toHaveValue('matemática')
  })
})
