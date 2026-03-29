import { z } from 'zod'

export const postSchema = z.object({
  title: z
    .string()
    .min(5, 'Título deve ter pelo menos 5 caracteres')
    .max(255, 'Título deve ter no máximo 255 caracteres'),
  content: z.string().min(10, 'Conteúdo deve ter pelo menos 10 caracteres'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  discipline_id: z
    .string()
    .uuid('ID de disciplina inválido')
    .optional()
    .or(z.literal(''))
    .transform((v) => v || undefined),
})

export type PostFormData = z.infer<typeof postSchema>
