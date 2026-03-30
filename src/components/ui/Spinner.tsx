const SIZE_CLASSES = {
  sm: 'w-3 h-3 border-[1.5px]',
  md: 'w-5 h-5 border-2',
}

interface SpinnerProps {
  className?: string
  size?: 'sm' | 'md'
}

export function Spinner({ className = '', size = 'md' }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className={`${SIZE_CLASSES[size]} border-secondary border-t-transparent rounded-full animate-spin ${className}`}
    />
  )
}
