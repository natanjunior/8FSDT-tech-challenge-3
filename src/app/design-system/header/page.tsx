export default function HeaderPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Header</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Header fixo no topo. Glassmorphism (bg/80 + backdrop-blur). Três estados: visitante, autenticado com dropdown fechado, autenticado com dropdown aberto.</p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Visitante */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Visitante — não autenticado</p>
          <header className="bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
              <div className="text-xl font-black tracking-tighter text-primary uppercase">8FSDT TC 3</div>
              <nav className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-tight">
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Matemática</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Português</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Ciências</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">História</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Geografia</a>
              </nav>
              <button className="primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all" style={{ background: 'linear-gradient(135deg, #022448 0%, #1E3A5F 100%)' }}>
                Entrar
              </button>
            </div>
          </header>
        </section>

        {/* Autenticado — dropdown fechado */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Autenticado — dropdown fechado</p>
          <header className="bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
              <div className="text-xl font-black tracking-tighter text-primary uppercase">8FSDT TC 3</div>
              <nav className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-tight">
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Matemática</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Português</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Ciências</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">História</a>
                <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Geografia</a>
              </nav>
              {/* Author ID trigger */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
                <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
                <div className="hidden lg:block">
                  <p className="text-sm font-bold text-primary leading-none">Prof. Ricardo</p>
                  <p className="text-[10px] text-outline leading-none mt-0.5">Professor</p>
                </div>
                <span className="material-symbols-outlined text-outline text-base">expand_more</span>
              </div>
            </div>
          </header>
        </section>

        {/* Autenticado — dropdown aberto */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Autenticado — dropdown aberto</p>
          <div className="relative">
            <header className="bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5 rounded-t-xl overflow-visible">
              <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1440px] mx-auto">
                <div className="text-xl font-black tracking-tighter text-primary uppercase">8FSDT TC 3</div>
                <nav className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-tight">
                  <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Matemática</a>
                  <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Português</a>
                  <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Ciências</a>
                  <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">História</a>
                  <a className="text-slate-600 hover:text-sky-900 hover:bg-slate-200/40 transition-all duration-300 px-3 py-1 rounded-md" href="#">Geografia</a>
                </nav>
                {/* Author ID trigger — active state */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer bg-surface-container-low transition-colors">
                  <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-700 text-xs font-black shrink-0">RS</div>
                  <div className="hidden lg:block">
                    <p className="text-sm font-bold text-primary leading-none">Prof. Ricardo</p>
                    <p className="text-[10px] text-outline leading-none mt-0.5">Professor</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-base">expand_less</span>
                </div>
              </div>
            </header>
            {/* Dropdown menu */}
            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-2xl shadow-on-surface/10 border border-outline-variant/20 overflow-hidden z-50">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-base text-outline">dashboard</span>
                Painel
              </a>
              <div className="border-t border-outline-variant/10"></div>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-error hover:bg-red-50 transition-colors">
                <span className="material-symbols-outlined text-base">logout</span>
                Sair
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
