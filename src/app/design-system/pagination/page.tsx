export default function PaginationPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Pagination</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Navegação entre páginas. Aparece na home (posts públicos) e no painel admin (tabela de posts).
        </p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Página do meio */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Página do meio (página 3 de 12)</p>
          <nav className="flex justify-center items-center space-x-2">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold">3</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">4</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">5</button>
            <span className="px-2 text-outline">...</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">12</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </section>

        {/* Primeira página */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Primeira página — chevron esquerdo desabilitado</p>
          <nav className="flex justify-center items-center space-x-2">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-outline cursor-not-allowed opacity-40" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">3</button>
            <span className="px-2 text-outline">...</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">12</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </section>

        {/* Última página */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Última página — chevron direito desabilitado</p>
          <nav className="flex justify-center items-center space-x-2">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">1</button>
            <span className="px-2 text-outline">...</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">10</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">11</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold">12</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-outline cursor-not-allowed opacity-40" disabled>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </section>

        {/* Poucas páginas (sem reticências) */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Poucas páginas — sem reticências (≤ 5 páginas)</p>
          <nav className="flex justify-center items-center space-x-2">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-bold border border-outline-variant/20 transition-colors">3</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </section>

      </div>
    </>
  )
}
