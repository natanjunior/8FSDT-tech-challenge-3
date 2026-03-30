import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'px-4 py-2 rounded-card font-bold transition-opacity disabled:opacity-50 flex items-center gap-2'
  const styles = {
    primary: 'bg-gradient-to-r from-secondary to-secondary-on-container text-white',
    secondary: 'border border-on-surface-variant/20 text-on-surface hover:bg-surface-low',
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
