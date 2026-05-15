interface SkeletonProps {
  className?: string
}

/**
 * Shared placeholder block for loading skeletons.
 * Uses Design System tokens (surface-container-high) + Tailwind's
 * built-in animate-pulse. No props beyond className — all sizing/
 * shape comes from utility classes at the call site.
 */
export function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`bg-surface-container-high/40 rounded animate-pulse ${className}`} />
}
