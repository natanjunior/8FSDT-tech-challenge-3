interface AuthorIdProps {
  name: string
  size?: 'normal' | 'mini'
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('')
}

export function AuthorId({ name, size = 'normal' }: AuthorIdProps) {
  const initials = getInitials(name)
  const avatarSize = size === 'mini' ? 'w-6 h-6 text-[10px]' : 'w-8 h-8 text-xs'
  const nameSize = size === 'mini' ? 'text-xs' : 'text-sm'

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${avatarSize} rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0`}
      >
        {initials}
      </div>
      <span className={`${nameSize} text-on-surface font-medium`}>{name}</span>
    </div>
  )
}
