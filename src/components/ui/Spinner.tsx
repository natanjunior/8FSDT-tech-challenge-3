export function Spinner({ className = '' }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className={`w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin ${className}`}
    />
  )
}
