import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

export type LoginFormData = z.infer<typeof loginSchema>
