import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

interface PublicLayoutProps {
  children: React.ReactNode
  activeDiscipline?: string
  activeSection?: 'grupo'
}

export function PublicLayout({ children, activeDiscipline, activeSection }: PublicLayoutProps) {
  return (
    <>
      <Header activeDiscipline={activeDiscipline} />
      <Sidebar activeDiscipline={activeDiscipline} activeSection={activeSection} />
      <div className="lg:ml-64">
        <main className="px-8 lg:px-16 py-12 max-w-4xl mx-auto min-h-[calc(100vh-5rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
