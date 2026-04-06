'use client'

import dynamic from 'next/dynamic'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  error?: boolean
  placeholder?: string
}

export default function MarkdownEditor({ value, onChange, error, placeholder }: MarkdownEditorProps) {
  return (
    <div
      data-color-mode="light"
      className={`rounded-xl overflow-hidden transition-all ${
        error
          ? 'bg-error-container/20 border border-error/40'
          : 'border border-outline-variant/30 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary'
      }`}
    >
      <MDEditor
        value={value}
        onChange={(val) => onChange(val ?? '')}
        preview="edit"
        placeholder={placeholder}
        height={300}
        style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
      />
    </div>
  )
}
