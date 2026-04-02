// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant =
  | 'primary'       // cta-gradient teal — formulários (Criar post, Salvar, Entrar login)
  | 'nav'           // primary-gradient dark — header "Entrar" (visitante)
  | 'secondary'     // outline — Cancelar, ações secundárias
  | 'danger'        // bg-error filled — Excluir permanentemente (modal)
  | 'danger-outline' // border-error outline — Excluir post (sidebar)
  | 'icon'          // icon + bg hover — ações de tabela (edit)
  | 'icon-danger'   // icon + red hover — ações de tabela (delete)
  | 'ghost-icon'    // plain icon — bookmark nos cards

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  isLoading?: boolean
}

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 3 0 3 12h4z"
    />
  </svg>
)

export function Button({
  variant = 'primary',
  children,
  className = '',
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  const styles: Record<ButtonVariant, string> = {
    // cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20
    // hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2
    // disabled: opacity-40 cursor-not-allowed (no hover/active transitions)
    // loading: opacity-80 cursor-wait (no hover/active transitions)
    primary: isLoading
      ? 'cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20 opacity-80 flex items-center gap-2 cursor-wait'
      : disabled
        ? 'cta-gradient text-white font-bold px-6 py-3 rounded-xl opacity-40 cursor-not-allowed flex items-center gap-2'
        : 'cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2',

    // primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold
    // shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all
    nav: 'primary-gradient text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-sky-950/20 active:scale-95 transform transition-all',

    // border border-outline-variant text-on-surface font-bold px-6 py-3 rounded-xl
    // hover:bg-surface-container-high transition-all
    // disabled: opacity-40 cursor-not-allowed
    secondary: disabled
      ? 'border border-outline-variant text-on-surface font-bold px-6 py-3 rounded-xl opacity-40 cursor-not-allowed'
      : 'border border-outline-variant text-on-surface font-bold px-6 py-3 rounded-xl hover:bg-surface-container-high transition-all',

    // bg-error text-white font-bold px-6 py-3 rounded-xl shadow-lg
    // hover:brightness-110 active:scale-95 transition-all flex items-center gap-2
    danger: 'bg-error text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2',

    // border border-error text-error font-bold px-6 py-3 rounded-xl
    // hover:bg-red-50 active:scale-95 transition-all flex items-center gap-2
    'danger-outline': 'border border-error text-error font-bold px-6 py-3 rounded-xl hover:bg-red-50 active:scale-95 transition-all flex items-center gap-2',

    // w-9 h-9 flex items-center justify-center rounded-lg
    // hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary
    icon: 'w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary',

    // w-9 h-9 flex items-center justify-center rounded-lg
    // hover:bg-red-50 transition-colors text-on-surface-variant hover:text-error
    'icon-danger': 'w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors text-on-surface-variant hover:text-error',

    // material-symbols-outlined text-outline hover:text-secondary transition-colors
    'ghost-icon': 'material-symbols-outlined text-outline hover:text-secondary transition-colors',
  }

  return (
    <button
      className={`${styles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && variant === 'primary' && <Spinner />}
      {children}
    </button>
  )
}
