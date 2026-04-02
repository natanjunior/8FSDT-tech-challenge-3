// src/app/api/auth/me/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

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

    // Lê campos de exibição do cookie auth_user (não-assinado, apenas display)
    const userBase64 = cookieStore.get('auth_user')?.value
    let displayName: string | undefined
    let displayEmail: string | undefined
    if (userBase64) {
      try {
        const parsed = JSON.parse(Buffer.from(userBase64, 'base64').toString('utf-8'))
        displayName = parsed.name
        displayEmail = parsed.email
      } catch {
        // Cookie auth_user malformado — ignorar, usar defaults
      }
    }

    return NextResponse.json({
      id: jwtPayload.id,
      role: jwtPayload.role, // DO JWT VERIFICADO — não do cookie auth_user
      name: displayName,
      email: displayEmail,
    })
  } catch {
    // Token expirado ou inválido — limpar cookies
    const res = NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    res.cookies.delete('auth_token')
    res.cookies.delete('auth_user')
    return res
  }
}
