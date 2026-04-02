/**
 * Maps a discipline label (from API) to its URL slug.
 * The API returns { id, label } — no slug field.
 * This utility derives the slug from the label for use in URLs and filtering.
 */
const LABEL_TO_SLUG: Record<string, string> = {
  'Matemática': 'matematica',
  'Português': 'portugues',
  'Ciências': 'ciencias',
  'História': 'historia',
  'Geografia': 'geografia',
}

/**
 * Returns the URL slug for a discipline label.
 * Returns undefined if the label is not recognized.
 */
export function getDisciplineSlug(label: string): string | undefined {
  return LABEL_TO_SLUG[label]
}
