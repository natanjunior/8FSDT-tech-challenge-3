export type UserRole = 'TEACHER' | 'STUDENT'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}
