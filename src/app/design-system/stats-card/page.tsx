export default function StatsCardPage() {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Stats Card</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Quatro cards de resumo exibidos no topo do painel admin. Cada card tem cor de borda ou fundo diferente para comunicar a natureza da métrica.</p>
      </div>

      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Grid de 4 cards — como aparece na página */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Todos os cards — grid 4 colunas (como no dashboard)</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* Card 1: Total de posts — borda cinza */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-slate-400">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total de posts</span>
              <span className="text-3xl font-black text-primary mt-3">34</span>
            </div>

            {/* Card 2: Publicados — borda verde */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-green-500">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Publicados</span>
              <span className="text-3xl font-black text-primary mt-3">24</span>
            </div>

            {/* Card 3: Rascunhos + Arquivados — borda laranja */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-orange-400">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Em revisão</span>
              <div className="flex items-end gap-6 mt-3">
                <div>
                  <span className="text-3xl font-black text-primary leading-none">07</span>
                  <p className="text-xs text-on-surface-variant mt-1">Rascunhos</p>
                </div>
                <div>
                  <span className="text-3xl font-black text-primary leading-none">03</span>
                  <p className="text-xs text-on-surface-variant mt-1">Arquivados</p>
                </div>
              </div>
            </div>

            {/* Card 4: Marcados como lido — fundo escuro (primary) */}
            <div className="bg-primary p-6 rounded-xl shadow-xl shadow-primary/20 flex flex-col justify-between text-white overflow-hidden relative">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">Marcados como lido</span>
                <span className="text-3xl font-black mt-3 block">1.2k</span>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
              </div>
            </div>

          </div>
        </section>

        {/* Anatomia dos cards */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card padrão (borda) - anatomy */}
            <div className="bg-white rounded-xl p-8 space-y-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Variante com borda colorida</p>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-green-500 relative">
                {/* annotations */}
                <div className="absolute -top-3 left-12 text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded">label — uppercase, tracking-widest</div>
                <div className="absolute -bottom-3 left-12 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">valor — text-3xl font-black text-primary</div>
                <div className="absolute top-4 -left-8 text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded whitespace-nowrap">border-l-4</div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Publicados</span>
                <span className="text-3xl font-black text-primary mt-3">24</span>
              </div>
            </div>

            {/* Card escuro - anatomy */}
            <div className="bg-white rounded-xl p-8 space-y-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Variante escura (destaque)</p>
              <div className="bg-primary p-6 rounded-xl shadow-xl shadow-primary/20 flex flex-col justify-between text-white overflow-hidden relative">
                <div className="absolute -top-3 left-12 text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded">label — opacity-70 white</div>
                <div className="absolute -bottom-3 left-12 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">valor — text-3xl font-black white</div>
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">Marcados como lido</span>
                  <span className="text-3xl font-black mt-3 block">1.2k</span>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Tabela de variantes */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tabela de variantes</p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Variante</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Borda / Fundo</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Label</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 font-medium">Total de posts</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">border-l-4 border-slate-400</td>
                  <td className="px-6 py-4">Total de posts</td>
                  <td className="px-6 py-4 text-on-surface-variant">Contagem geral de todos os posts do professor</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Publicados</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">border-l-4 border-green-500</td>
                  <td className="px-6 py-4">Publicados</td>
                  <td className="px-6 py-4 text-on-surface-variant">Posts com status PUBLISHED visíveis ao público</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Em revisão</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">border-l-4 border-orange-400</td>
                  <td className="px-6 py-4">Em revisão</td>
                  <td className="px-6 py-4 text-on-surface-variant">Rascunhos + Arquivados — posts não publicados</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Destaque escuro</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">bg-primary text-white</td>
                  <td className="px-6 py-4">Marcados como lido</td>
                  <td className="px-6 py-4 text-on-surface-variant">Engajamento dos leitores com os posts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
