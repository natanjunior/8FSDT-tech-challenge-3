export default function IconCountPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Icon Count</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Componente de ícone + contagem numérica. Usado em post cards para comentários e marcações de leitura. Suporta estado idle (outline) e hover/active (fill + secondary).
        </p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Mapeamento semântico */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Mapeamento semântico → ícone Material Symbols</p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Prop <code>icon</code></th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Ícone Material Symbols</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-mono">
                <tr>
                  <td className="px-6 py-4 text-on-surface">&quot;comment&quot;</td>
                  <td className="px-6 py-4 text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>forum</span>
                    forum
                  </td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Contagem de comentários</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-on-surface">&quot;bookmark&quot;</td>
                  <td className="px-6 py-4 text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>bookmark</span>
                    bookmark
                  </td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Contagem de marcações de leitura</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-on-surface">&quot;views&quot;</td>
                  <td className="px-6 py-4 text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>visibility</span>
                    visibility
                  </td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Contagem de visualizações</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-on-surface">&quot;likes&quot;</td>
                  <td className="px-6 py-4 text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: '18px' }}>thumb_up</span>
                    thumb_up
                  </td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Contagem de curtidas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Estados */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estados</p>
          <div className="flex flex-wrap gap-12 items-end">

            {/* Idle */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Idle</p>
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
              <p className="text-[10px] font-mono text-on-surface-variant">icon outline · text-on-surface-variant · fill 0</p>
            </div>

            {/* Hover / Active */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Hover / Active</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] font-mono text-secondary">
                  <span className="material-symbols-outlined text-secondary icon-fill" style={{ fontSize: '16px' }}>forum</span>
                  3
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-secondary">
                  <span className="material-symbols-outlined text-secondary icon-fill" style={{ fontSize: '16px' }}>bookmark</span>
                  48
                </span>
              </div>
              <p className="text-[10px] font-mono text-on-surface-variant">icon secondary · text-secondary · fill 1</p>
            </div>

            {/* Interativo (hover real) */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Interativo (passe o mouse)</p>
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:icon-fill transition-colors" style={{ fontSize: '16px' }}>forum</span>
                  3
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" style={{ fontSize: '16px' }}>bookmark</span>
                  48
                </span>
              </div>
              <p className="text-[10px] font-mono text-on-surface-variant">em produção usar group-hover no card pai</p>
            </div>

          </div>
        </section>

        {/* Tamanhos */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tamanhos</p>
          <div className="flex flex-wrap gap-12 items-end bg-white rounded-xl p-6">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">sm (padrão — post cards)</p>
              <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant">
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>forum</span>
                3
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">md</p>
              <span className="flex items-center gap-1 text-sm font-mono text-on-surface-variant">
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '20px' }}>forum</span>
                3
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">lg</p>
              <span className="flex items-center gap-1 text-base font-mono text-on-surface-variant">
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '24px' }}>forum</span>
                3
              </span>
            </div>
          </div>
        </section>

        {/* Uso em contexto — par comentários + marcações */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Uso em contexto — par no rodapé do post card</p>
          <div className="max-w-sm">
            <article className="group bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 flex flex-col cursor-pointer border border-outline-variant/10">
              <h3 className="text-lg font-extrabold text-primary leading-tight mb-2 group-hover:text-secondary transition-colors">
                Horta Escolar: Laboratório vivo para o ensino fundamental
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-5 line-clamp-2">
                Integrando ciências, matemática e educação ambiental através de um projeto prático de horta coletiva.
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 border-2 border-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-[10px] font-black shrink-0">MV</div>
                  <p className="text-xs font-bold text-primary">Prof. Marcos Viana</p>
                </div>
                {/* IconCount pair */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" style={{ fontSize: '16px' }}>forum</span>
                    3
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" style={{ fontSize: '16px' }}>bookmark</span>
                    48
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Tabela de tokens */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tokens do componente</p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Parte</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Idle</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Hover / Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-mono">
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Ícone</td>
                  <td className="px-6 py-4 text-on-surface-variant">text-outline · fill 0</td>
                  <td className="px-6 py-4 text-on-surface-variant">text-secondary · fill 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Número</td>
                  <td className="px-6 py-4 text-on-surface-variant">text-on-surface-variant · font-mono text-[11px]</td>
                  <td className="px-6 py-4 text-on-surface-variant">text-secondary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Tamanho ícone (sm)</td>
                  <td className="px-6 py-4 text-on-surface-variant" colSpan={2}>font-size: 16px</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Espaço interno</td>
                  <td className="px-6 py-4 text-on-surface-variant" colSpan={2}>gap-1 entre ícone e número · gap-3 entre instâncias</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Transição</td>
                  <td className="px-6 py-4 text-on-surface-variant" colSpan={2}>transition-colors · acionado por group-hover no card pai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
