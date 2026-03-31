import { PublicLayout } from '@/components/layout/PublicLayout'

const members = [
  { name: 'Dario Lacerda',  rm: '369195', color: 'bg-blue-100 border-blue-200 text-blue-700',     initials: 'DL', github: '#', linkedin: '#' },
  { name: 'Larissa Kramer', rm: '370062', color: 'bg-rose-100 border-rose-200 text-rose-700',       initials: 'LK', github: '#', linkedin: '#' },
  { name: 'Mirian Storino', rm: '369489', color: 'bg-violet-100 border-violet-200 text-violet-700', initials: 'MS', github: '#', linkedin: '#' },
  { name: 'Natanael Dias',  rm: '369334', color: 'bg-amber-100 border-amber-200 text-amber-700',   initials: 'ND', github: '#', linkedin: '#' },
  { name: 'Tiago Victor',   rm: '370117', color: 'bg-emerald-100 border-emerald-200 text-emerald-700', initials: 'TV', github: '#', linkedin: '#' },
] as const

export default function GrupoPage() {
  return (
    <PublicLayout activeSection="grupo">
      {/* Cabeçalho da página */}
      <header className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">PosTech · 8FSDT</span>
          <span className="text-xs font-mono text-on-surface-variant">Tech Challenge Fase 3</span>
        </div>
        <h1 className="text-5xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-4">
          Grupo 28
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
          Turma 8FSDT — FIAP PosTech. Cinco profissionais desenvolvendo a plataforma educacional de gerenciamento de conteúdo para professores e alunos.
        </p>
      </header>

      {/* Grid de membros */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.rm}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${member.color} border-2 flex items-center justify-center font-black text-lg shrink-0`}>
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-primary leading-tight">{member.name}</p>
                  <p className="text-xs font-mono text-on-surface-variant mt-0.5">RM {member.rm}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/10">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  )
}
