// src/app/api/auth/me/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  const userBase64 = cookieStore.get('auth_user')?.value

  if (!token || !userBase64) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    // Verifica que o token ainda é válido (não expirado, assinatura correta)
    jwt.verify(token, process.env.JWT_SECRET!)

    const user = JSON.parse(Buffer.from(userBase64, 'base64').toString('utf-8'))
    return NextResponse.json({ user, token })
  } catch {
    // Token expirado ou inválido — limpar cookies
    const res = NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    res.cookies.delete('auth_token')
    res.cookies.delete('auth_user')
    return res
  }
}
