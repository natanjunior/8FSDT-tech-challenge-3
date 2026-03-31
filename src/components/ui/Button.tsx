// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50'
  const styles = {
    primary: 'cta-gradient text-white py-3 px-8 shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'px-6 py-2.5 text-sm text-on-surface-variant hover:bg-surface-container-low',
    danger: 'px-6 py-2.5 border border-error/30 text-error hover:bg-error-container/30',
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
