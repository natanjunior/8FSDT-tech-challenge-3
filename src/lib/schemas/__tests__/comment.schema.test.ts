import { describe, it, expect } from 'vitest'
import { commentSchema } from '../comment.schema'

describe('commentSchema', () => {
  it('accepts content with optional author_name', () => {
    const result = commentSchema.safeParse({
      content: 'Ótimo post!',
      author_name: 'Pedro',
    })
    expect(result.success).toBe(true)
  })

  it('accepts content without author_name', () => {
    const result = commentSchema.safeParse({ content: 'Ótimo!' })
    expect(result.success).toBe(true)
  })

  it('rejects empty content', () => {
    const result = commentSchema.safeParse({ content: '' })
    expect(result.success).toBe(false)
  })

  it('rejects content over 1000 chars', () => {
    const result = commentSchema.safeParse({ content: 'a'.repeat(1001) })
    expect(result.success).toBe(false)
  })

  it('rejects author_name over 100 chars', () => {
    const result = commentSchema.safeParse({
      content: 'ok',
      author_name: 'a'.repeat(101),
    })
    expect(result.success).toBe(false)
  })
})
