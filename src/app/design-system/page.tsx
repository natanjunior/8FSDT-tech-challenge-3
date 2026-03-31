import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const DS_SECTIONS = [
  {
    title: 'Fundamentos',
    items: [
      { label: 'Princípios', href: '/design-system' },
      { label: 'Cores', href: '/design-system/cores' },
      { label: 'Tipografia', href: '/design-system/tipografia' },
      { label: 'Ícones', href: '/design-system/icones' },
    ],
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Button', href: '/design-system/button' },
      { label: 'Input', href: '/design-system/input' },
      { label: 'Badge', href: '/design-system/badge' },
      { label: 'PostCard', href: '/design-system/post-card' },
      { label: 'DataTable', href: '/design-system/data-table' },
    ],
  },
]

function DSSidebar() {
  return (
    <aside
      id="ds-sidebar"
      className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest pt-20 flex flex-col z-40 hidden lg:flex"
    >
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {DS_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2 px-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Botão "Blog" no rodapé — substitui o "Criar Post" */}
      <div className="shrink-0 p-4 border-t border-surface-container-low">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r cta-gradient text-white font-semibold text-sm"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            arrow_back
          </span>
          Voltar ao Blog
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
        <main className="px-8 lg:px-16 py-12 max-w-4xl mx-auto min-h-screen">
          <header className="mb-10">
            <h1 className="text-4xl font-black text-primary tracking-tight mb-3">
              The Academic Curator
            </h1>
            <p className="text-on-surface-variant text-lg">
              Design system do EduBlog — princípios, tokens e componentes.
            </p>
          </header>

          {/* Seção de Princípios */}
          <section className="space-y-8">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 p-8">
              <h2 className="text-xl font-bold text-on-surface mb-4">Princípios Visuais</h2>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                  <span><strong className="text-on-surface">Sem bordas 1px sólidas</strong> — separação por cor de fundo, nunca por borda.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                  <span><strong className="text-on-surface">Sem preto puro</strong> — texto sempre em <code className="font-mono text-sm bg-surface-container-low px-1 rounded">text-on-surface (#111C2D)</code>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                  <span><strong className="text-on-surface">Botão primary com gradiente</strong> — <code className="font-mono text-sm bg-surface-container-low px-1 rounded">cta-gradient</code>. Nunca cor sólida.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                  <span><strong className="text-on-surface">Glassmorphism no header</strong> — <code className="font-mono text-sm bg-surface-container-low px-1 rounded">bg-slate-50/80 backdrop-blur-md</code>.</span>
                </li>
              </ul>
            </div>

            {/* Paleta de cores */}
            <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 p-8">
              <h2 className="text-xl font-bold text-on-surface mb-6">Paleta de Cores</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'primary', hex: '#022448', cls: 'bg-primary' },
                  { name: 'secondary', hex: '#006A61', cls: 'bg-secondary' },
                  { name: 'surface', hex: '#F9F9FF', cls: 'bg-surface border border-surface-container-low' },
                  { name: 'on-surface', hex: '#111C2D', cls: 'bg-on-surface' },
                  { name: 'error', hex: '#DC2626', cls: 'bg-error' },
                  { name: 'secondary-container', hex: '#86F2E4', cls: 'bg-secondary-container' },
                ].map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${color.cls} shrink-0`} />
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{color.name}</p>
                      <p className="text-xs font-mono text-on-surface-variant">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
