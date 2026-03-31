// src/components/layout/Footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-100 border-t border-outline-variant/10 text-xs font-light uppercase tracking-widest">
      <div className="px-8 py-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-2">
          <span className="font-black text-primary">8FSDT TC 3</span>
          <p className="text-slate-500">© 2026 8FSDT TC 3. Conteúdo educacional para professores e alunos brasileiros.</p>
        </div>
        <div className="flex gap-8">
          <Link href="/grupo" className="text-slate-500 hover:text-secondary transition-colors">Grupo</Link>
          <Link href="/design-system" className="text-slate-500 hover:text-secondary transition-colors">Documentação</Link>
        </div>
      </div>
    </footer>
  )
}
