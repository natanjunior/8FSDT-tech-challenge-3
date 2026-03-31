import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const DS_COMPONENTS = [
  { label: 'Header',        href: '/design-system', icon: 'web_asset' },
  { label: 'Sidebar',       href: '/design-system', icon: 'side_navigation' },
  { label: 'Footer',        href: '/design-system', icon: 'bottom_panel_open' },
  { label: 'Button',        href: '/design-system', icon: 'smart_button' },
  { label: 'Input',         href: '/design-system', icon: 'text_fields' },
  { label: 'Badge',         href: '/design-system', icon: 'label' },
  { label: 'PostCard',      href: '/design-system', icon: 'article' },
  { label: 'AuthorId',      href: '/design-system', icon: 'person' },
  { label: 'SearchBar',     href: '/design-system', icon: 'search' },
  { label: 'StatsCard',     href: '/design-system', icon: 'bar_chart' },
  { label: 'DataTable',     href: '/design-system', icon: 'grid_on' },
  { label: 'ConfirmModal',  href: '/design-system', icon: 'help' },
  { label: 'Pagination',    href: '/design-system', icon: 'first_page' },
  { label: 'Breadcrumb',    href: '/design-system', icon: 'chevron_right' },
  { label: 'IconCount',     href: '/design-system', icon: 'tag' },
]

const PALETTE = [
  { name: 'primary',                hex: '#022448', desc: 'Autoridade, hero, destaque' },
  { name: 'primary-container',      hex: '#1E3A5F', desc: 'Gradiente CTAs, hover' },
  { name: 'secondary',              hex: '#006A61', desc: 'Botões, links ativos' },
  { name: 'secondary-container',    hex: '#86F2E4', desc: 'Chips, highlights' },
  { name: 'on-secondary-container', hex: '#006F66', desc: 'Texto sobre chips' },
  { name: 'surface',                hex: '#F9F9FF', desc: 'Background principal' },
  { name: 'surface-container-low',  hex: '#F0F3FF', desc: 'Cards de nível 1' },
  { name: 'surface-container',      hex: '#E7EEFF', desc: 'Headers de tabela' },
  { name: 'surface-container-high', hex: '#DEE8FF', desc: 'Hover, tabs ativas' },
  { name: 'surface-container-lowest', hex: '#FFFFFF', desc: 'Cards, modais' },
  { name: 'on-surface',             hex: '#111C2D', desc: 'Texto principal' },
  { name: 'on-surface-variant',     hex: '#43474E', desc: 'Texto secundário' },
  { name: 'outline',                hex: '#74777F', desc: 'Ícones, bordas sutis' },
  { name: 'outline-variant',        hex: '#C4C6CF', desc: 'Divisores, bordas fracas' },
  { name: 'error',                  hex: '#BA1A1A', desc: 'Estados de erro' },
  { name: 'error-container',        hex: '#FFDAD6', desc: 'Fundo de erro' },
]

function DSSidebar() {
  return (
    <aside className="flex flex-col w-64 fixed left-0 top-0 h-screen bg-slate-50 shadow-2xl shadow-sky-950/10 z-40 border-r border-outline-variant/20 -translate-x-full lg:translate-x-0 transition-transform duration-300">
      <div className="h-[72px] shrink-0" />
      <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 py-2">
        <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Fundamentos</p>
        <Link
          href="/design-system"
          className="flex items-center px-4 py-2.5 bg-teal-50 text-teal-800 font-semibold rounded-lg"
        >
          <span className="material-symbols-outlined mr-3 text-base">palette</span>
          <span className="text-sm font-semibold">Princípios</span>
        </Link>

        <p className="px-4 pt-5 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Componentes</p>
        {DS_COMPONENTS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center px-4 py-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-all hover:translate-x-1"
          >
            <span className="material-symbols-outlined mr-3 text-base">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-slate-200 shrink-0">
        <Link
          href="/"
          className="w-full bg-gradient-to-r from-secondary to-on-secondary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:opacity-90 transition-all active:scale-95"
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
        <main className="px-8 lg:px-16 py-12 max-w-4xl mx-auto min-h-screen space-y-16">

          {/* Page header */}
          <header>
            <h1 className="text-5xl font-extrabold text-primary leading-[1.1] tracking-tighter mb-4">The Academic Curator</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Design system do EduBlog — princípios, tokens e componentes.
            </p>
          </header>

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PALETTE.map((color) => (
                <div key={color.name} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl shadow-sky-950/5">
                  <div className="h-20" style={{ backgroundColor: color.hex }} />
                  <div className="p-4 space-y-0.5">
                    <p className="text-xs font-bold text-on-surface">{color.name}</p>
                    <p className="text-xs font-mono text-on-surface-variant">{color.hex}</p>
                    <p className="text-xs text-on-surface-variant">{color.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status colors */}
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="bg-surface-container border-b border-surface-container-high px-6 py-4">
                <p className="text-sm font-bold text-on-surface">Cores de Status</p>
              </div>
              <div className="p-6 flex flex-wrap gap-3">
                {[
                  { label: 'PUBLICADO', classes: 'text-green-600 bg-green-500/10' },
                  { label: 'RASCUNHO',  classes: 'text-yellow-600 bg-yellow-500/10' },
                  { label: 'ARQUIVADO', classes: 'text-slate-500 bg-slate-400/10' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${s.classes}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* No-line rule */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 space-y-1">
              <p className="text-sm font-bold text-amber-900">Regra &ldquo;No-Line&rdquo;</p>
              <p className="text-sm text-amber-800">Bordas <code className="font-mono text-xs bg-amber-100 px-1 rounded">1px solid</code> para secionamento são <strong>proibidas</strong>. Use mudança de cor de fundo (<code className="font-mono text-xs bg-amber-100 px-1 rounded">surface-container-low</code>) ou transição tonal.</p>
            </div>
          </section>

          {/* 3. Tipografia */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">3. Tipografia</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="bg-surface-container border-b border-surface-container-high px-6 py-4">
                <p className="text-sm font-bold text-on-surface">Inter — única família tipográfica</p>
              </div>
              <div className="divide-y divide-surface-container-low">
                {[
                  { scale: 'display-lg',   cls: 'text-on-surface', style: { fontSize: '3.5rem', letterSpacing: '-0.02em', fontWeight: 800, lineHeight: 1, color: '#022448' }, sample: 'Título Hero', note: '3.5rem · -0.02em · Hero' },
                  { scale: 'headline-lg',  cls: 'text-3xl font-black text-primary', style: undefined, sample: 'Seção Principal', note: '2rem · Headers' },
                  { scale: 'body-lg',      cls: 'text-base text-on-surface leading-relaxed', style: undefined, sample: 'Corpo do texto com line-height 1.6 para confortável leitura editorial.', note: '1rem · 1.6lh' },
                  { scale: 'label-md',     cls: 'text-sm font-bold text-on-surface', style: undefined, sample: 'Label de formulário', note: 'bold · Forms' },
                  { scale: 'monospace',    cls: 'font-mono text-sm text-on-surface-variant', style: undefined, sample: '2026-03-31 · ID-00842', note: 'Timestamps, IDs' },
                ].map((row) => (
                  <div key={row.scale} className="px-6 py-5 flex items-baseline gap-6">
                    <span className="text-xs font-mono text-on-surface-variant w-28 shrink-0">{row.scale}</span>
                    <span className={row.cls} style={row.style}>{row.sample}</span>
                    <span className="text-xs text-on-surface-variant ml-auto shrink-0">{row.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Elevação e Profundidade */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">4. Elevação e Profundidade</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-sky-950/5 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Nível 0', cls: 'bg-surface-container-low', note: 'Fundo da página' },
                  { label: 'Nível 1', cls: 'bg-surface-container-lowest shadow-md shadow-sky-950/5', note: 'Cards, modais' },
                  { label: 'Nível 2', cls: 'bg-surface-container-lowest shadow-xl shadow-sky-950/5', note: 'Drawers, dropdowns' },
                  { label: 'Nível 3', cls: 'bg-white shadow-2xl shadow-on-surface/10', note: 'Toasts, tooltips' },
                ].map((level) => (
                  <div key={level.label} className={`${level.cls} rounded-xl p-6 text-center`}>
                    <p className="text-sm font-bold text-on-surface">{level.label}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{level.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant">Sombras usam <code className="font-mono text-xs bg-surface-container-low px-1 rounded">sky-950/5</code> para a paleta fria. Modais usam <code className="font-mono text-xs bg-surface-container-low px-1 rounded">on-surface/20</code> com <code className="font-mono text-xs bg-surface-container-low px-1 rounded">backdrop-blur-sm</code>.</p>
            </div>
          </section>

          {/* 5–8: Regras de Ouro, Breakpoints, Tokens */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">5. Regras de Ouro</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-sky-950/5">
              <ul className="space-y-3 text-on-surface-variant">
                {[
                  ['Sem 1px sólidas', 'Secionamento por cor de fundo, nunca por borda visível'],
                  ['Sem preto puro', 'Sempre text-on-surface (#111C2D), nunca #000000'],
                  ['Botão primary = gradiente', 'cta-gradient (90°, secondary → on-secondary-fixed-variant). Nunca cor sólida'],
                  ['Header glassmorphism', 'bg-slate-50/80 backdrop-blur-md shadow-xl shadow-sky-950/5'],
                  ['Erro no input = exception', 'bg-error-container/20 border border-error/30 — única borda permitida em layout'],
                  ['Cards com editorial-shadow', 'shadow-xl shadow-sky-950/5 ou .editorial-shadow em cards de conteúdo'],
                  ['Sidebar drawer mobile', 'translate-x-0 / -translate-x-full, breakpoint lg (1024px)'],
                ].map(([rule, detail]) => (
                  <li key={rule} className="flex gap-3">
                    <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                    <span><strong className="text-on-surface">{rule}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">6. Breakpoints Responsivos</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
              <div className="divide-y divide-surface-container-low">
                {[
                  { bp: 'sm', px: '640px', use: 'Grid 2 colunas (PostCard, Grupo)' },
                  { bp: 'md', px: '768px', use: 'Nav horizontal no Header, grid 2 cols padrão' },
                  { bp: 'lg', px: '1024px', use: 'Sidebar visível, grid 3 colunas' },
                  { bp: 'xl', px: '1280px', use: 'Container max-w-[1440px] na Home' },
                ].map((row) => (
                  <div key={row.bp} className="px-6 py-4 flex items-center gap-6">
                    <span className="font-mono text-sm font-bold text-primary w-8">{row.bp}</span>
                    <span className="font-mono text-xs text-on-surface-variant w-20">{row.px}</span>
                    <span className="text-sm text-on-surface-variant">{row.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-primary tracking-tight">7. Tokens Tailwind (@theme)</h2>
              <div className="h-0.5 w-16 bg-secondary rounded-full" />
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-sky-950/5">
              <pre className="font-mono text-xs text-on-surface-variant leading-relaxed overflow-x-auto">
{`@theme {
  --color-primary: #022448;
  --color-secondary: #006a61;
  --color-on-surface: #111c2d;
  --color-on-surface-variant: #43474e;
  --color-error: #ba1a1a;
  --color-outline: #74777f;
  --color-outline-variant: #c4c6cf;
  --radius-DEFAULT: 0.125rem;
  --radius-xl: 0.5rem;
  --radius-full: 0.75rem;
}`}
              </pre>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
