export default function ButtonPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Button</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Variantes de botão usadas em todo o produto: primary CTA (teal), primary nav (dark gradient), secondary (outline), danger e icon buttons.
        </p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Primary CTA (teal) */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Primary CTA — teal gradient</p>
          <p className="text-xs text-on-surface-variant">Usado em: formulários (Criar post, Salvar, Entrar no login), busca</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                <span>Criar post</span>
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20 opacity-80 flex items-center gap-2 cursor-wait">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>Salvando...</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">loading</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="cta-gradient text-white font-bold px-6 py-3 rounded-xl opacity-40 cursor-not-allowed flex items-center gap-2" disabled>
                <span>Criar post</span>
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">disabled</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-full cta-gradient text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2" style={{ width: '320px' }}>
                <span>Entrar</span>
                <span className="material-symbols-outlined text-lg">login</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">full-width (login)</span>
            </div>
          </div>
        </section>

        {/* Primary Nav (dark gradient) */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Primary Nav — dark gradient</p>
          <p className="text-xs text-on-surface-variant">Usado em: botão &quot;Entrar&quot; no header (visitante)</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all">
                Entrar
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">default</span>
            </div>
          </div>
        </section>

        {/* Secondary (outline) */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Secondary — outline</p>
          <p className="text-xs text-on-surface-variant">Usado em: &quot;Cancelar&quot; em formulários, ações secundárias</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="border border-outline-variant text-on-surface font-bold px-6 py-3 rounded-xl hover:bg-surface-container-high transition-all">
                Cancelar
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="border border-outline-variant text-on-surface font-bold px-6 py-3 rounded-xl opacity-40 cursor-not-allowed" disabled>
                Cancelar
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">disabled</span>
            </div>
          </div>
        </section>

        {/* Danger */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Danger — destructive action</p>
          <p className="text-xs text-on-surface-variant">Usado em: &quot;Excluir permanentemente&quot; no modal de confirmação</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="bg-error text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">delete</span>
                <span>Excluir permanentemente</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="border border-error text-error font-bold px-6 py-3 rounded-xl hover:bg-red-50 active:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">delete</span>
                <span>Excluir post</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">outline danger (sidebar)</span>
            </div>
          </div>
        </section>

        {/* Icon button */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Icon Button</p>
          <p className="text-xs text-on-surface-variant">Usado em: bookmark nos cards, ações de tabela</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="material-symbols-outlined text-outline hover:text-secondary transition-colors">bookmark</button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">ghost icon</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-lg">edit</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">icon + bg hover (tabela)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors text-on-surface-variant hover:text-error">
                <span className="material-symbols-outlined text-lg">delete</span>
              </button>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">icon danger (tabela)</span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
