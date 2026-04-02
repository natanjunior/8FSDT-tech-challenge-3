import { describe, it, expect } from 'vitest'
import { getDisciplineSlug } from '../discipline'

describe('getDisciplineSlug', () => {
  it('returns correct slug for Matemática', () => {
    expect(getDisciplineSlug('Matemática')).toBe('matematica')
  })

  it('returns correct slug for Português', () => {
    expect(getDisciplineSlug('Português')).toBe('portugues')
  })

  it('returns correct slug for Ciências', () => {
    expect(getDisciplineSlug('Ciências')).toBe('ciencias')
  })

  it('returns correct slug for História', () => {
    expect(getDisciplineSlug('História')).toBe('historia')
  })

  it('returns correct slug for Geografia', () => {
    expect(getDisciplineSlug('Geografia')).toBe('geografia')
  })

  it('returns undefined for unknown label', () => {
    expect(getDisciplineSlug('Desconhecida')).toBeUndefined()
  })
})
