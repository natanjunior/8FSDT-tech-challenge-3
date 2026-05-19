export default function DataTablePage() {
  return (
    <>
      {/* Page header */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Data Table</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
          Tabela reutilizável para telas de gestão. O pai controla dados, filtros, templates de célula e ações. O componente controla ordenação (UI), paginação (UI) e abertura do painel de filtros.
        </p>
      </div>

      {/* Showcase wrapper */}
      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* VARIANTE 1: Tabela completa (posts) */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante completa — colunas mescladas, filtros, ações no header</p>
          <p className="text-xs text-on-surface-variant">Demonstra: mergedWith/mergedInto, sortKey, cell templates, filterSlot, headerActions, paginação com pageSize.</p>

          <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">

            {/* Card header */}
            <div className="px-6 py-4 bg-surface-container flex items-center gap-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-primary/60 text-base">article</span>
              <h3 className="font-bold text-primary text-sm flex-1">Artigos</h3>
              <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors" title="Novo artigo">
                <span className="material-symbols-outlined text-base">add</span>
              </button>
              <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" title="Filtros">
                <span className="material-symbols-outlined text-base">filter_list</span>
              </button>
              <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-base">more_vert</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Título<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable pl-0 pr-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1.5"><span className="text-outline-variant font-light">|</span>Autor<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Disciplina<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Status<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Última edição<span className="sort-arrow material-symbols-outlined text-outline-variant" style={{ fontSize: '14px' }}>arrow_downward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center cursor-pointer select-none transition-colors">
                      <span className="flex items-center justify-center gap-1">Coment.<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center cursor-pointer select-none transition-colors">
                      <span className="flex items-center justify-center gap-1">Lidos<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {/* Sorted by date desc (initial state) */}
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Horta Escolar: Laboratório vivo para o ensino fundamental</span>
                        <span className="text-xs text-on-surface-variant">Metodologia prática para ciências naturais</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 border-emerald-200 text-emerald-700 border flex items-center justify-center text-[9px] font-black shrink-0">MV</div>
                          <span className="text-xs font-medium text-on-surface-variant">Prof. Marcos Viana</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Ciências</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">15 nov 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">3</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">48</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">A Floresta Amazônica: Biodiversidade e Crise Climática</span>
                        <span className="text-xs text-on-surface-variant">Módulo interdisciplinar de geografia e ciências</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-teal-100 border-teal-200 text-teal-700 border flex items-center justify-center text-[9px] font-black shrink-0">AC</div>
                          <span className="text-xs font-medium text-on-surface-variant">Profa. Ana Costa</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Geografia</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-600"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>RASCUNHO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">12 nov 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">0</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">0</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">A Revolução Industrial e seus impactos sociais</span>
                        <span className="text-xs text-on-surface-variant">Da manufatura à produção em larga escala</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-rose-100 border-rose-200 text-rose-700 border flex items-center justify-center text-[9px] font-black shrink-0">JS</div>
                          <span className="text-xs font-medium text-on-surface-variant">Prof. João Santos</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">História</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-600"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>RASCUNHO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">08 nov 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">1</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">9</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Sistemas Solares: Explorando o Universo</span>
                        <span className="text-xs text-on-surface-variant">Astronomia básica para o ensino fundamental II</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 border-emerald-200 text-emerald-700 border flex items-center justify-center text-[9px] font-black shrink-0">MV</div>
                          <span className="text-xs font-medium text-on-surface-variant">Prof. Marcos Viana</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Ciências</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">30 out 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">5</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">61</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Álgebra Linear para o Ensino Médio</span>
                        <span className="text-xs text-on-surface-variant">Série avançada para turmas do 3º ano</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-blue-100 border-blue-200 text-blue-700 border flex items-center justify-center text-[9px] font-black shrink-0">RS</div>
                          <span className="text-xs font-medium text-on-surface-variant">Dr. Ricardo Silva</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Matemática</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">24 out 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">7</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">132</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td colSpan={2} className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Literatura Portuguesa: O legado de Machado de Assis</span>
                        <span className="text-xs text-on-surface-variant">Realismo e crítica social no Brasil do século XIX</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-amber-100 border-amber-200 text-amber-700 border flex items-center justify-center text-[9px] font-black shrink-0">ES</div>
                          <span className="text-xs font-medium text-on-surface-variant">Profa. Elena Souza</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Português</span></td>
                    <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-400/10 text-slate-500"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>ARQUIVADO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">05 set 2023</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">12</span></td>
                    <td className="px-6 py-4 text-center"><span className="text-sm font-mono text-on-surface-variant">87</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination row */}
            <div className="px-6 py-4 border-t border-surface-container-high flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span>Exibir</span>
                <select defaultValue="10" className="bg-surface-container-low border-none rounded-xl px-3 py-1.5 text-sm font-medium text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>por página · <strong className="text-on-surface">6</strong> registros</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary opacity-40 cursor-not-allowed">
                  <span className="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-sm">1</button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container-lowest hover:bg-surface-container-high border border-outline-variant/20 text-primary font-bold text-sm transition-colors">2</button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary">
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* VARIANTE 2: Tabela simples (sem mesclagem, sem filtros) */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Variante simples — sem colunas mescladas, sem filterSlot</p>
          <p className="text-xs text-on-surface-variant">Demonstra: tabela de usuários com colunas diretas. Sem filter_list no header pois filterSlot não foi passado.</p>

          <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">

            <div className="px-6 py-4 bg-surface-container flex items-center gap-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-primary/60 text-base">group</span>
              <h3 className="font-bold text-primary text-sm flex-1">Usuários</h3>
              <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors" title="Convidar usuário">
                <span className="material-symbols-outlined text-base">person_add</span>
              </button>
              <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-base">more_vert</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Nome<span className="sort-arrow material-symbols-outlined text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">E-mail<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Perfil<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="sortable px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                      <span className="flex items-center gap-1">Cadastro<span className="sort-arrow material-symbols-outlined opacity-0 text-outline-variant" style={{ fontSize: '14px' }}>arrow_upward</span></span>
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 text-[10px] font-black shrink-0">MV</div>
                        <span className="text-sm font-bold text-primary">Prof. Marcos Viana</span>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">marcos@escola.edu.br</span></td>
                    <td className="px-6 py-4"><span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full">PROFESSOR</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">01 jan 2023</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-700 text-[10px] font-black shrink-0">LC</div>
                        <span className="text-sm font-bold text-primary">Larissa Campos</span>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">larissa@escola.edu.br</span></td>
                    <td className="px-6 py-4"><span className="bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full">ALUNO</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">15 mar 2023</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-[10px] font-black shrink-0">RF</div>
                        <span className="text-sm font-bold text-primary">Prof. Ricardo Fonseca</span>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">ricardo@escola.edu.br</span></td>
                    <td className="px-6 py-4"><span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full">PROFESSOR</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-mono text-on-surface-variant">10 fev 2023</span></td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-surface-container-high flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span>Exibir</span>
                <select defaultValue="10" className="bg-surface-container-low border-none rounded-xl px-3 py-1.5 text-sm font-medium text-on-surface focus:ring-2 focus:ring-primary/20 outline-none">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>por página · <strong className="text-on-surface">3</strong> registros</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary opacity-40 cursor-not-allowed">
                  <span className="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-sm">1</button>
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-primary opacity-40 cursor-not-allowed">
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* VARIANTE 3: Empty state */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Empty state — rows.length === 0</p>
          <p className="text-xs text-on-surface-variant">Demonstra: emptySlot customizado pelo pai (esquerda) e emptySlot padrão do componente (direita).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">emptySlot passado pelo pai</p>
              <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
                <div className="px-6 py-4 bg-surface-container flex items-center gap-2 border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary/60 text-base">article</span>
                  <h3 className="font-bold text-primary text-sm flex-1">Artigos</h3>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors">
                    <span className="material-symbols-outlined text-base">add</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">more_vert</span>
                  </button>
                </div>
                <div className="px-6 py-16 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '32px' }}>edit_note</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Nenhum artigo publicado ainda</p>
                    <p className="text-sm text-on-surface-variant mt-1">Crie seu primeiro artigo e ele aparecerá aqui.</p>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary to-on-secondary-container text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-secondary/20">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Criar primeiro artigo
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">emptySlot padrão (não passado pelo pai)</p>
              <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
                <div className="px-6 py-4 bg-surface-container flex items-center gap-2 border-b border-surface-container-high">
                  <span className="material-symbols-outlined text-primary/60 text-base">article</span>
                  <h3 className="font-bold text-primary text-sm flex-1">Artigos</h3>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">filter_list</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">more_vert</span>
                  </button>
                </div>
                <div className="px-6 py-16 flex flex-col items-center gap-3 text-center">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '40px' }}>inbox</span>
                  <p className="text-sm text-on-surface-variant">Nenhum resultado encontrado.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Anatomia */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia — zonas de responsabilidade</p>
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-sky-950/5">
            <div className="relative border-2 border-dashed border-slate-200 rounded-xl overflow-visible">

              <div className="absolute -top-3 left-4 text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">DataTable — shell</div>

              <div className="relative border-b border-dashed border-slate-200 px-6 py-3 flex items-center gap-2">
                <div className="absolute -top-3 right-4 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Card header — título + slots do pai</div>
                <span className="text-xs font-bold text-primary flex-1">Título (prop)</span>
                <span className="text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded-full">headerActions (slot pai)</span>
                <span className="text-[10px] font-mono bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">filter_list (se filterSlot)</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">more_vert (fixo)</span>
              </div>

              <div className="relative border-b border-dashed border-slate-200 px-6 py-3">
                <div className="absolute -top-3 left-4 text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded">filterSlot (slot pai) — visibilidade controlada pelo DataTable</div>
                <span className="text-xs text-on-surface-variant italic">[ conteúdo definido pelo pai — filtros, selects, inputs ]</span>
              </div>

              <div className="relative border-b border-dashed border-slate-200 px-6 py-3 space-y-2">
                <div className="absolute -top-3 right-4 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">thead — DataTable (sort UI)</div>
                <div className="flex gap-2 text-[10px] font-mono">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">sortable th (DataTable)</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">seta sort (DataTable)</span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">th sem sortKey (não clicável)</span>
                </div>
                <div className="relative">
                  <div className="absolute -top-3 left-4 text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded">tbody — cell templates do pai / emptySlot</div>
                  <div className="flex gap-2 text-[10px] font-mono mt-4">
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">{'cell: (row) => ReactNode (pai)'}</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">String(row[key]) (padrão DataTable)</span>
                    <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded">colspan=2 (mergedWith)</span>
                  </div>
                </div>
              </div>

              <div className="relative px-6 py-3 flex items-center gap-4">
                <div className="absolute -top-3 right-4 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Pagination — DataTable (UI) → emite onPageChange</div>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">pageSize select (DataTable)</span>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">page buttons (DataTable)</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">total (prop do pai)</span>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-[11px]">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-200 inline-block"></span>Responsabilidade do DataTable</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-200 inline-block"></span>Responsabilidade do Pai (slot/template)</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-orange-200 inline-block"></span>Pai define, DataTable renderiza/controla</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-200 inline-block"></span>Comportamento fixo / sem interação</span>
            </div>
          </div>
        </section>

        {/* Outputs */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Outputs emitidos pelo componente</p>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-surface-container-low border-b border-surface-container-high">
                <tr>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Evento</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Payload</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Quando</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low text-xs font-mono">
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">onSortChange</td>
                  <td className="px-6 py-4 text-on-surface-variant">{"{ sortKey: string, dir: 'asc'|'desc' } | null"}</td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Clique em header ordenável. null = sem ordenação (3º clique)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">onPageChange</td>
                  <td className="px-6 py-4 text-on-surface-variant">{"{ page: number, pageSize: number }"}</td>
                  <td className="px-6 py-4 font-sans text-on-surface-variant">Mudança de página ou de pageSize. Também emitido ao ordenar (reseta p.1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
