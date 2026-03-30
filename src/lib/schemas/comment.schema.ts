import { z } from 'zod'

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, 'Conteúdo é obrigatório')
    .max(1000, 'Comentário deve ter no máximo 1000 caracteres'),
  author_name: z.string().max(100, 'Nome deve ter no máximo 100 caracteres').optional(),
})

export type CommentFormData = z.infer<typeof commentSchema>
