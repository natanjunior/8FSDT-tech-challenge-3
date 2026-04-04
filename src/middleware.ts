import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const { pathname } = request.nextUrl

  // Só protege rotas /admin/*
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Sem cookie → redirect para login
  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)
    const role = payload.role as string

    // STUDENT tentando acessar admin → redirect para home
    if (role !== 'TEACHER') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  } catch {
    // Token inválido ou expirado → redirect para login
    const loginUrl = new URL('/login', request.url)
    const response = NextResponse.redirect(loginUrl)
    response.cookies.delete('auth_token')
    response.cookies.delete('auth_user')
    return response
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
