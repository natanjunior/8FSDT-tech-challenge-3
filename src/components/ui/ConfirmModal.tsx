'use client'

interface ConfirmModalProps {
  isOpen: boolean
  variant: 'delete' | 'leave' | 'status-change'
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const VARIANT_CONFIG = {
  delete: {
    icon: 'delete_forever',
    titleClass: 'text-red-600',
    confirmLabel: 'Excluir permanentemente',
    confirmClass: 'bg-red-600 hover:bg-red-700 text-white',
  },
  leave: {
    icon: 'edit_off',
    titleClass: 'text-primary',
    confirmLabel: 'Sair sem salvar',
    confirmClass: 'bg-gradient-to-r cta-gradient text-white',
  },
  'status-change': {
    icon: 'swap_horiz',
    titleClass: 'text-primary',
    confirmLabel: 'Confirmar alteração',
    confirmClass: 'bg-gradient-to-r cta-gradient text-white',
  },
}

export function ConfirmModal({
  isOpen,
  variant,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null

  const config = VARIANT_CONFIG[variant]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-surface/40" onClick={onCancel} />
      <div className="relative bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 p-6 w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <span className={`material-symbols-outlined text-2xl ${config.titleClass}`}>
            {config.icon}
          </span>
          <h2 className={`text-lg font-black ${config.titleClass}`}>{title}</h2>
        </div>
        <p className="text-on-surface-variant text-sm mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl border border-on-surface-variant/20 text-on-surface hover:bg-surface-container-low transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-xl font-bold transition-colors ${config.confirmClass}`}
          >
            {config.confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
