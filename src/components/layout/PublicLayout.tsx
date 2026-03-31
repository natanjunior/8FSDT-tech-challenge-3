import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

interface PublicLayoutProps {
  children: React.ReactNode
  activeDiscipline?: string
  activeSection?: 'grupo'
  wide?: boolean // skip max-w-4xl for full-width pages like home
}

export function PublicLayout({ children, activeDiscipline, activeSection, wide }: PublicLayoutProps) {
  return (
    <>
      <Header activeDiscipline={activeDiscipline} />
      <Sidebar activeDiscipline={activeDiscipline} activeSection={activeSection} />
      <div className="lg:ml-64">
        <main className={`px-8 lg:px-16 py-12 min-h-[calc(100vh-5rem)] ${wide ? '' : 'max-w-4xl mx-auto'}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
