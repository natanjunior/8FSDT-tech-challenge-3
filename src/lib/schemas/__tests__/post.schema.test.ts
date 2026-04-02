import { describe, it, expect } from 'vitest'
import { postSchema } from '../post.schema'

describe('postSchema', () => {
  const valid = {
    title: 'Introdução às Frações',
    content: 'Conteúdo com pelo menos dez caracteres.',
    status: 'DRAFT' as const,
  }

  it('accepts valid post without discipline', () => {
    expect(postSchema.safeParse(valid).success).toBe(true)
  })

  it('accepts valid post with discipline_id', () => {
    const result = postSchema.safeParse({
      ...valid,
      discipline_id: '660e8400-e29b-41d4-a716-446655440001',
    })
    expect(result.success).toBe(true)
  })

  it('rejects title shorter than 5 chars', () => {
    const result = postSchema.safeParse({ ...valid, title: 'abc' })
    expect(result.success).toBe(false)
    expect(result.error?.issues[0].message).toContain('5')
  })

  it('rejects title longer than 255 chars', () => {
    const result = postSchema.safeParse({ ...valid, title: 'a'.repeat(256) })
    expect(result.success).toBe(false)
  })

  it('rejects content shorter than 10 chars', () => {
    const result = postSchema.safeParse({ ...valid, content: 'curto' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid status', () => {
    const result = postSchema.safeParse({ ...valid, status: 'INVALID' })
    expect(result.success).toBe(false)
  })

  it('transforms empty discipline_id to undefined', () => {
    const result = postSchema.safeParse({
      title: 'Tests',
      content: 'Content with enough chars to pass validation',
      status: 'DRAFT',
      discipline_id: '',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.discipline_id).toBeUndefined()
    }
  })

  it('accepts valid UUID for discipline_id', () => {
    const result = postSchema.safeParse({
      title: 'Tests',
      content: 'Content with enough chars to pass validation',
      status: 'DRAFT',
      discipline_id: '123e4567-e89b-12d3-a456-426614174000',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.discipline_id).toBe('123e4567-e89b-12d3-a456-426614174000')
    }
  })

  it('accepts undefined discipline_id', () => {
    const result = postSchema.safeParse({
      title: 'Tests',
      content: 'Content with enough chars to pass validation',
      status: 'DRAFT',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.discipline_id).toBeUndefined()
    }
  })
})
