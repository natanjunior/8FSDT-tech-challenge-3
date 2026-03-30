import api from '@/lib/api'
import { User } from '@/types/user'

export interface LoginResponse {
  user: User
  token: string
}

export async function loginRequest(email: string): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/auth/login', { email })
  return data
}

export async function logoutRequest(): Promise<void> {
  await api.post('/auth/logout')
}
