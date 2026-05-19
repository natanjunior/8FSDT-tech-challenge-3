export default function CardPage() {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Card</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Padrão de card usado em todas as interfaces admin. Mesmo shell, conteúdo variável. Três variantes de header: padrão, perigo e sem header.</p>
      </div>

      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Padrão de layout de página */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Padrão de layout de página</p>
          <div className="bg-white rounded-xl p-6 text-sm text-on-surface-variant space-y-3">
            <p>Todas as páginas com sidebar seguem a estrutura:</p>
            <pre className="bg-slate-50 rounded-xl p-4 text-xs overflow-x-auto text-on-surface"><code>{`[sidebar w-64 fixo] | [conteúdo lg:ml-64]

Dentro do conteúdo, dois modos:

1. Largura total (dashboard, busca)
   main.px-8.lg:px-16.py-12  (sem max-w)

2. Largura limitada (artigo, criação de post)
   main.px-8.lg:px-16.py-12.max-w-4xl.mx-auto

3. Main + coluna opcional (edição de post — único caso até agora)
   div.flex.gap-8.px-8.lg:px-16.py-12.max-w-[76rem].mx-auto
     main.flex-1.min-w-0.max-w-4xl   ← formulário (56rem)
     aside.w-64.shrink-0.sticky.top-24  ← info + perigo (16rem)
   76rem = 56rem (main) + 2rem (gap-8) + 16rem (aside) + 2rem folga`}</code></pre>
            <p>A coluna opcional (<code className="bg-slate-100 px-1 rounded">aside.w-64</code>) não é fixada à direita da viewport — ela flutua naturalmente ao lado do <code className="bg-slate-100 px-1 rounded">main</code> no flex container.</p>
          </div>
        </section>

        {/* Anatomia */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia</p>
          <div className="max-w-xl space-y-3 bg-white rounded-xl p-8">
            <div className="relative border-2 border-dashed border-slate-200 rounded-xl overflow-visible">
              {/* annotation: shell */}
              <div className="absolute -top-3 left-4 text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">shell: bg-surface-container-lowest · rounded-xl · shadow-xl shadow-sky-950/5</div>
              {/* Card header */}
              <div className="px-6 py-4 bg-surface-container flex items-center rounded-t-xl border-b border-surface-container-high relative">
                <div className="absolute -top-3 right-4 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">header: bg-surface-container · border-b surface-container-high</div>
                <h3 className="font-bold text-primary flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary/60 text-base">article</span>
                  Título do Card
                </h3>
                {/* Ações opcionais no header */}
                <div className="ml-auto flex items-center gap-1">
                  <button className="p-1.5 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">more_vert</span>
                  </button>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 relative">
                <div className="absolute -bottom-3 right-4 text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded">body: padding livre — p-5, p-6, p-8</div>
                <p className="text-sm text-on-surface-variant">Conteúdo do card — sem restrição de altura ou estrutura interna.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 1: Padrão — header com ícone */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Padrão — com ícone no header</p>
          <p className="text-xs text-on-surface-variant">Usado em: tabela de artigos, formulário de dados, card de informações.</p>
          <div className="max-w-lg">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="px-6 py-4 bg-surface-container flex items-center rounded-t-xl border-b border-surface-container-high">
                <h3 className="font-bold text-primary flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary/60 text-base">info</span>
                  Informações
                </h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-sm text-on-surface-variant">Conteúdo livre — metadados, listas, formulários…</p>
                <div className="h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-xs text-on-surface-variant">— corpo —</div>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 2: Com ações no header */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Com ações no header</p>
          <p className="text-xs text-on-surface-variant">Usado em: tabela de artigos (+ / filter_list / more_vert), tabelas com controles.</p>
          <div className="max-w-lg">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="px-6 py-4 bg-surface-container flex items-center rounded-t-xl border-b border-surface-container-high">
                <h3 className="font-bold text-primary flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary/60 text-base">article</span>
                  Artigos
                </h3>
                <div className="ml-auto flex items-center gap-1">
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors">
                    <span className="material-symbols-outlined text-base">add</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">filter_list</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined text-base">more_vert</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-xs text-on-surface-variant">— tabela —</div>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 3: Perigo */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Perigo — zona destrutiva</p>
          <p className="text-xs text-on-surface-variant">Usado em: Zona de perigo na edição de artigos. Borda e header ligeiramente avermelhados.</p>
          <div className="max-w-lg">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden border border-error/10">
              <div className="px-6 py-4 bg-red-50/80 flex items-center rounded-t-xl border-b border-error/10">
                <h3 className="font-bold text-error flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-base">warning</span>
                  Zona de perigo
                </h3>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm text-on-surface-variant">A exclusão é permanente e não pode ser desfeita.</p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-error/30 text-error text-sm font-bold rounded-xl hover:bg-error-container/30 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-lg">delete</span>
                  Excluir artigo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Variante 4: Sem header */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Sem header — conteúdo direto</p>
          <p className="text-xs text-on-surface-variant">Usado em: stats cards do dashboard, post cards na home. Shell igual, sem a faixa de header.</p>
          <div className="max-w-xs">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-green-500">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Publicados</span>
              <span className="text-3xl font-black text-primary mt-3">24</span>
            </div>
          </div>
        </section>

        {/* Tabela de tokens */}
        <section className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tokens do card</p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Parte</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Classe Tailwind</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant">Hex / Token</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-mono">
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Shell (fundo)</td>
                  <td className="px-6 py-4 text-on-surface-variant">bg-surface-container-lowest</td>
                  <td className="px-6 py-4 text-on-surface-variant">#ffffff</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Shell (borda)</td>
                  <td className="px-6 py-4 text-on-surface-variant">rounded-xl shadow-xl shadow-sky-950/5</td>
                  <td className="px-6 py-4 text-on-surface-variant">sem borda sólida — sombra ambiente</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Header (fundo)</td>
                  <td className="px-6 py-4 text-on-surface-variant">bg-surface-container</td>
                  <td className="px-6 py-4 text-on-surface-variant">#e7eeff</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Header (divisor)</td>
                  <td className="px-6 py-4 text-on-surface-variant">border-b border-surface-container-high</td>
                  <td className="px-6 py-4 text-on-surface-variant">#dee8ff</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Título do header</td>
                  <td className="px-6 py-4 text-on-surface-variant">font-bold text-primary text-sm</td>
                  <td className="px-6 py-4 text-on-surface-variant">#022448</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Ícone do header</td>
                  <td className="px-6 py-4 text-on-surface-variant">text-primary/60 text-base</td>
                  <td className="px-6 py-4 text-on-surface-variant">#022448 a 60%</td>
                </tr>
                <tr className="bg-red-50/40">
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Header perigo (fundo)</td>
                  <td className="px-6 py-4 text-on-surface-variant">bg-red-50/80</td>
                  <td className="px-6 py-4 text-on-surface-variant">vermelho muito suave</td>
                </tr>
                <tr className="bg-red-50/40">
                  <td className="px-6 py-4 font-sans font-medium text-sm text-on-surface">Shell perigo (borda)</td>
                  <td className="px-6 py-4 text-on-surface-variant">border border-error/10</td>
                  <td className="px-6 py-4 text-on-surface-variant">borda ghost avermelhada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  )
}
