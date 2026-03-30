import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SearchBar } from '@/components/posts/SearchBar'

const { mockPush, mockGet, mockSearchParams } = vi.hoisted(() => {
  const mockGet = vi.fn()
  return {
    mockPush: vi.fn(),
    mockGet,
    mockSearchParams: { get: mockGet },
  }
})

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => mockSearchParams,
}))

describe('SearchBar', () => {
  beforeEach(() => {
    mockPush.mockClear()
    mockGet.mockReturnValue(null)
  })

  it('renders search input', () => {
    render(<SearchBar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText('Buscar posts')).toBeInTheDocument()
  })

  it('navigates to /posts?q=termo on submit', () => {
    render(<SearchBar />)
    const input = screen.getByLabelText('Buscar posts')
    fireEvent.change(input, { target: { value: 'matemática' } })
    fireEvent.submit(screen.getByRole('search'))
    expect(mockPush).toHaveBeenCalledWith('/posts?q=matem%C3%A1tica')
  })

  it('does not navigate when input is empty', () => {
    render(<SearchBar />)
    fireEvent.submit(screen.getByRole('search'))
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('pre-fills input with q param from URL', () => {
    mockGet.mockReturnValue('história')
    render(<SearchBar />)
    expect(screen.getByLabelText('Buscar posts')).toHaveValue('história')
  })
})
