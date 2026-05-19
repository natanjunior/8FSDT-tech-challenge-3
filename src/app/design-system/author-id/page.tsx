export default function AuthorIdPage() {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Author Id</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Combinação de avatar (iniciais) + nome + disciplina/role. Aparece em PostCards, rodapé de artigos e header autenticado.</p>
      </div>

      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Variante: PostCard (compacto) */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante — PostCard (compacto)</p>
          <p className="text-xs text-on-surface-variant">Fica no rodapé do card. Avatar pequeno (40px) com iniciais coloridas de acordo com a disciplina.</p>
          <div className="flex flex-wrap gap-8">

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
                <div>
                  <p className="text-sm font-bold text-primary">Dr. Ricardo Silva</p>
                  <p className="text-[10px] text-outline">Matemática</p>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Matemática</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-200 flex items-center justify-center text-rose-700 text-xs font-black shrink-0">ES</div>
                <div>
                  <p className="text-sm font-bold text-primary">Profa. Elena Souza</p>
                  <p className="text-[10px] text-outline">Língua Portuguesa</p>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Português</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-black shrink-0">MV</div>
                <div>
                  <p className="text-sm font-bold text-primary">Dr. Marcos Viana</p>
                  <p className="text-[10px] text-outline">Ciências Naturais</p>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Ciências</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-600 text-xs font-black shrink-0">JS</div>
                <div>
                  <p className="text-sm font-bold text-primary">Prof. João Santos</p>
                  <p className="text-[10px] text-outline">Sem disciplina</p>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">null (fallback slate)</span>
            </div>

          </div>
        </section>

        {/* Variante: Artigo (expandido) */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante — Rodapé de artigo (expandido)</p>
          <p className="text-xs text-on-surface-variant">Avatar maior (48px), mostra role (&quot;Professor&quot;) e data de publicação.</p>
          <div className="flex items-center gap-4 bg-white rounded-xl p-6 border border-slate-200 max-w-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-sm font-black shrink-0">RS</div>
            <div>
              <p className="font-bold text-primary">Dr. Ricardo Silva</p>
              <p className="text-xs text-on-surface-variant">Professor · Matemática</p>
              <p className="text-xs text-outline font-mono mt-0.5">15 de janeiro de 2024</p>
            </div>
          </div>
        </section>

        {/* Variante: Header autenticado (inline) */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante — Header autenticado (inline, trigger do dropdown)</p>
          <p className="text-xs text-on-surface-variant">Avatar menor (36px) + nome + chevron. Ao clicar, abre dropdown com &quot;Painel&quot; e &quot;Sair&quot;.</p>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 border border-slate-200 w-fit cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
            <div>
              <p className="text-sm font-bold text-primary leading-none">Prof. Ricardo</p>
              <p className="text-[10px] text-outline leading-none mt-0.5">Professor</p>
            </div>
            <span className="material-symbols-outlined text-outline text-base ml-1">expand_more</span>
          </div>
        </section>

        {/* Variante: Sidebar admin */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante — Sidebar admin (rodapé)</p>
          <p className="text-xs text-on-surface-variant">Aparece no rodapé da sidebar do painel admin.</p>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-primary truncate">Prof. Ricardo Silva</p>
              <span className="inline-block bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5">Professor</span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
