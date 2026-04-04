'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PostForm from '@/components/admin/PostForm'
import { PostFormData } from '@/lib/schemas/post.schema'
import { createPost } from '@/services/posts.service'

export default function NewPostPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  async function handleSubmit(data: PostFormData) {
    setIsSubmitting(true)
    setSaveError(null)
    try {
      await createPost({
        title: data.title,
        content: data.content,
        status: data.status,
        discipline_id: data.discipline_id || undefined,
      })
      router.push('/admin')
    } catch (err: unknown) {
      const apiMessage = (err as { response?: { data?: { error?: string } } })?.response?.data?.error
      setSaveError(apiMessage ?? 'Erro ao criar o artigo. Verifique os dados e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-8 lg:px-16 py-12 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
          <Link href="/admin" className="font-medium text-secondary hover:underline underline-offset-2 transition-colors">
            Painel
          </Link>
          <span className="material-symbols-outlined text-outline text-base">chevron_right</span>
          <span className="font-black text-2xl tracking-tight text-primary">Novo Artigo</span>
        </nav>
        <p className="text-sm text-on-surface-variant">Preencha os campos abaixo para publicar um novo artigo.</p>
      </div>

      {saveError && (
        <div className="mb-6 p-4 rounded-xl bg-error-container/20 border border-error/30 flex items-start gap-3">
          <span className="material-symbols-outlined text-error text-xl shrink-0 mt-0.5">error</span>
          <p className="text-sm text-error font-medium">{saveError}</p>
        </div>
      )}

      <PostForm
        onSubmit={handleSubmit}
        onCancel={() => router.push('/admin')}
        submitLabel="Criar artigo"
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
