// src/components/ui/StatsCard.tsx
import { ReactNode } from 'react'

interface StatsCardProps {
  children: ReactNode
  variant?: 'default' | 'primary'
  borderColor?: string // ex: 'border-slate-400', 'border-green-500'
}

export function StatsCard({ children, variant = 'default', borderColor }: StatsCardProps) {
  if (variant === 'primary') {
    return (
      <div className="bg-primary p-6 rounded-xl shadow-xl shadow-primary/20 flex flex-col justify-between text-white overflow-hidden relative">
        {children}
      </div>
    )
  }

  return (
    <div className={`bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between ${borderColor ? `border-l-4 ${borderColor}` : ''}`}>
      {children}
    </div>
  )
}
