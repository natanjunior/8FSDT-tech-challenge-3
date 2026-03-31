// src/components/ui/ConfirmModal.tsx
'use client'

import { ReactNode } from 'react'

interface ConfirmModalProps {
  isOpen: boolean
  icon: string
  iconBgClass: string // ex: 'bg-error-container/40' ou 'bg-surface-container'
  iconTextClass: string // ex: 'text-error' ou 'text-outline'
  title: string
  children: ReactNode // descrição livre — pode incluir badges inline
  cancelLabel: string
  confirmLabel: string
  confirmClass: string // ex: 'bg-error text-white shadow-lg shadow-error/20' ou 'primary-gradient text-white shadow-lg shadow-primary/20'
  onConfirm: () => void
  onCancel: () => void
  isLoading?: boolean
}

export function ConfirmModal({
  isOpen,
  icon,
  iconBgClass,
  iconTextClass,
  title,
  children,
  cancelLabel,
  confirmLabel,
  confirmClass,
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center shrink-0`}>
            <span className={`material-symbols-outlined ${iconTextClass} text-2xl`}>{icon}</span>
          </div>
          <div>
            <h2 className="text-lg font-black text-primary tracking-tight">{title}</h2>
            <div className="text-sm text-on-surface-variant mt-1 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 ${confirmClass}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
