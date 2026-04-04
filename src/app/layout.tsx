import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '8FSDT TC 3',
  description: 'Plataforma de blogging educacional — PosTech Fase 3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">

      <body className={`${inter.className} bg-surface text-on-surface antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
