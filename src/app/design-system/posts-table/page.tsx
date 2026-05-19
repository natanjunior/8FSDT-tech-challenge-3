export default function PostsTablePage() {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Posts Table</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Tabela de posts do painel admin. Dois estados: filtros ocultos (padrão) e filtros visíveis (toggle via filter_list). Dropdown de rows per page via more_vert.</p>
      </div>

      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Estado 1: Sem filtros visíveis */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estado padrão — filtros ocultos</p>

          <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-visible">
            {/* Header da tabela */}
            <div className="px-6 py-4 bg-surface-container flex justify-between items-center rounded-t-xl">
              <h3 className="font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary/60 text-lg">article</span>
                Artigos
              </h3>
              <div className="flex items-center gap-1">
                {/* + Novo post */}
                <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors" title="Novo post">
                  <span className="material-symbols-outlined">add</span>
                </button>
                {/* filter_list — toggle filtros */}
                <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" title="Filtrar">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                {/* more_vert — rows per page */}
                <div className="relative">
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" title="Linhas por página">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tabela */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Título</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Disciplina</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Última edição</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">

                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Horta Escolar: Laboratório vivo para o ensino fundamental</span>
                        <span className="text-xs text-on-surface-variant mt-1">Metodologia prática para ciências naturais</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Ciências</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO
                      </span>
                    </td>
                    <td className="px-6 py-5"><span className="text-sm font-mono text-on-surface-variant">15 nov 2023</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors" title="Editar">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors" title="Excluir">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Álgebra Linear para o Ensino Médio</span>
                        <span className="text-xs text-on-surface-variant mt-1">Série avançada para turmas do 3º ano</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Matemática</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO
                      </span>
                    </td>
                    <td className="px-6 py-5"><span className="text-sm font-mono text-on-surface-variant">24 out 2023</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors" title="Editar">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors" title="Excluir">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">A Floresta Amazônica: Biodiversidade e Crise Climática</span>
                        <span className="text-xs text-on-surface-variant mt-1">Módulo interdisciplinar de geografia e ciências</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Geografia</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>RASCUNHO
                      </span>
                    </td>
                    <td className="px-6 py-5"><span className="text-sm font-mono text-on-surface-variant">12 nov 2023</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors" title="Editar">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors" title="Excluir">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Literatura Portuguesa: O legado de Machado de Assis</span>
                        <span className="text-xs text-on-surface-variant mt-1">Realismo e crítica social no Brasil do século XIX</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Português</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-400/10 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></span>ARQUIVADO
                      </span>
                    </td>
                    <td className="px-6 py-5"><span className="text-sm font-mono text-on-surface-variant">05 set 2023</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors" title="Editar">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors" title="Excluir">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Paginação inline */}
            <div className="px-6 py-4 bg-surface-container-low/30 border-t border-surface-container-high flex justify-between items-center text-xs font-bold text-on-surface-variant rounded-b-xl">
              <span>Exibindo 1–4 de 34 artigos</span>
              <div className="flex gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">2</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">3</button>
                <span className="w-7 h-7 flex items-center justify-center">…</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">9</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Estado 2: Com filtros visíveis */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estado com filtros visíveis — filter_list ativo</p>

          <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-visible">
            {/* Header da tabela */}
            <div className="px-6 py-4 bg-surface-container flex justify-between items-center rounded-t-xl">
              <h3 className="font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary/60 text-lg">article</span>
                Artigos
              </h3>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors" title="Novo post">
                  <span className="material-symbols-outlined">add</span>
                </button>
                {/* filter_list — ativo (teal) */}
                <button className="p-2 bg-surface-container-high rounded-lg text-secondary transition-colors" title="Filtrar">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                {/* more_vert — dropdown aberto */}
                <div className="relative">
                  <button className="p-2 bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" title="Linhas por página">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                  {/* Dropdown rows per page */}
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl shadow-on-surface/10 border border-outline-variant/20 overflow-hidden z-50">
                    <p className="px-4 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Linhas por página</p>
                    <button className="w-full text-left px-4 py-2.5 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors">10 por página</button>
                    <button className="w-full text-left px-4 py-2.5 text-sm font-bold text-primary bg-surface-container-low transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">check</span>25 por página
                    </button>
                    <button className="w-full text-left px-4 py-2.5 text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors">50 por página</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Linha de filtros */}
            <div className="px-6 py-3 bg-surface-container/40 border-b border-surface-container-high flex flex-wrap gap-3 items-end">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Busca</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                  <input
                    type="text"
                    defaultValue="horta"
                    className="bg-surface-container-low border-none rounded-xl pl-9 pr-4 py-2 text-sm w-48 focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Disciplina</label>
                <select defaultValue="ciencias" className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface">
                  <option value="">Todas</option>
                  <option value="matematica">Matemática</option>
                  <option value="portugues">Português</option>
                  <option value="ciencias">Ciências</option>
                  <option value="historia">História</option>
                  <option value="geografia">Geografia</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</label>
                <select defaultValue="PUBLISHED" className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface">
                  <option value="">Todos</option>
                  <option value="PUBLISHED">Publicado</option>
                  <option value="DRAFT">Rascunho</option>
                  <option value="ARCHIVED">Arquivado</option>
                </select>
              </div>
              <button className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-base">close</span>
                Limpar filtros
              </button>
            </div>

            {/* Tabela (mesmos dados) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Título</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Disciplina</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant">Última edição</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  <tr className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">Horta Escolar: Laboratório vivo para o ensino fundamental</span>
                        <span className="text-xs text-on-surface-variant mt-1">Metodologia prática para ciências naturais</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Ciências</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>PUBLICADO
                      </span>
                    </td>
                    <td className="px-6 py-5"><span className="text-sm font-mono text-on-surface-variant">15 nov 2023</span></td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-surface-container-low/30 border-t border-surface-container-high flex justify-between items-center text-xs font-bold text-on-surface-variant rounded-b-xl">
              <span>1 resultado encontrado</span>
              <div className="flex gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors opacity-40 cursor-not-allowed">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors opacity-40 cursor-not-allowed">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Notas de implementação */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Notas de implementação</p>
          <div className="bg-white rounded-xl p-6 space-y-3 text-sm text-on-surface-variant">
            <p><span className="font-bold text-primary">filter_list:</span> toggle que mostra/oculta a linha de filtros. Quando ativo, o ícone fica com fundo <code className="bg-slate-100 px-1 rounded">surface-container-high</code> e cor <code className="bg-slate-100 px-1 rounded">text-secondary</code>.</p>
            <p><span className="font-bold text-primary">more_vert:</span> dropdown com opções de linhas por página (10, 25, 50). A opção ativa tem fundo <code className="bg-slate-100 px-1 rounded">surface-container-low</code> e ícone <code className="bg-slate-100 px-1 rounded">check</code>.</p>
            <p><span className="font-bold text-primary">Ações (edit/delete):</span> visíveis apenas no hover da linha via <code className="bg-slate-100 px-1 rounded">group-hover:opacity-100</code>. Em mobile, sempre visíveis.</p>
            <p><span className="font-bold text-primary">Filtros:</span> os parâmetros mapeiam para query params da API: <code className="bg-slate-100 px-1 rounded">q</code> → busca por texto, <code className="bg-slate-100 px-1 rounded">discipline_id</code> → disciplina, <code className="bg-slate-100 px-1 rounded">status</code> → PUBLISHED/DRAFT/ARCHIVED.</p>
          </div>
        </section>

      </div>
    </>
  )
}
