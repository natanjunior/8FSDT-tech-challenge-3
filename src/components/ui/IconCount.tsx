const ICON_MAP = {
  comment: 'forum',
  bookmark: 'bookmark',
  views: 'visibility',
  likes: 'thumb_up',
} as const

interface IconCountProps {
  type: keyof typeof ICON_MAP
  count: number
  size?: 'sm' | 'md' | 'lg'
}

export function IconCount({ type, count, size = 'sm' }: IconCountProps) {
  const iconPx = { sm: 16, md: 20, lg: 24 }
  const countSizes = { sm: 'text-[11px]', md: 'text-sm', lg: 'text-base' }

  return (
    <span className={`flex items-center gap-1 ${countSizes[size]} font-mono text-on-surface-variant group-hover:text-secondary transition-colors`}>
      <span
        className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors"
        style={{ fontSize: `${iconPx[size]}px`, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        {ICON_MAP[type]}
      </span>
      {count}
    </span>
  )
}
