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
  const base = 'px-4 py-2 rounded-xl font-bold transition-opacity disabled:opacity-50 flex items-center gap-2'
  const styles = {
    primary: 'bg-gradient-to-r cta-gradient text-white',
    secondary: 'border border-on-surface-variant/20 text-on-surface hover:bg-surface-container-low',
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
