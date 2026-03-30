import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IconCount } from '../IconCount'

describe('IconCount', () => {
  it('renders comment count', () => {
    render(<IconCount type="comment" count={5} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders bookmark count', () => {
    render(<IconCount type="bookmark" count={42} />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
