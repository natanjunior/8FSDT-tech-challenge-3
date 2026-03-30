import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, id, className = '', ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-bold text-on-surface">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={`px-4 py-3 rounded-card bg-surface-low text-on-surface placeholder-on-surface-variant
          outline-none transition-colors border
          ${error ? 'border-error/40 bg-error-container/20' : 'border-transparent focus:border-secondary'}
          ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
          ${className}`}
        {...props}
      />
      {error && <p className="text-error text-sm">{error}</p>}
      {hint && !error && <p className="text-on-surface-variant text-xs">{hint}</p>}
    </div>
  )
})
