import { PublicLayout } from '@/components/layout/PublicLayout'

const members = [
  { name: 'Dario Lacerda',   rm: '369195', color: 'bg-blue-500',    initials: 'DL', github: '#', linkedin: '#' },
  { name: 'Larissa Kramer',  rm: '370062', color: 'bg-rose-500',    initials: 'LK', github: '#', linkedin: '#' },
  { name: 'Mirian Storino',  rm: '369489', color: 'bg-violet-500',  initials: 'MS', github: '#', linkedin: '#' },
  { name: 'Natanael Dias',   rm: '369334', color: 'bg-amber-500',   initials: 'ND', github: '#', linkedin: '#' },
  { name: 'Tiago Victor',    rm: '370117', color: 'bg-emerald-500', initials: 'TV', github: '#', linkedin: '#' },
] as const

export default function GrupoPage() {
  return (
    <PublicLayout activeSection="grupo">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-primary tracking-tight mb-3">Grupo 28</h1>
        <p className="text-on-surface-variant text-lg">
          Equipe responsável pelo desenvolvimento do EduBlog — Tech Challenge Fase 3 · PosTech FIAP
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.rm}
            className="bg-surface-lowest rounded-card shadow-xl shadow-sky-950/5 p-6 flex flex-col items-center text-center gap-4"
          >
            {/* Avatar com iniciais */}
            <div
              className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center text-white text-xl font-black`}
            >
              {member.initials}
            </div>

            <div>
              <h2 className="font-bold text-on-surface text-lg">{member.name}</h2>
              <p className="text-on-surface-variant text-sm font-mono">RM {member.rm}</p>
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${member.name}`}
                className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold"
              >
                LinkedIn
              </a>
              <span className="text-on-surface-variant">·</span>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub de ${member.name}`}
                className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </PublicLayout>
  )
}
