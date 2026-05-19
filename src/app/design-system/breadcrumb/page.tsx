export default function BreadcrumbPage() {
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">Componente</p>
        <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Breadcrumb</h1>
        <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">Cabeçalho de seção do painel admin. Combina breadcrumb de navegação com título da página atual e subtítulo descritivo.</p>
      </div>

      <div className="bg-slate-200/40 rounded-2xl p-8 lg:p-12 space-y-16">

        {/* Estado 1: Raiz — /admin */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Raiz — <code className="bg-white px-1.5 py-0.5 rounded font-mono">/admin</code></p>
          <div className="bg-white rounded-xl p-8">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
                <span className="font-black text-2xl tracking-tight text-primary">Painel</span>
              </nav>
              <p className="text-sm text-on-surface-variant">Gerencie seus artigos e contribuições educacionais.</p>
            </div>
          </div>
        </section>

        {/* Estado 2: Criar post — /admin/posts/new */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Criar post — <code className="bg-white px-1.5 py-0.5 rounded font-mono">/admin/posts/new</code></p>
          <div className="bg-white rounded-xl p-8">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
                <a href="#" className="font-medium text-secondary hover:underline underline-offset-2 transition-colors">Painel</a>
                <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
                <span className="font-black text-2xl tracking-tight text-primary">Novo Artigo</span>
              </nav>
              <p className="text-sm text-on-surface-variant">Preencha os campos abaixo para publicar um novo artigo.</p>
            </div>
          </div>
        </section>

        {/* Estado 3: Editar post — /admin/posts/[id]/edit */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Editar post — <code className="bg-white px-1.5 py-0.5 rounded font-mono">{'/admin/posts/[id]/edit'}</code></p>
          <div className="bg-white rounded-xl p-8">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
                <a href="#" className="font-medium text-secondary hover:underline underline-offset-2 transition-colors">Painel</a>
                <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
                <span className="font-black text-2xl tracking-tight text-primary">Editar Artigo</span>
              </nav>
              <p className="text-sm text-on-surface-variant">Atualize o conteúdo e salve as alterações.</p>
            </div>
          </div>
        </section>

        {/* Anatomia */}
        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Anatomia</p>
          <div className="bg-white rounded-xl p-8 space-y-6">

            <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-6">
              {/* annotations */}
              <div className="absolute -top-3 left-8 text-[10px] font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded">link para /admin — text-secondary hover:underline</div>
              <div className="absolute -top-3 left-72 text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">chevron_right — text-outline</div>
              <div className="absolute -bottom-3 left-8 text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">página atual — text-2xl font-black text-primary (não clicável)</div>

              <nav className="flex items-center gap-2 text-sm mb-2" aria-label="Breadcrumb">
                <a href="#" className="font-medium text-secondary hover:underline underline-offset-2 transition-colors">Painel</a>
                <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
                <span className="font-black text-2xl tracking-tight text-primary">Editar Artigo</span>
              </nav>
              <p className="text-sm text-on-surface-variant">Subtítulo descritivo — text-sm text-on-surface-variant</p>
            </div>

            <div className="text-sm text-on-surface-variant space-y-2">
              <p><span className="font-bold text-primary">Raiz (/admin):</span> apenas o título grande sem link anterior — o usuário já está na raiz do admin.</p>
              <p><span className="font-bold text-primary">Subpáginas:</span> &quot;Painel&quot; como link clicável + separador chevron + título da página atual em destaque.</p>
              <p><span className="font-bold text-primary">Subtítulo:</span> sempre presente, descreve a ação ou contexto da tela.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
