export default function PostCardPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Post Card</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Componente de listagem de posts. Aparece na home pública em grid 3 colunas. Todos os cards têm altura igual dentro da linha (flex + mt-auto no rodapé).</p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Grid com variantes lado a lado */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variantes em grid (contexto real)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

            {/* Card 1: Normal — título e conteúdo curtos */}
            <div className="space-y-2">
              <article className="group bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10" style={{ boxShadow: '0 32px 64px -12px rgba(17, 28, 45, 0.06)' }}>
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Matemática</span>
                </div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20">PUBLICADO</span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">24 out. 2023 · 14h30</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary leading-tight mb-3 line-clamp-3 group-hover:text-secondary transition-colors cursor-pointer">
                  Introdução às Frações Decimais
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6 line-clamp-3">
                  Nesta aula vamos explorar o conceito de frações decimais, entendendo a relação entre numerador e denominador.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 border-2 border-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
                    <div>
                      <p className="text-sm font-bold text-primary">Dr. Ricardo Silva</p>
                      <p className="text-[10px] text-outline">Matemática</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>forum</span>
                      3
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>bookmark</span>
                      48
                    </span>
                  </div>
                </div>
              </article>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">normal</p>
            </div>

            {/* Card 2: Título longo — line-clamp-3 ativo */}
            <div className="space-y-2">
              <article className="group bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10" style={{ boxShadow: '0 32px 64px -12px rgba(17, 28, 45, 0.06)' }}>
                <div className="absolute -top-3 left-6">
                  <span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Português</span>
                </div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20">PUBLICADO</span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">02 nov. 2023 · 09h00</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary leading-tight mb-3 line-clamp-3 group-hover:text-secondary transition-colors cursor-pointer">
                  O Modernismo Brasileiro através da arte urbana local: grafite, lambe-lambe e intervenções poéticas nas periferias de São Paulo
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6 line-clamp-3">
                  Como grafites e intervenções urbanas contemporâneas dialogam com os princípios da Semana de Arte Moderna de 1922.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 border-2 border-rose-200 rounded-full flex items-center justify-center text-rose-700 text-xs font-black shrink-0">ES</div>
                    <div>
                      <p className="text-sm font-bold text-primary">Profa. Elena Souza</p>
                      <p className="text-[10px] text-outline">Língua Portuguesa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>forum</span>
                      3
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>bookmark</span>
                      48
                    </span>
                  </div>
                </div>
              </article>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">título longo — line-clamp-3 ativo</p>
            </div>

            {/* Card 3: Conteúdo longo — line-clamp-3 ativo */}
            <div className="space-y-2">
              <article className="group bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10" style={{ boxShadow: '0 32px 64px -12px rgba(17, 28, 45, 0.06)' }}>
                <div className="absolute -top-3 left-6">
                  <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Ciências</span>
                </div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20">PUBLICADO</span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">15 nov. 2023 · 11h15</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary leading-tight mb-3 line-clamp-3 group-hover:text-secondary transition-colors cursor-pointer">
                  Horta Escolar: Laboratório vivo para o ensino fundamental
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6 line-clamp-3">
                  Como montar e explorar uma horta coletiva para ensinar fotossíntese, ciclos da natureza e sustentabilidade. O projeto pode ser adaptado para espaços pequenos, vasos e até janelas de sala de aula, tornando o aprendizado prático e acessível para qualquer escola da rede pública.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 border-2 border-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-black shrink-0">MV</div>
                    <div>
                      <p className="text-sm font-bold text-primary">Dr. Marcos Viana</p>
                      <p className="text-[10px] text-outline">Ciências Naturais</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>forum</span>
                      3
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>bookmark</span>
                      48
                    </span>
                  </div>
                </div>
              </article>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">conteúdo longo — line-clamp-3 ativo</p>
            </div>

            {/* Card 4: Sem disciplina (null) */}
            <div className="space-y-2">
              <article className="group bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10" style={{ boxShadow: '0 32px 64px -12px rgba(17, 28, 45, 0.06)' }}>
                <div className="absolute -top-3 left-6">
                  <span className="bg-slate-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Sem disciplina</span>
                </div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20">PUBLICADO</span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">01 dez. 2023 · 08h00</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary leading-tight mb-3 line-clamp-3 group-hover:text-secondary transition-colors cursor-pointer">
                  Metodologias ativas no ensino básico
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6 line-clamp-3">
                  Uma visão geral sobre como as metodologias ativas podem transformar a relação entre professores e alunos dentro e fora da sala de aula.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-600 text-xs font-black shrink-0">JS</div>
                    <div>
                      <p className="text-sm font-bold text-primary">Prof. João Santos</p>
                      <p className="text-[10px] text-outline">Sem disciplina</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>forum</span>
                      3
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>bookmark</span>
                      48
                    </span>
                  </div>
                </div>
              </article>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">discipline = null</p>
            </div>

            {/* Card 5: Hover state simulado */}
            <div className="space-y-2">
              <article className="bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col h-full relative border border-outline-variant/10" style={{ boxShadow: '0 32px 64px -12px rgba(17, 28, 45, 0.06)' }}>
                <div className="absolute -top-3 left-6">
                  <span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">História</span>
                </div>
                <div className="flex justify-between items-start mb-4 pt-2">
                  <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20">PUBLICADO</span>
                  <span className="font-mono text-[10px] text-outline uppercase tracking-tighter">01 dez. 2023 · 16h45</span>
                </div>
                <h3 className="text-xl font-extrabold leading-tight mb-3 line-clamp-3 cursor-pointer text-secondary">
                  Acervos Invisíveis: O papel das mulheres na Independência do Brasil
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6 line-clamp-3">
                  Recuperando as histórias de Maria Quitéria e outras personagens apagadas das narrativas históricas tradicionais.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 border-2 border-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-black shrink-0">MM</div>
                    <div>
                      <p className="text-sm font-bold text-primary">Profa. Maria Mendes</p>
                      <p className="text-[10px] text-outline">História</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-secondary">
                      <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>forum</span>
                      3
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-secondary">
                      <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>bookmark</span>
                      48
                    </span>
                  </div>
                </div>
              </article>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">hover state (título em secondary, bookmark ativo)</p>
            </div>

          </div>
        </section>

        {/* Anatomia do componente */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia — estrutura e classes principais</p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-2xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Elemento</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Classe chave</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Observação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                <tr><td className="px-6 py-3 font-medium">Container</td><td className="px-6 py-3 font-mono">flex flex-col h-full relative</td><td className="px-6 py-3 text-on-surface-variant">h-full garante altura igual no grid</td></tr>
                <tr><td className="px-6 py-3 font-medium">Discipline badge</td><td className="px-6 py-3 font-mono">absolute -top-3 left-6</td><td className="px-6 py-3 text-on-surface-variant">sobreposto ao card, cor por disciplina</td></tr>
                <tr><td className="px-6 py-3 font-medium">Status + data</td><td className="px-6 py-3 font-mono">flex justify-between</td><td className="px-6 py-3 text-on-surface-variant">data em font-mono para estilo editorial</td></tr>
                <tr><td className="px-6 py-3 font-medium">Título</td><td className="px-6 py-3 font-mono">line-clamp-3</td><td className="px-6 py-3 text-on-surface-variant">hover: text-secondary via group-hover</td></tr>
                <tr><td className="px-6 py-3 font-medium">Conteúdo</td><td className="px-6 py-3 font-mono">line-clamp-3</td><td className="px-6 py-3 text-on-surface-variant">text-on-surface-variant, text-sm</td></tr>
                <tr><td className="px-6 py-3 font-medium">Rodapé</td><td className="px-6 py-3 font-mono">mt-auto border-t</td><td className="px-6 py-3 text-on-surface-variant">mt-auto empurra para baixo independente do conteúdo</td></tr>
                <tr><td className="px-6 py-3 font-medium">Avatar</td><td className="px-6 py-3 font-mono">w-10 h-10 rounded-full</td><td className="px-6 py-3 text-on-surface-variant">rounded-full = 0.75rem no design system</td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
