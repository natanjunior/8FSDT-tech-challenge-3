'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import MarkdownEditor from '@/components/ui/MarkdownEditor'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema, PostFormData, PostFormInput } from '@/lib/schemas/post.schema'
import { useAuth } from '@/contexts/AuthContext'
import { getDisciplines } from '@/services/disciplines.service'
import type { Discipline, PostStatus } from '@/types/post'

// Discipline badge colors keyed by label
const DISCIPLINE_COLORS: Record<string, string> = {
  'Matemática': 'bg-blue-600',
  'Português': 'bg-amber-600',
  'Ciências': 'bg-emerald-600',
  'História': 'bg-rose-600',
  'Geografia': 'bg-teal-600',
}

const STATUS_CONFIG: Record<PostStatus, { label: string; dot: string; bg: string; text: string }> = {
  DRAFT:     { label: 'RASCUNHO',  dot: 'bg-yellow-500', bg: 'bg-yellow-500/10', text: 'text-yellow-600' },
  PUBLISHED: { label: 'PUBLICADO', dot: 'bg-green-500',  bg: 'bg-green-500/10',  text: 'text-green-600' },
  ARCHIVED:  { label: 'ARQUIVADO', dot: 'bg-slate-400',  bg: 'bg-slate-400/10',  text: 'text-slate-500' },
}

interface PostFormProps {
  onSubmit: (data: PostFormData) => Promise<void>
  onCancel: () => void
  submitLabel: string
  defaultValues?: Partial<PostFormInput>
  isSubmitting?: boolean
  isEdit?: boolean
  onDirtyChange?: (dirty: boolean) => void
}

export default function PostForm({ onSubmit, onCancel, submitLabel, defaultValues, isSubmitting, isEdit = false, onDirtyChange }: PostFormProps) {
  const { user } = useAuth()
  const [disciplines, setDisciplines] = useState<Discipline[]>([])
  const [disciplineOpen, setDisciplineOpen] = useState(false)
  const [statusOpen, setStatusOpen] = useState(false)
  const disciplineRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getDisciplines().then(setDisciplines)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (disciplineRef.current && !disciplineRef.current.contains(e.target as Node)) {
        setDisciplineOpen(false)
      }
      if (statusRef.current && !statusRef.current.contains(e.target as Node)) {
        setStatusOpen(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isDirty: formIsDirty },
  } = useForm<PostFormInput, unknown, PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      content: '',
      status: 'DRAFT',
      discipline_id: '',
      ...defaultValues,
    },
  })

  const contentValue = watch('content') ?? ''
  const selectedDisciplineId = watch('discipline_id') ?? ''
  const selectedStatus = (watch('status') ?? 'DRAFT') as PostStatus

  const selectedDiscipline = disciplines.find(d => d.id === selectedDisciplineId) ?? null
  const statusConf = STATUS_CONFIG[selectedStatus] ?? STATUS_CONFIG.DRAFT

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
            <div className="relative">
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
              {errors.title && (
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-error text-lg">error</span>
              )}
            </div>
            {errors.title ? (
              <p className="text-xs text-error font-medium">{errors.title.message}</p>
            ) : (
              <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">Entre 5 e 255 caracteres</p>
            )}
          </div>

          {/* Disciplina + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Disciplina — custom dropdown */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-primary">Disciplina</label>
              <div className="relative" ref={disciplineRef}>
                <div
                  onClick={() => setDisciplineOpen(o => !o)}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-all"
                >
                  {selectedDiscipline ? (
                    <span className={`${DISCIPLINE_COLORS[selectedDiscipline.label] ?? 'bg-slate-600'} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full`}>
                      {selectedDiscipline.label}
                    </span>
                  ) : (
                    <span className="text-on-surface-variant/60 text-sm">Selecionar disciplina...</span>
                  )}
                  <span className="material-symbols-outlined text-outline text-base">expand_more</span>
                </div>

                {disciplineOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl shadow-sky-950/10 border border-outline-variant/20 overflow-hidden z-50">
                    <div className="p-2 space-y-0.5">
                      {/* None option */}
                      <button
                        type="button"
                        onClick={() => { setValue('discipline_id', '', { shouldDirty: true }); setDisciplineOpen(false) }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                      >
                        <span className="text-sm text-on-surface-variant italic">Nenhuma</span>
                        {!selectedDisciplineId && (
                          <span className="material-symbols-outlined text-secondary text-base ml-auto">check</span>
                        )}
                      </button>

                      {disciplines.map(d => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => { setValue('discipline_id', d.id, { shouldDirty: true }); setDisciplineOpen(false) }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                        >
                          <span className={`${DISCIPLINE_COLORS[d.label] ?? 'bg-slate-600'} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full`}>
                            {d.label}
                          </span>
                          {selectedDisciplineId === d.id && (
                            <span className="material-symbols-outlined text-secondary text-base ml-auto">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Status — custom dropdown */}
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-primary">Status *</label>
              <div className="relative" ref={statusRef}>
                <div
                  onClick={() => setStatusOpen(o => !o)}
                  className={`w-full rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-all ${
                    errors.status
                      ? 'bg-error-container/20 border-2 border-error/40'
                      : 'bg-surface-container-low border border-outline-variant/30'
                  }`}
                >
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusConf.bg} ${statusConf.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConf.dot} mr-1.5`}></span>
                    {statusConf.label}
                  </span>
                  <span className="material-symbols-outlined text-outline text-base">expand_more</span>
                </div>

                {statusOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl shadow-sky-950/10 border border-outline-variant/20 overflow-hidden z-50">
                    <div className="p-2 space-y-0.5">
                      {(Object.entries(STATUS_CONFIG) as [PostStatus, typeof STATUS_CONFIG[PostStatus]][]).map(([key, conf]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => { setValue('status', key, { shouldDirty: true }); setStatusOpen(false) }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${selectedStatus === key ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'}`}
                        >
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${conf.bg} ${conf.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${conf.dot} mr-1.5`}></span>
                            {conf.label}
                          </span>
                          {selectedStatus === key && (
                            <span className="material-symbols-outlined text-secondary text-base ml-auto">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-wider">
              {isEdit ? 'Não editável' : 'Definido pelo usuário autenticado'}
            </p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-primary">Conteúdo *</label>
              <span className="text-[10px] font-bold text-on-surface-variant/70 font-mono">
                {isEdit ? `${contentValue.length} CARACTERES` : `${contentValue.length} / MÍN. 10`}
              </span>
            </div>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <MarkdownEditor
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors.content}
                  placeholder="Escreva o conteúdo do artigo aqui..."
                />
              )}
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
