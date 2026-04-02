'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import PostForm from '@/components/admin/PostForm'
import { PostFormData } from '@/lib/schemas/post.schema'
import { getPost, updatePost, deletePost } from '@/services/posts.service'
import { StatusBadge } from '@/components/ui/Badge'
import { Post } from '@/types/post'
import { getDisciplineSlug } from '@/lib/discipline'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

const DISC_COLORS: Record<string, string> = {
  matematica: 'bg-blue-600',
  portugues: 'bg-amber-600',
  ciencias: 'bg-emerald-600',
  historia: 'bg-rose-600',
  geografia: 'bg-teal-600',
}

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [leaveModalOpen, setLeaveModalOpen] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  useEffect(() => {
    getPost(id).then(p => {
      setPost(p)
      setIsLoading(false)
    }).catch(() => {
      router.push('/admin')
    })
  }, [id, router])

  async function handleSubmit(data: PostFormData) {
    if (!post) return
    setIsSubmitting(true)
    try {
      await updatePost(id, {
        title: data.title,
        subtitle: data.subtitle || undefined,
        content: data.content,
        status: data.status,
        discipline_id: data.discipline_id || undefined,
      })
      router.push('/admin')
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleDelete() {
    await deletePost(id)
    router.push('/admin')
  }

  function handleCancel() {
    if (isDirty) {
      setLeaveModalOpen(true)
    } else {
      router.push('/admin')
    }
  }

  if (isLoading) {
    return (
      <div className="px-8 lg:px-16 py-12 flex items-center justify-center">
        <span className="text-on-surface-variant">Carregando...</span>
      </div>
    )
  }

  if (!post) return null

  const disciplineSlug = post.discipline ? getDisciplineSlug(post.discipline.label) : undefined
  const disciplineColor = (disciplineSlug ? DISC_COLORS[disciplineSlug] : undefined) ?? 'bg-primary'

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start px-8 lg:px-16 py-12 max-w-[76rem] mx-auto">

      {/* Main: breadcrumb + form */}
      <main className="w-full lg:flex-1 min-w-0 lg:max-w-4xl">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
            <Link href="/admin" className="font-medium text-secondary hover:underline underline-offset-2 transition-colors">
              Painel
            </Link>
            <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
            <span className="font-black text-2xl tracking-tight text-primary">Editar Artigo</span>
          </nav>
          <p className="text-sm text-on-surface-variant">Atualize o conteúdo e salve as alterações.</p>
        </div>

        <PostForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          submitLabel="Salvar alterações"
          defaultValues={{
            title: post.title,
            subtitle: post.subtitle,
            content: post.content,
            status: post.status,
            discipline_id: post.discipline?.id ?? '',
          }}
          isSubmitting={isSubmitting}
          onDirtyChange={setIsDirty}
        />
      </main>

      {/* Aside */}
      <aside className="flex flex-col gap-4 w-full lg:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">

        {/* Info card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden">
          <div className="px-5 py-4 bg-surface-container border-b border-surface-container-high">
            <h3 className="font-bold text-primary flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-primary/60 text-base">info</span>
              Informações
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1.5">Status atual</p>
              <StatusBadge status={post.status} />
            </div>
            {post.discipline && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1.5">Disciplina</p>
                <span className={`${disciplineColor} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full`}>
                  {post.discipline.label}
                </span>
              </div>
            )}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Criado em</p>
              <p className="text-sm font-mono text-on-surface">{formatDate(post.created_at)}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Última edição</p>
              <p className="text-sm font-mono text-on-surface">{formatDate(post.updated_at)}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Marcações de leitura</p>
              <p className="text-sm font-mono text-on-surface">{post.reads_count}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Comentários</p>
              <p className="text-sm font-mono text-on-surface">{post.comments_count}</p>
            </div>
            {post.status === 'PUBLISHED' && (
              <Link
                href={`/posts/${id}`}
                className="flex items-center gap-1.5 text-xs font-medium text-secondary hover:underline underline-offset-2 transition-colors pt-1"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
                Ver artigo publicado
              </Link>
            )}
          </div>
        </div>

        {/* Danger zone card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-hidden border border-error/10">
          <div className="px-5 py-4 bg-red-50/60 border-b border-error/10">
            <h3 className="font-bold text-error flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-base">warning</span>
              Zona de perigo
            </h3>
          </div>
          <div className="p-5 space-y-3">
            <p className="text-sm text-on-surface-variant">A exclusão é permanente e não pode ser desfeita.</p>
            <button
              type="button"
              onClick={() => setDeleteModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-error/30 text-error text-sm font-bold rounded-xl hover:bg-error-container/30 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">delete</span>
              Excluir artigo
            </button>
          </div>
        </div>

      </aside>

      {/* Modal: Delete (destructive) */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setDeleteModalOpen(false)} className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-error-container/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-error text-2xl">delete_forever</span>
              </div>
              <div>
                <h2 className="text-lg font-black text-primary tracking-tight">Excluir artigo?</h2>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Esta ação é permanente. O artigo <span className="font-semibold text-on-surface">&quot;{post.title}&quot;</span> será removido e não poderá ser recuperado.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-2 px-6 py-2.5 bg-error text-white text-sm font-bold rounded-xl shadow-lg shadow-error/20 hover:opacity-90 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">delete</span>
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Leave without saving (neutral) */}
      {leaveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setLeaveModalOpen(false)} className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl shadow-on-surface/20 max-w-md w-full p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-outline text-2xl">edit_off</span>
              </div>
              <div>
                <h2 className="text-lg font-black text-primary tracking-tight">Sair sem salvar?</h2>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  As alterações feitas neste artigo não foram salvas e serão perdidas.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/10">
              <button
                type="button"
                onClick={() => setLeaveModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all"
              >
                Continuar editando
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin')}
                className="flex items-center gap-2 px-6 py-2.5 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
                style={{ background: 'linear-gradient(135deg, #022448 0%, #1E3A5F 100%)' }}
              >
                Sair sem salvar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
