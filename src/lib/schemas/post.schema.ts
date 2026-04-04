import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(5, 'Título deve ter entre 5 e 255 caracteres').max(255, 'Título deve ter entre 5 e 255 caracteres'),
  content: z.string().min(10, 'Conteúdo deve ter no mínimo 10 caracteres'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'], { error: 'Status é obrigatório' }),
  discipline_id: z
    .string()
    .optional()
    .transform((v) => (v === '' || v === undefined ? undefined : v)),
})

export type PostFormInput = z.input<typeof postSchema>
export type PostFormData = z.output<typeof postSchema>
