import { describe, it, expect } from 'vitest'
import { loginSchema } from '../login.schema'

describe('loginSchema', () => {
  it('accepts valid email', () => {
    const result = loginSchema.safeParse({ email: 'joao@escola.com' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    const result = loginSchema.safeParse({ email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects empty email', () => {
    const result = loginSchema.safeParse({ email: '' })
    expect(result.success).toBe(false)
  })
})
