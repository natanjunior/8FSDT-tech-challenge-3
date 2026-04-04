'use client'

import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

interface PublicLayoutProps {
  children: React.ReactNode
  activeDiscipline?: string
  activeSection?: 'grupo'
  wide?: boolean // skip max-w-4xl for full-width pages like home
  noSidebar?: boolean // home page: full-width layout, no sidebar
}

export function PublicLayout({ children, activeDiscipline, activeSection, wide, noSidebar }: PublicLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (noSidebar) {
    return (
      <>
        <Header activeDiscipline={activeDiscipline} />
        <main className="max-w-[1440px] mx-auto px-8 pt-12 pb-24">
          {children}
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header
        activeDiscipline={activeDiscipline}
        showSearch
        onToggleSidebar={() => setSidebarOpen(true)}
      />
      <Sidebar
        activeDiscipline={activeDiscipline}
        activeSection={activeSection}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="lg:ml-64">
        <main className={`px-8 lg:px-16 py-12 min-h-[calc(100vh-5rem)] ${wide ? '' : 'max-w-4xl mx-auto'}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
