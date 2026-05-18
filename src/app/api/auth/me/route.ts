// src/app/api/auth/me/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function unauthorized(message: string) {
  const res = NextResponse.json({ error: message }, { status: 401 })
  res.cookies.delete('auth_token')
  res.cookies.delete('auth_user')
  return res
}

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    // Verifica assinatura e extrai o payload — role vem daqui (não do cookie não-assinado)
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string
      role: string
      sessionId?: string
    }

    // Lê campos de exibição do cookie auth_user (não-assinado, apenas display).
    // Se este cookie estiver ausente, corrompido, ou sem name/email válidos,
    // tratamos como sessão inconsistente — força re-login.
    const userBase64 = cookieStore.get('auth_user')?.value
    if (!userBase64) return unauthorized('Missing user cookie')

    let parsed: { name?: unknown; email?: unknown }
    try {
      parsed = JSON.parse(Buffer.from(userBase64, 'base64').toString('utf-8'))
    } catch {
      return unauthorized('Corrupted user cookie')
    }

    if (
      typeof parsed.name !== 'string' || !parsed.name ||
      typeof parsed.email !== 'string' || !parsed.email
    ) {
      return unauthorized('Incomplete user data')
    }

    return NextResponse.json({
      id: jwtPayload.id,
      role: jwtPayload.role, // DO JWT VERIFICADO — não do cookie auth_user
      name: parsed.name,
      email: parsed.email,
      token, // necessário para o AuthContext restaurar setAuthToken após page refresh
    })
  } catch {
    return unauthorized('Invalid token')
  }
}
