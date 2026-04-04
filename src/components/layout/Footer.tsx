// src/components/layout/Footer.tsx

const GITHUB_URL = 'https://github.com/natanjunior/8FSDT-tech-challenge-3'

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-100 w-full border-t border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <div className="font-black text-primary text-lg">8FSDT TC 3</div>
          <p className="text-xs font-light uppercase tracking-widest text-slate-500">© 2026 8FSDT TC 3. Conteúdo educacional para professores e alunos brasileiros.</p>
        </div>
        <div className="flex space-x-8">
          <a href="/grupo" className="text-xs font-light uppercase tracking-widest text-slate-500 hover:text-secondary transition-colors">Grupo</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-light uppercase tracking-widest text-slate-500 hover:text-secondary transition-colors">Documentação</a>
          <a href="/design-system" className="text-xs font-light uppercase tracking-widest text-slate-500 hover:text-secondary transition-colors">Design System</a>
        </div>
      </div>
    </footer>
  )
}
