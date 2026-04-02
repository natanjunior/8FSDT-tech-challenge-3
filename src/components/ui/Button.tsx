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
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const styles: Record<ButtonVariant, string> = {
    // cta-gradient text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary/20
    // hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2
    // disabled: opacity-40 cursor-not-allowed (no hover/active transitions)
    primary: disabled
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
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
