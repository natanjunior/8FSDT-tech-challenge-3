export default function StatusBadgePage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Status Badge</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Pill que indica o estado de publicação do post. Aparece nos PostCards (público) e na tabela do painel admin.</p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Os 3 estados */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Os 3 estados</p>
          <div className="flex flex-wrap items-start gap-10">

            <div className="flex flex-col items-center gap-3">
              <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20">PUBLICADO</span>
              <div className="text-center space-y-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block">publicado</span>
                <span className="text-[10px] font-mono text-slate-400 block">bg-green-500/10</span>
                <span className="text-[10px] font-mono text-slate-400 block">text-green-600</span>
                <span className="text-[10px] font-mono text-slate-400 block">border-green-500/20</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="bg-yellow-400/10 text-yellow-600 text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-400/20">RASCUNHO</span>
              <div className="text-center space-y-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block">rascunho</span>
                <span className="text-[10px] font-mono text-slate-400 block">bg-yellow-400/10</span>
                <span className="text-[10px] font-mono text-slate-400 block">text-yellow-600</span>
                <span className="text-[10px] font-mono text-slate-400 block">border-yellow-400/20</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">ARQUIVADO</span>
              <div className="text-center space-y-1">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block">arquivado</span>
                <span className="text-[10px] font-mono text-slate-400 block">bg-slate-200</span>
                <span className="text-[10px] font-mono text-slate-400 block">text-slate-500</span>
                <span className="text-[10px] font-mono text-slate-400 block">sem border</span>
              </div>
            </div>

          </div>
        </section>

        {/* Contexto: tabela admin */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Em contexto — tabela do painel admin</p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-2xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Título</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-primary">Introdução às Frações</td>
                  <td className="px-6 py-4"><span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20">PUBLICADO</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-primary">Análise Sintática</td>
                  <td className="px-6 py-4"><span className="bg-yellow-400/10 text-yellow-600 text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-400/20">RASCUNHO</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-primary">Revolução Industrial</td>
                  <td className="px-6 py-4"><span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">ARQUIVADO</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contexto: PostCard público */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Em contexto — PostCard público</p>
          <p className="text-xs text-on-surface-variant">Na home pública só aparecem posts PUBLICADO — o badge fica no topo-direito do card.</p>
          <div className="flex items-start gap-4">
            <div className="flex justify-between items-start bg-white rounded-xl p-6 border border-slate-200 max-w-xs w-full">
              <div>
                <p className="text-xs font-bold text-primary">Título do post</p>
                <p className="text-xs text-on-surface-variant mt-1">Excerpt breve...</p>
              </div>
              <span className="bg-green-500/10 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20 ml-4 shrink-0">PUBLICADO</span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
