const ICON_MAP = {
  comment: 'forum',
  bookmark: 'bookmark',
} as const

interface IconCountProps {
  type: keyof typeof ICON_MAP
  count: number
  size?: 'sm' | 'md' | 'lg'
}

export function IconCount({ type, count, size = 'md' }: IconCountProps) {
  const iconSizes = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' }
  const countSizes = { sm: 'text-[10px]', md: 'text-[11px]', lg: 'text-xs' }

  return (
    <div className="flex items-center gap-0.5 text-on-surface-variant group-hover:text-secondary transition-colors">
      <span
        className={`material-symbols-outlined ${iconSizes[size]} group-hover:[font-variation-settings:'FILL'_1]`}
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        {ICON_MAP[type]}
      </span>
      <span className={`${countSizes[size]} font-mono`}>{count}</span>
    </div>
  )
}
