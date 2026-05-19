export default function DisciplineBadgePage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Discipline Badge</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Badge pill sobreposto ao canto superior-esquerdo do PostCard. Cada disciplina tem cor fixa.</p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Todas as disciplinas */}
        <section className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Todas as disciplinas</p>
          <div className="flex flex-wrap gap-6">

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Matemática</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Matemática — blue-600</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Português</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Português — rose-600</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Ciências</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Ciências — emerald-600</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">História</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">História — amber-600</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Geografia</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Geografia — indigo-600</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative bg-white rounded-xl p-6 pt-8 shadow-sm border border-slate-200 w-40">
                <div className="absolute -top-3 left-4">
                  <span className="bg-slate-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Sem disciplina</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">conteúdo do card</p>
              </div>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">null — slate-400</span>
            </div>

          </div>
        </section>

        {/* Tabela de referência */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tabela de referência — Tailwind classes</p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Disciplina</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Badge bg</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Avatar bg / text</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="px-6"><td className="px-6 py-3 font-medium">Matemática</td><td className="px-6 py-3 font-mono text-xs">bg-blue-600</td><td className="px-6 py-3 font-mono text-xs">bg-blue-100 / text-blue-700</td><td className="px-6 py-3"><span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Matemática</span></td></tr>
                <tr className="px-6"><td className="px-6 py-3 font-medium">Português</td><td className="px-6 py-3 font-mono text-xs">bg-rose-600</td><td className="px-6 py-3 font-mono text-xs">bg-rose-100 / text-rose-700</td><td className="px-6 py-3"><span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Português</span></td></tr>
                <tr className="px-6"><td className="px-6 py-3 font-medium">Ciências</td><td className="px-6 py-3 font-mono text-xs">bg-emerald-600</td><td className="px-6 py-3 font-mono text-xs">bg-emerald-100 / text-emerald-700</td><td className="px-6 py-3"><span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Ciências</span></td></tr>
                <tr className="px-6"><td className="px-6 py-3 font-medium">História</td><td className="px-6 py-3 font-mono text-xs">bg-amber-600</td><td className="px-6 py-3 font-mono text-xs">bg-amber-100 / text-amber-700</td><td className="px-6 py-3"><span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">História</span></td></tr>
                <tr className="px-6"><td className="px-6 py-3 font-medium">Geografia</td><td className="px-6 py-3 font-mono text-xs">bg-indigo-600</td><td className="px-6 py-3 font-mono text-xs">bg-indigo-100 / text-indigo-700</td><td className="px-6 py-3"><span className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Geografia</span></td></tr>
                <tr className="px-6"><td className="px-6 py-3 font-medium text-slate-400">null</td><td className="px-6 py-3 font-mono text-xs">bg-slate-400</td><td className="px-6 py-3 font-mono text-xs">bg-slate-100 / text-slate-600</td><td className="px-6 py-3"><span className="bg-slate-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Sem disciplina</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
