export default function SidebarPage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Sidebar</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Navegação lateral. Usada em <code>/posts/[id]</code> e futuramente em outras telas. Disciplina ativa espelha o post aberto. Botão &ldquo;Criar Post&rdquo; visível apenas para TEACHER autenticado.</p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        <div className="flex gap-12 items-start">

          {/* Variante: visitante / aluno (sem "Criar Post") */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Visitante ou Aluno — sem &ldquo;Criar Post&rdquo;</p>
            <aside className="flex flex-col w-64 bg-slate-50 shadow-2xl shadow-sky-950/10 py-6 space-y-1 rounded-xl" style={{ height: '520px' }}>
              <nav className="flex-1 space-y-1 px-2">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">functions</span>
                  <span className="text-sm font-medium">Matemática</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">menu_book</span>
                  <span className="text-sm font-medium">Português</span>
                </a>
                <a className="flex items-center px-4 py-3 bg-teal-50 text-teal-800 font-semibold rounded-lg cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">science</span>
                  <span className="text-sm font-semibold">Ciências</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">history_edu</span>
                  <span className="text-sm font-medium">História</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">public</span>
                  <span className="text-sm font-medium">Geografia</span>
                </a>
              </nav>
              <div className="px-2 space-y-1 border-t border-slate-200 pt-4 mt-auto">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">group</span>
                  <span className="text-sm">Grupo</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">description</span>
                  <span className="text-sm">Documentação</span>
                </a>
              </div>
            </aside>
          </div>

          {/* Variante: professor autenticado (com "Criar Post") */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Professor autenticado — com &ldquo;Criar Post&rdquo;</p>
            <aside className="flex flex-col w-64 bg-slate-50 shadow-2xl shadow-sky-950/10 py-6 space-y-1 rounded-xl" style={{ height: '520px' }}>
              <nav className="flex-1 space-y-1 px-2">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">functions</span>
                  <span className="text-sm font-medium">Matemática</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">menu_book</span>
                  <span className="text-sm font-medium">Português</span>
                </a>
                <a className="flex items-center px-4 py-3 bg-teal-50 text-teal-800 font-semibold rounded-lg cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">science</span>
                  <span className="text-sm font-semibold">Ciências</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">history_edu</span>
                  <span className="text-sm font-medium">História</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">public</span>
                  <span className="text-sm font-medium">Geografia</span>
                </a>
                <div className="pt-4 px-2">
                  <a href="#" className="w-full bg-gradient-to-r from-secondary to-on-secondary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95 cursor-pointer">
                    <span className="material-symbols-outlined text-sm">add</span>
                    <span className="text-sm">Criar Post</span>
                  </a>
                </div>
              </nav>
              <div className="px-2 space-y-1 border-t border-slate-200 pt-4 mt-auto">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">group</span>
                  <span className="text-sm">Grupo</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">description</span>
                  <span className="text-sm">Documentação</span>
                </a>
              </div>
            </aside>
          </div>

          {/* Variante: sem disciplina selecionada (post sem disciplina) */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Sem disciplina ativa (post sem disciplina)</p>
            <aside className="flex flex-col w-64 bg-slate-50 shadow-2xl shadow-sky-950/10 py-6 space-y-1 rounded-xl" style={{ height: '520px' }}>
              <nav className="flex-1 space-y-1 px-2">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">functions</span>
                  <span className="text-sm font-medium">Matemática</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">menu_book</span>
                  <span className="text-sm font-medium">Português</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">science</span>
                  <span className="text-sm font-medium">Ciências</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">history_edu</span>
                  <span className="text-sm font-medium">História</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">public</span>
                  <span className="text-sm font-medium">Geografia</span>
                </a>
              </nav>
              <div className="px-2 space-y-1 border-t border-slate-200 pt-4 mt-auto">
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">group</span>
                  <span className="text-sm">Grupo</span>
                </a>
                <a className="flex items-center px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-all hover:translate-x-1 cursor-pointer">
                  <span className="material-symbols-outlined mr-3 text-lg">description</span>
                  <span className="text-sm">Documentação</span>
                </a>
              </div>
            </aside>
          </div>

        </div>

        {/* Mapeamento disciplina → ícone */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Mapeamento disciplina → ícone Material Symbols</p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-lg">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Disciplina</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Ícone</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-6 py-3">Matemática</td><td className="px-6 py-3 font-mono text-xs">functions</td><td className="px-6 py-3"><span className="material-symbols-outlined text-slate-500">functions</span></td></tr>
                <tr><td className="px-6 py-3">Português</td><td className="px-6 py-3 font-mono text-xs">menu_book</td><td className="px-6 py-3"><span className="material-symbols-outlined text-slate-500">menu_book</span></td></tr>
                <tr><td className="px-6 py-3">Ciências</td><td className="px-6 py-3 font-mono text-xs">science</td><td className="px-6 py-3"><span className="material-symbols-outlined text-slate-500">science</span></td></tr>
                <tr><td className="px-6 py-3">História</td><td className="px-6 py-3 font-mono text-xs">history_edu</td><td className="px-6 py-3"><span className="material-symbols-outlined text-slate-500">history_edu</span></td></tr>
                <tr><td className="px-6 py-3">Geografia</td><td className="px-6 py-3 font-mono text-xs">public</td><td className="px-6 py-3"><span className="material-symbols-outlined text-slate-500">public</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
