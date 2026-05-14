import { describe, it, expect } from 'vitest'
import { getDisciplineSlug, getDisciplineIdBySlug, getDisciplineLabelBySlug } from '../discipline'

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

describe('getDisciplineIdBySlug', () => {
  it('returns the seed UUID for each known slug', () => {
    expect(getDisciplineIdBySlug('matematica')).toBe('660e8400-e29b-41d4-a716-446655440001')
    expect(getDisciplineIdBySlug('portugues')).toBe('660e8400-e29b-41d4-a716-446655440002')
    expect(getDisciplineIdBySlug('ciencias')).toBe('660e8400-e29b-41d4-a716-446655440003')
    expect(getDisciplineIdBySlug('historia')).toBe('660e8400-e29b-41d4-a716-446655440004')
    expect(getDisciplineIdBySlug('geografia')).toBe('660e8400-e29b-41d4-a716-446655440005')
  })

  it('returns undefined for an unknown slug', () => {
    expect(getDisciplineIdBySlug('inexistente')).toBeUndefined()
  })
})

describe('getDisciplineLabelBySlug', () => {
  it('returns the label for each known slug', () => {
    expect(getDisciplineLabelBySlug('matematica')).toBe('Matemática')
    expect(getDisciplineLabelBySlug('portugues')).toBe('Português')
    expect(getDisciplineLabelBySlug('ciencias')).toBe('Ciências')
    expect(getDisciplineLabelBySlug('historia')).toBe('História')
    expect(getDisciplineLabelBySlug('geografia')).toBe('Geografia')
  })

  it('returns undefined for an unknown slug', () => {
    expect(getDisciplineLabelBySlug('inexistente')).toBeUndefined()
  })
})
