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

  async function handleSubmit(data: PostFormData) {
    setIsSubmitting(true)
    try {
      await createPost({
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

      <PostForm
        onSubmit={handleSubmit}
        onCancel={() => router.push('/admin')}
        submitLabel="Criar artigo"
        isSubmitting={isSubmitting}
      />
    </div>
  )
}
