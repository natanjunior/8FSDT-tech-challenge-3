import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

function DSSidebar() {
  return (
    <aside id="main-sidebar" className="flex flex-col w-64 fixed left-0 top-0 h-screen bg-slate-50 shadow-2xl shadow-sky-950/10 z-40 border-r border-outline-variant/20 -translate-x-full lg:translate-x-0 transition-transform duration-300">
      <div className="h-[72px] shrink-0" />
      <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 py-2">
        <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Fundamentos</p>
        <Link
          href="/design-system"
          className="flex items-center px-4 py-2.5 bg-teal-50 text-teal-800 font-semibold rounded-lg cursor-pointer"
        >
          <span className="material-symbols-outlined mr-3 text-base">palette</span>
          <span className="text-sm font-semibold">Princípios</span>
        </Link>

        <p className="px-4 pt-5 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Componentes</p>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">web_asset</span>
          <span className="text-sm">Header</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">side_navigation</span>
          <span className="text-sm">Sidebar</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">article</span>
          <span className="text-sm">Post Card</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">label</span>
          <span className="text-sm">Status Badge</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">school</span>
          <span className="text-sm">Discipline Badge</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">person</span>
          <span className="text-sm">Author Id</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">crop_square</span>
          <span className="text-sm">Card</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">chevron_right</span>
          <span className="text-sm">Breadcrumb</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">bar_chart</span>
          <span className="text-sm">Stats Card</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">table</span>
          <span className="text-sm">Posts Table</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">warning</span>
          <span className="text-sm">Confirm Modal</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">smart_button</span>
          <span className="text-sm">Button</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">more_horiz</span>
          <span className="text-sm">Pagination</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">forum</span>
          <span className="text-sm">Icon Count</span>
        </Link>
        <Link href="/design-system" className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1 cursor-pointer">
          <span className="material-symbols-outlined mr-3 text-base">grid_on</span>
          <span className="text-sm">Data Table</span>
        </Link>
      </nav>

      <div className="px-4 py-4 border-t border-slate-200 shrink-0">
        <Link
          href="/"
          className="w-full bg-gradient-to-r from-secondary to-on-secondary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">rss_feed</span>
          <span className="text-sm">Blog</span>
        </Link>
      </div>
    </aside>
  )
}

export default function DesignSystemPage() {
  return (
    <>
      <Header />
      <DSSidebar />
      <div className="lg:ml-64">
        <main className="px-8 lg:px-16 py-12 max-w-4xl mx-auto space-y-16">

          {/* Page header */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">Design System</p>
            <h1 className="text-4xl font-black text-primary tracking-tight leading-tight">Princípios</h1>
            <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
              Regras visuais, tokens de design e decisões de componentes que guiam a implementação do frontend.
              Fonte de verdade para todo desenvolvimento de UI neste projeto.
            </p>
          </div>

          {/* 1. North Star */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">1. North Star: &ldquo;The Academic Curator&rdquo;</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-sky-950/5 space-y-4">
              <p className="text-base leading-relaxed text-on-surface">
                Experiência editorial de prestígio. Foge da estética &ldquo;template governamental&rdquo;. Usa <strong>assimetria intencional</strong>, sobreposição tonal e tipografia de alto contraste.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Referência: biblioteca física + redação de jornal moderno.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Assimetria intencional', 'Sobreposição tonal', 'Tipografia alto contraste', 'Sem drop shadows pesadas'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs font-medium text-on-surface">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Paleta de Cores */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">2. Paleta de Cores</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>

            {/* Token swatches — 8 items matching prototype */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#022448]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">primary</p>
                  <p className="text-xs font-mono text-on-surface-variant">#022448</p>
                  <p className="text-xs text-on-surface-variant">Autoridade, hero, destaque</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#1E3A5F]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">primary_container</p>
                  <p className="text-xs font-mono text-on-surface-variant">#1E3A5F</p>
                  <p className="text-xs text-on-surface-variant">Gradiente CTAs, hover</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#006A61]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">secondary</p>
                  <p className="text-xs font-mono text-on-surface-variant">#006A61</p>
                  <p className="text-xs text-on-surface-variant">Botões, links ativos</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#86F2E4]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">secondary_container</p>
                  <p className="text-xs font-mono text-on-surface-variant">#86F2E4</p>
                  <p className="text-xs text-on-surface-variant">Badges teal, destaques</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#F9F9FF] border border-surface-container" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">surface</p>
                  <p className="text-xs font-mono text-on-surface-variant">#F9F9FF</p>
                  <p className="text-xs text-on-surface-variant">Fundo base da página</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#F0F3FF] border border-surface-container" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">surface_container_low</p>
                  <p className="text-xs font-mono text-on-surface-variant">#F0F3FF</p>
                  <p className="text-xs text-on-surface-variant">Seções, fundo tabelas</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#111C2D]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">on_surface</p>
                  <p className="text-xs font-mono text-on-surface-variant">#111C2D</p>
                  <p className="text-xs text-on-surface-variant">Texto principal</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                <div className="h-20 bg-[#94A3B8]" />
                <div className="p-4 space-y-0.5">
                  <p className="text-xs font-bold text-on-surface">on_surface_variant</p>
                  <p className="text-xs font-mono text-on-surface-variant">#94A3B8</p>
                  <p className="text-xs text-on-surface-variant">Texto secundário</p>
                </div>
              </div>
            </div>

            {/* Status colors */}
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="bg-surface-container border-b border-surface-container-high px-6 py-4">
                <p className="text-sm font-bold text-on-surface">Cores de Status</p>
              </div>
              <div className="p-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ color: '#22C55E', background: 'rgba(34,197,94,0.10)' }}>PUBLISHED</span>
                  <div><p className="text-xs font-mono text-on-surface-variant">#22C55E · verde 10%</p></div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ color: '#EAB308', background: 'rgba(234,179,8,0.10)' }}>DRAFT</span>
                  <div><p className="text-xs font-mono text-on-surface-variant">#EAB308 · amarelo 10%</p></div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-on-surface-variant bg-surface-container">ARCHIVED</span>
                  <div><p className="text-xs font-mono text-on-surface-variant">#94A3B8 · surface_variant</p></div>
                </div>
              </div>
            </div>

            {/* No-line rule */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 space-y-1">
              <p className="text-sm font-bold text-amber-900">Regra &ldquo;No-Line&rdquo;</p>
              <p className="text-sm text-amber-800">Bordas <code className="font-mono text-xs bg-amber-100 px-1 rounded">1px solid</code> para secionamento são <strong>proibidas</strong>. Use mudança de cor de fundo (<code className="font-mono text-xs bg-amber-100 px-1 rounded">surface_container_low</code> vs <code className="font-mono text-xs bg-amber-100 px-1 rounded">surface</code>) ou transição tonal.</p>
            </div>
          </section>

          {/* 3. Tipografia */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">3. Tipografia</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="bg-surface-container border-b border-surface-container-high px-6 py-4 flex items-center gap-2">
                <p className="text-sm font-bold text-on-surface">Inter — única família tipográfica</p>
              </div>
              <div className="divide-y divide-surface-container-low">
                <div className="px-6 py-5 flex items-baseline gap-6">
                  <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">display-lg</span>
                  <span style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', fontWeight: 800, lineHeight: 1, color: '#022448' }}>Título</span>
                  <span className="text-xs text-on-surface-variant ml-auto">3.5rem · -0.02em · Hero</span>
                </div>
                <div className="px-6 py-5 flex items-baseline gap-6">
                  <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">headline-lg</span>
                  <span className="text-3xl font-black text-primary">Seção</span>
                  <span className="text-xs text-on-surface-variant ml-auto">2rem · Headers</span>
                </div>
                <div className="px-6 py-5 flex items-baseline gap-6">
                  <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">body-lg</span>
                  <span className="text-base text-on-surface leading-relaxed">Corpo do texto com line-height 1.6 para confortável leitura editorial.</span>
                  <span className="text-xs text-on-surface-variant ml-auto shrink-0">1rem · 1.6lh</span>
                </div>
                <div className="px-6 py-5 flex items-baseline gap-6">
                  <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">label-md</span>
                  <span className="text-sm font-bold text-on-surface">Label de formulário</span>
                  <span className="text-xs text-on-surface-variant ml-auto">bold · Forms</span>
                </div>
                <div className="px-6 py-5 flex items-baseline gap-6">
                  <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">monospace</span>
                  <span className="font-mono text-sm text-on-surface-variant">2026-03-29 · ID-00842</span>
                  <span className="text-xs text-on-surface-variant ml-auto">Timestamps, IDs</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Elevação e Profundidade */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">4. Elevação e Profundidade</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">Sem drop shadows tradicionais. Separação via sobreposição de superfícies (tonal layering).</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-surface rounded-xl p-5 space-y-2 border border-surface-container">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Base</p>
                <p className="text-sm font-semibold text-on-surface">surface</p>
                <p className="text-xs text-on-surface-variant">Fundo da página. Nenhuma elevação.</p>
                <div className="font-mono text-xs text-on-surface-variant">bg-[#F9F9FF]</div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-5 space-y-2 shadow-xl shadow-sky-950/5">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Lift suave</p>
                <p className="text-sm font-semibold text-on-surface">surface_container_lowest</p>
                <p className="text-xs text-on-surface-variant">Cards, formulários, modais. Shadow 4%.</p>
                <div className="font-mono text-xs text-on-surface-variant">bg-white · shadow-sky-950/5</div>
              </div>
              <div className="relative rounded-xl p-5 space-y-2 overflow-hidden" style={{ background: 'rgba(249,249,255,0.80)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 32px rgba(17,28,45,0.06)' }}>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 to-primary/5" />
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Glassmorphism</p>
                <p className="text-sm font-semibold text-on-surface">Nav, overlays</p>
                <p className="text-xs text-on-surface-variant">surface 80% opacidade + backdrop-blur 12–20px.</p>
                <div className="font-mono text-xs text-on-surface-variant">bg-surface/80 · backdrop-blur</div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
              <p className="text-sm font-bold text-on-surface">Ghost border (acessibilidade)</p>
              <p className="text-sm text-on-surface-variant">
                <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">outline_variant</code> a <strong>20% de opacidade</strong>. Nunca 100% opaco.
                Aplica-se a inputs, cards secundários e separadores sutis.
              </p>
            </div>
          </section>

          {/* 5. Componentes */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">5. Componentes</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">

              {/* Button */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 space-y-3">
                <p className="text-sm font-bold text-on-surface">Botões</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-on-secondary-container text-white py-2.5 px-5 rounded-full text-sm font-bold">
                    <span className="material-symbols-outlined text-sm">add</span>Primary
                  </span>
                  <button className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/20">Secondary</button>
                </div>
                <p className="text-xs text-on-surface-variant">Primary: gradiente teal · Secondary: ghost, outline_variant 20%</p>
              </div>

              {/* Form inputs */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 space-y-3">
                <p className="text-sm font-bold text-on-surface">Form Inputs</p>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-on-surface">Label</label>
                  <input type="text" placeholder="Placeholder em on_surface_variant" className="w-full px-4 py-2.5 rounded-full bg-surface-container-low border border-outline-variant/20 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/40 transition-colors" />
                </div>
                <p className="text-xs text-on-surface-variant">Fundo surface_container_low · ghost border → primary no focus</p>
              </div>

              {/* Search bar */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 space-y-3">
                <p className="text-sm font-bold text-on-surface">Search Bar</p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
                  <input type="text" placeholder="Buscar artigos…" className="w-full pl-12 pr-4 py-3 rounded-full bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none" />
                </div>
                <p className="text-xs text-on-surface-variant">Full-width · sem border box · bg surface_container_low · radius 0.75rem</p>
              </div>

              {/* Status badge */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xl shadow-sky-950/5 space-y-3">
                <p className="text-sm font-bold text-on-surface">Status Badge / Pills</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ color: '#22C55E', background: 'rgba(34,197,94,0.10)' }}>PUBLISHED</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ color: '#EAB308', background: 'rgba(234,179,8,0.10)' }}>DRAFT</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-on-surface-variant bg-surface-container">ARCHIVED</span>
                </div>
                <p className="text-xs text-on-surface-variant">border-radius: 9999px · ver tabela de cores de status</p>
              </div>

            </div>
          </section>

          {/* 6. Regras de Ouro */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">6. Regras de Ouro</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                  <p className="text-sm font-bold text-emerald-900">Fazer</p>
                </div>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">→</span>Whitespace como elemento estrutural</li>
                  <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">→</span>Contraste mínimo 4.5:1 em todo texto</li>
                  <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">→</span><code className="font-mono text-xs bg-emerald-100 px-1 rounded">border-radius: 0.75rem</code> em cards e containers</li>
                  <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">→</span>Glassmorphism para nav e overlays flutuantes</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                  <p className="text-sm font-bold text-red-900">Não fazer</p>
                </div>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex gap-2"><span className="text-red-400 mt-0.5">×</span>Bordas 1px sólidas escuras para separar seções</li>
                  <li className="flex gap-2"><span className="text-red-400 mt-0.5">×</span>Preto puro em texto — usar <code className="font-mono text-xs bg-red-100 px-1 rounded">#111C2D</code></li>
                  <li className="flex gap-2"><span className="text-red-400 mt-0.5">×</span>Drop shadows pesadas</li>
                  <li className="flex gap-2"><span className="text-red-400 mt-0.5">×</span>Poluir a Navigation Bar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Breakpoints Responsivos */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">7. Breakpoints Responsivos</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="bg-surface-container border-b border-surface-container-high px-6 py-4">
                <p className="text-sm font-bold text-on-surface">Grid &amp; Tipografia por breakpoint</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-surface-container-low">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Breakpoint</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Largura</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Grid</th>
                      <th className="text-left px-6 py-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Tipografia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-surface-container-low">
                      <td className="px-6 py-4 font-semibold text-on-surface">Mobile</td>
                      <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">375px</td>
                      <td className="px-6 py-4 text-on-surface-variant">1 coluna, gutter 16px</td>
                      <td className="px-6 py-4 text-on-surface-variant">Display → Headline-lg</td>
                    </tr>
                    <tr className="border-t border-surface-container-low">
                      <td className="px-6 py-4 font-semibold text-on-surface">Tablet</td>
                      <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">768px</td>
                      <td className="px-6 py-4 text-on-surface-variant">2 colunas</td>
                      <td className="px-6 py-4 text-on-surface-variant">—</td>
                    </tr>
                    <tr className="border-t border-surface-container-low">
                      <td className="px-6 py-4 font-semibold text-on-surface">Desktop</td>
                      <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">1280px</td>
                      <td className="px-6 py-4 text-on-surface-variant">12 colunas assimétricas, margem até 120px</td>
                      <td className="px-6 py-4 text-on-surface-variant">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 8. Tokens Tailwind */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">8. Tokens Tailwind</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <p className="text-sm text-on-surface-variant">Mapeamento dos tokens do design system para <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">tailwind.config.ts</code>:</p>
            <div className="bg-[#022448] rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm text-[#86F2E4] font-mono leading-relaxed">
{`colors: {
  primary: {
    DEFAULT: '#022448',
    container: '#1E3A5F',
  },
  secondary: {
    DEFAULT: '#006A61',
    container: '#86F2E4',
  },
  surface: {
    DEFAULT: '#F9F9FF',
    low: '#F0F3FF',
    lowest: '#FFFFFF',
  },
  'on-surface': '#111C2D',
  'on-surface-variant': '#94A3B8',
},
borderRadius: {
  card: '0.75rem',
},`}
              </pre>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
