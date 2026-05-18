/**
 * Maps discipline labels (from API) to URL slugs and seed UUIDs.
 *
 * NOTE: The discipline UUIDs are hardcoded from the API seeds
 * (see docs/frontend-context.md "Disciplinas — IDs fixos nos seeds").
 * This hardcoded map lets Server Components resolve discipline filters
 * without needing to call GET /disciplines (which requires auth and
 * would fail silently for anonymous SSR requests).
 *
 * If the backend ever adds new disciplines, update this map.
 */

const LABEL_TO_SLUG: Record<string, string> = {
  'Matemática': 'matematica',
  'Português': 'portugues',
  'Ciências': 'ciencias',
  'História': 'historia',
  'Geografia': 'geografia',
}

const SLUG_TO_ID: Record<string, string> = {
  matematica: '660e8400-e29b-41d4-a716-446655440001',
  portugues:  '660e8400-e29b-41d4-a716-446655440002',
  ciencias:   '660e8400-e29b-41d4-a716-446655440003',
  historia:   '660e8400-e29b-41d4-a716-446655440004',
  geografia:  '660e8400-e29b-41d4-a716-446655440005',
}

const SLUG_TO_LABEL: Record<string, string> = Object.fromEntries(
  Object.entries(LABEL_TO_SLUG).map(([label, slug]) => [slug, label]),
)

export function getDisciplineSlug(label: string): string | undefined {
  return LABEL_TO_SLUG[label]
}

export function getDisciplineIdBySlug(slug: string): string | undefined {
  return SLUG_TO_ID[slug]
}

export function getDisciplineLabelBySlug(slug: string): string | undefined {
  return SLUG_TO_LABEL[slug]
}
