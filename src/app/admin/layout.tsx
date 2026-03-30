import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { Footer } from '@/components/layout/Footer'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="lg:ml-64">
        <main className="min-h-[calc(100vh-5rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
