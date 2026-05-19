import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DSSidebar } from '@/components/layout/DSSidebar'

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <DSSidebar />
      <div className="lg:ml-64">
        <main className="px-8 lg:px-16 py-12 max-w-6xl mx-auto space-y-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
