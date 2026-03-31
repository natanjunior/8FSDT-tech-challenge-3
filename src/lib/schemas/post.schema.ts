import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(5, 'Título deve ter entre 5 e 255 caracteres').max(255, 'Título deve ter entre 5 e 255 caracteres'),
  subtitle: z.string().max(300).optional(),
  content: z.string().min(10, 'Conteúdo deve ter no mínimo 10 caracteres'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'], { error: 'Status é obrigatório' }),
  discipline_id: z.string().uuid().optional().or(z.literal('')),
})

export type PostFormData = z.infer<typeof postSchema>
