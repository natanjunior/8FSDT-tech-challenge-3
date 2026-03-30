// src/app/api/auth/set-cookie/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const { token, user } = await request.json()

  if (!token || !user) {
    return NextResponse.json({ error: 'token and user are required' }, { status: 400 })
  }

  const cookieStore = await cookies()
  const maxAge = 60 * 60 * 24 // 24 horas

  // Cookie httpOnly — inacessível ao JS, lido pelo middleware
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge,
    path: '/',
  })

  // Cookie regular — lido pelo /api/auth/me para reidratação
  cookieStore.set('auth_user', Buffer.from(JSON.stringify(user)).toString('base64'), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge,
    path: '/',
  })

  return NextResponse.json({ ok: true })
}
