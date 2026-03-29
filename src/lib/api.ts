import axios from 'axios'

// Token mantido em memória — populado pelo AuthContext após login ou reidratação
let _authToken: string | null = null

export function setAuthToken(token: string | null): void {
  _authToken = token
}

export function getAuthToken(): string | null {
  return _authToken
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3030',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  if (_authToken) {
    config.headers['Authorization'] = `Bearer ${_authToken}`
  }

  // Injeta anonymous ID para endpoints de comentários
  if (typeof window !== 'undefined') {
    const anonymousId = localStorage.getItem('edublog_anonymous_id')
    if (anonymousId) {
      config.headers['X-Anonymous-Id'] = anonymousId
    }
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      setAuthToken(null)
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
