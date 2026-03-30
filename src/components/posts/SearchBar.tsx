'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

export function SearchBar() {
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

  return (
    <form onSubmit={handleSubmit} role="search" className="relative">
      <span
        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant select-none pointer-events-none"
        aria-hidden="true"
      >
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar posts..."
        aria-label="Buscar posts"
        className="w-full pl-12 md:pl-16 pr-4 py-3 md:py-5 text-sm md:text-base rounded-xl bg-surface-lowest text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary/30"
      />
    </form>
  )
}
