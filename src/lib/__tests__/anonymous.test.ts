import { describe, it, expect, beforeEach } from 'vitest'
import { getAnonymousId } from '../anonymous'

describe('getAnonymousId', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('generates a UUID on first call', () => {
    const id = getAnonymousId()
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  })

  it('returns the same UUID on subsequent calls', () => {
    const first = getAnonymousId()
    const second = getAnonymousId()
    expect(first).toBe(second)
  })

  it('persists UUID in localStorage', () => {
    const id = getAnonymousId()
    expect(localStorage.getItem('edublog_anonymous_id')).toBe(id)
  })

  it('reuses UUID already in localStorage', () => {
    const existing = '123e4567-e89b-12d3-a456-426614174000'
    localStorage.setItem('edublog_anonymous_id', existing)
    expect(getAnonymousId()).toBe(existing)
  })
})
