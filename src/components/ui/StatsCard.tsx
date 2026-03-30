interface StatsCardProps {
  icon: string
  value: string | number
  label: string
  variant?: 'default' | 'primary'
}

export function StatsCard({ icon, value, label, variant = 'default' }: StatsCardProps) {
  const bg = variant === 'primary' ? 'bg-primary text-white' : 'bg-surface-lowest'
  const textColor = variant === 'primary' ? 'text-white' : 'text-on-surface'
  const subColor = variant === 'primary' ? 'text-white/70' : 'text-on-surface-variant'

  return (
    <div className={`${bg} rounded-card p-4 shadow-xl shadow-sky-950/5 flex items-center gap-4`}>
      <span className={`material-symbols-outlined text-3xl ${variant === 'primary' ? 'text-white/40' : 'text-secondary'}`}>
        {icon}
      </span>
      <div>
        <p className={`text-2xl font-black font-mono ${textColor}`}>{value}</p>
        <p className={`text-xs ${subColor}`}>{label}</p>
      </div>
    </div>
  )
}
