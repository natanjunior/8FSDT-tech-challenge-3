export default function ConfirmModalPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Confirm Modal</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Dois sabores: <strong>destrutivo</strong> (vermelho — para exclusões) e <strong>neutro</strong> (para ações que merecem atenção mas não são irreversíveis). Backdrop com blur, sem animação no protótipo.
        </p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Variante 1: Destrutiva — Excluir artigo */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante destrutiva — exclusão permanente</p>
          <div className="relative bg-slate-400/30 rounded-2xl p-12 flex items-center justify-center min-h-[240px]">
            <p className="absolute top-4 left-6 text-[10px] text-slate-500 font-mono">backdrop: bg-on-surface/20 backdrop-blur-sm</p>
            <div className="bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-error-container/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error text-2xl">delete_forever</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-primary tracking-tight">Excluir artigo?</h2>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Esta ação é permanente. O artigo <span className="font-semibold text-on-surface">&quot;Horta Escolar: Laboratório vivo...&quot;</span> será removido e não poderá ser recuperado.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
                <button type="button" className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all">
                  Cancelar
                </button>
                <button type="button" className="flex items-center gap-2 px-6 py-2.5 bg-error text-white text-sm font-bold rounded-xl shadow-lg shadow-error/20 hover:opacity-90 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-lg">delete</span>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 2: Neutro — Sair sem salvar */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante neutra — sair sem salvar</p>
          <div className="relative bg-slate-400/30 rounded-2xl p-12 flex items-center justify-center min-h-[240px]">
            <div className="bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-outline text-2xl">edit_off</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-primary tracking-tight">Sair sem salvar?</h2>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    As alterações feitas neste artigo não foram salvas e serão perdidas.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
                <button type="button" className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all">
                  Continuar editando
                </button>
                <button type="button" className="flex items-center gap-2 px-6 py-2.5 primary-gradient text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
                  Sair sem salvar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 3: Neutro — Alterar status publicado */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante neutra — alterar status de publicado</p>
          <div className="relative bg-slate-400/30 rounded-2xl p-12 flex items-center justify-center min-h-[240px]">
            <div className="bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-outline text-2xl">published_with_changes</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-primary tracking-tight">Alterar status?</h2>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Este artigo está <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600 mx-0.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>PUBLICADO</span> e visível para todos os leitores. Alterá-lo irá tirá-lo de circulação.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
                <button type="button" className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all">
                  Manter publicado
                </button>
                <button type="button" className="flex items-center gap-2 px-6 py-2.5 primary-gradient text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
                  Alterar status
                </button>
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
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Ícone</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Botão confirm</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-error">Destrutiva</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">bg-error-container/40 · text-error</td>
                  <td className="px-6 py-4"><span className="bg-error text-white text-xs font-bold px-3 py-1 rounded-lg">bg-error</span></td>
                  <td className="px-6 py-4 text-on-surface-variant">Exclusão permanente</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Neutra</td>
                  <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">bg-surface-container · text-outline</td>
                  <td className="px-6 py-4"><span className="primary-gradient text-white text-xs font-bold px-3 py-1 rounded-lg">primary-gradient</span></td>
                  <td className="px-6 py-4 text-on-surface-variant">Sair sem salvar, alterar status, outras ações com consequência</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Anatomia compartilhada */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia (compartilhada)</p>
          <div className="bg-white rounded-xl p-6 text-sm text-on-surface-variant space-y-2">
            <p><strong className="text-primary">Container:</strong> <code className="bg-slate-100 px-1 rounded">max-w-md rounded-2xl p-8 shadow-2xl shadow-on-surface/20</code></p>
            <p><strong className="text-primary">Ícone:</strong> <code className="bg-slate-100 px-1 rounded">w-12 h-12 rounded-full</code> — cor muda por variante</p>
            <p><strong className="text-primary">Título:</strong> <code className="bg-slate-100 px-1 rounded">text-lg font-black text-primary</code> — sempre neutro</p>
            <p><strong className="text-primary">Descrição:</strong> <code className="bg-slate-100 px-1 rounded">text-sm text-on-surface-variant leading-relaxed</code></p>
            <p><strong className="text-primary">Divisor:</strong> <code className="bg-slate-100 px-1 rounded">border-t border-outline-variant/10</code></p>
            <p><strong className="text-primary">Botão cancelar:</strong> sempre <code className="bg-slate-100 px-1 rounded">text-on-surface-variant hover:bg-surface-container-low</code> — nunca vermelho</p>
            <p><strong className="text-primary">Backdrop:</strong> <code className="bg-slate-100 px-1 rounded">bg-on-surface/20 backdrop-blur-sm</code> — clicável para fechar</p>
          </div>
        </section>

      </div>
    </>
  )
}
