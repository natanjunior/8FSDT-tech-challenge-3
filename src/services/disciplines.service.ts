import api from '@/lib/api'
import type { Discipline } from '@/types/post'

export async function getDisciplines(): Promise<Discipline[]> {
  try {
    const res = await api.get<Discipline[]>('/disciplines')
    return res.data
  } catch {
    // If the endpoint doesn't exist or fails, return empty array — PostForm will hide the select
    return []
  }
}
