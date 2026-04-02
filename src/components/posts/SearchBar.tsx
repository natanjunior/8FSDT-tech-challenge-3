'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

interface SearchBarProps {
  size?: 'hero' | 'compact'
}

export function SearchBar({ size = 'compact' }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(searchParams.get('q') ?? '')
  }, [searchParams])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) {
      router.push(`/posts?q=${encodeURIComponent(trimmed)}`)
    }
  }

  const isHero = size === 'hero'

  return (
    <form onSubmit={handleSubmit} role="search" className="relative">
      <div className={`absolute inset-y-0 ${isHero ? 'left-4 md:left-6' : 'left-4'} flex items-center pointer-events-none`}>
        <span className={`material-symbols-outlined text-outline ${isHero ? 'text-base md:text-2xl' : 'text-base'}`}>search</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar posts..."
        aria-label="Buscar posts"
        className={`w-full bg-surface-container-high border-none rounded-xl text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/60 shadow-sm outline-none
          ${isHero ? 'py-3 md:py-6 pl-11 md:pl-16 pr-24 md:pr-8 text-sm md:text-lg' : 'py-3 md:py-5 pl-12 md:pl-16 pr-24 text-sm md:text-base'}`}
      />
      <div className={`absolute inset-y-2 ${isHero ? 'md:inset-y-3' : 'md:inset-y-3'} right-2 ${isHero ? 'md:right-3' : 'md:right-3'}`}>
        <button
          type="submit"
          className={`bg-secondary text-white px-4 ${isHero ? 'md:px-8' : 'md:px-6'} h-full rounded-lg font-bold hover:brightness-110 transition-all text-sm`}
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
