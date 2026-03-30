'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema, PostFormData } from '@/lib/schemas/post.schema'
import { useAuth } from '@/contexts/AuthContext'

const DISCIPLINE_OPTIONS = [
  { value: '', label: 'Nenhuma' },
  { value: 'matematica', label: 'Matemática' },
  { value: 'portugues', label: 'Português' },
  { value: 'ciencias', label: 'Ciências' },
  { value: 'historia', label: 'História' },
  { value: 'geografia', label: 'Geografia' },
]

interface PostFormProps {
  onSubmit: (data: PostFormData) => Promise<void>
  onCancel: () => void
  submitLabel: string
  defaultValues?: Partial<PostFormData>
  isSubmitting?: boolean
  onDirtyChange?: (dirty: boolean) => void
}

export default function PostForm({ onSubmit, onCancel, submitLabel, defaultValues, isSubmitting, onDirtyChange }: PostFormProps) {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty: formIsDirty },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      content: '',
      status: 'DRAFT',
      discipline_id: '',
      ...defaultValues,
    },
  })

  const contentValue = watch('content') ?? ''

  useEffect(() => {
    onDirtyChange?.(formIsDirty)
  }, [formIsDirty, onDirtyChange])

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-visible">
      {/* Card header */}
      <div className="px-6 py-4 bg-surface-container flex items-center rounded-t-xl border-b border-surface-container-high">
        <h2 className="font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-primary/60 text-lg">edit_note</span>
          Dados do Artigo
        </h2>
      </div>

      <div className="p-8">
        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>

          {/* Título */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-primary" htmlFor="post-title">Título *</label>
            <input
              id="post-title"
              type="text"
              placeholder="Ex: Introdução às Frações Decimais"
              {...register('title')}
              className={`w-full rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all ${
                errors.title
                  ? 'bg-error-container/20 border-2 border-error/40 focus:ring-2 focus:ring-error/20'
                  : 'bg-surface-container-low border border-outline-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary'
              }`}
            />
            {errors.title ? (
              <p className="text-xs text-error font-medium">{errors.title.message}</p>
            ) : (
              <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">Entre 5 e 255 caracteres</p>
            )}
          </div>

          {/* Subtítulo */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-primary" htmlFor="post-subtitle">Subtítulo</label>
            <input
              id="post-subtitle"
              type="text"
              placeholder="Ex: Uma abordagem prática para o ensino fundamental"
              {...register('subtitle')}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">Até 300 caracteres (opcional)</p>
          </div>

          {/* Disciplina + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Disciplina */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-primary" htmlFor="discipline">Disciplina</label>
              <select
                id="discipline"
                {...register('discipline_id')}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                {DISCIPLINE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-primary" htmlFor="status">Status *</label>
              <select
                id="status"
                {...register('status')}
                className={`w-full rounded-xl px-4 py-3 text-on-surface outline-none transition-all ${
                  errors.status
                    ? 'bg-error-container/20 border-2 border-error/40 focus:ring-2 focus:ring-error/20'
                    : 'bg-surface-container-low border border-outline-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                }`}
              >
                <option value="DRAFT">Rascunho</option>
                <option value="PUBLISHED">Publicado</option>
                <option value="ARCHIVED">Arquivado</option>
              </select>
              {errors.status && <p className="text-xs text-error font-medium">{errors.status.message}</p>}
            </div>

          </div>

          {/* Autor (disabled) */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-primary" htmlFor="author">Autor</label>
            <div className="relative">
              <input
                id="author"
                type="text"
                value={user?.name ?? ''}
                disabled
                readOnly
                className="w-full bg-surface-container-high/50 border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface-variant/70 cursor-not-allowed font-medium outline-none"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-sm">lock</span>
            </div>
            <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">Definido pelo usuário autenticado</p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-primary" htmlFor="content">Conteúdo *</label>
              <span className="text-[10px] font-bold text-on-surface-variant/70 font-mono">
                {contentValue.length} / MÍN. 10
              </span>
            </div>
            <textarea
              id="content"
              rows={12}
              placeholder="Escreva o conteúdo do artigo aqui..."
              {...register('content')}
              className={`w-full rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all resize-none min-h-[300px] ${
                errors.content
                  ? 'bg-error-container/20 border-2 border-error/40 focus:ring-2 focus:ring-error/20'
                  : 'bg-surface-container-low border border-outline-variant/30 focus:ring-2 focus:ring-primary/20 focus:border-primary'
              }`}
            />
            {errors.content ? (
              <p className="text-xs text-error font-medium">{errors.content.message}</p>
            ) : (
              <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">Mínimo 10 caracteres</p>
            )}
          </div>

          {/* Ações */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-outline-variant/20">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all active:scale-95"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-secondary to-on-secondary-container text-white text-sm font-bold rounded-xl shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg">save</span>
              {submitLabel}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
