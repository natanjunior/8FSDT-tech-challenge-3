'use client'

import { FormEvent, useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  defaultValue?: string
  placeholder?: string
}

export function SearchBar({
  onSearch,
  defaultValue = '',
  placeholder = 'Buscar posts por título, conteúdo ou autor...',
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSearch(value.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <div className="relative flex-1">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">
          search
        </span>
        <input
          role="searchbox"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 rounded-card bg-surface-lowest text-on-surface placeholder-on-surface-variant outline-none border border-transparent focus:border-secondary transition-colors"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 rounded-card bg-gradient-to-r from-secondary to-secondary-on-container text-white font-bold"
      >
        Buscar
      </button>
    </form>
  )
}
