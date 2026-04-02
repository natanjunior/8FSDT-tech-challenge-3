'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getPosts, deletePost } from '@/services/posts.service'
import { useAuth } from '@/contexts/AuthContext'
import { Post } from '@/types/post'
import { StatusBadge, DisciplineBadge } from '@/components/ui/Badge'
import { AuthorId } from '@/components/ui/AuthorId'
import { ConfirmModal } from '@/components/ui/ConfirmModal'
import { getDisciplineSlug } from '@/lib/discipline'

// Discipline color map (matches prototype)
const DISC_COLORS: Record<string, string> = {
  matematica: 'bg-blue-600',
  portugues: 'bg-amber-600',
  ciencias: 'bg-emerald-600',
  historia: 'bg-rose-600',
  geografia: 'bg-teal-600',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

export default function AdminPage() {
  const { user } = useAuth()
  const router = useRouter()

  const [posts, setPosts] = useState<Post[]>([])
  const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1, limit: 10 })
  const [isLoading, setIsLoading] = useState(true)
  const [statusStats, setStatusStats] = useState({ published: 0, draft: 0, archived: 0 })
  const [sortKey, setSortKey] = useState<string | null>('date')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
  const [filterOpen, setFilterOpen] = useState(false)
  const [rowsDropdownOpen, setRowsDropdownOpen] = useState(false)
  const [filterQ, setFilterQ] = useState('')
  const [filterDiscipline, setFilterDiscipline] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [deleteTarget, setDeleteTarget] = useState<Post | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const loadStats = useCallback(async () => {
    try {
      const [pubRes, draftRes, archRes] = await Promise.all([
        getPosts({ status: 'PUBLISHED', page: 1, limit: 1 }),
        getPosts({ status: 'DRAFT', page: 1, limit: 1 }),
        getPosts({ status: 'ARCHIVED', page: 1, limit: 1 }),
      ])
      setStatusStats({
        published: pubRes.pagination.total,
        draft: draftRes.pagination.total,
        archived: archRes.pagination.total,
      })
    } catch {
      // Keep previous stats on error — non-critical
    }
  }, [])

  const loadPosts = useCallback(async (page = 1) => {
    setIsLoading(true)
    try {
      const result = await getPosts({
        page,
        limit: pagination.limit,
        query: filterQ || undefined,
        discipline: filterDiscipline || undefined,
        status: filterStatus || undefined,
        sortKey: sortKey ?? undefined,
        sortDir: sortKey ? sortDir : undefined,
      })
      setPosts(result.data)
      setPagination(prev => ({ ...prev, ...result.pagination }))
    } catch {
      setPosts([])
    } finally {
      setIsLoading(false)
    }
  }, [filterQ, filterDiscipline, filterStatus, sortKey, sortDir, pagination.limit])

  useEffect(() => { loadStats() }, [loadStats])

  useEffect(() => { loadPosts(1) }, [filterQ, filterDiscipline, filterStatus, sortKey, sortDir, loadPosts])

  function handleSort(col: string) {
    if (sortKey === col) {
      if (sortDir === 'asc') setSortDir('desc')
      else { setSortKey(null) }
    } else {
      setSortKey(col)
      setSortDir('asc')
    }
  }

  function SortArrow({ col }: { col: string }) {
    const active = sortKey === col
    const icon = active && sortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'
    return (
      <span
        className={`sort-arrow material-symbols-outlined text-outline-variant ${active ? '' : 'opacity-0'}`}
        style={{ fontSize: 14 }}
      >
        {icon}
      </span>
    )
  }

  async function handleDeleteConfirm() {
    if (!deleteTarget) return
    setIsDeleting(true)
    try {
      await deletePost(deleteTarget.id)
      setDeleteTarget(null)
      loadPosts(pagination.page)
    } finally {
      setIsDeleting(false)
    }
  }

  const total = pagination.total
  const reads = posts.reduce((sum, p) => sum + p.reads_count, 0)

  return (
    <div className="px-8 lg:px-16 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm mb-1" aria-label="Breadcrumb">
          <span className="font-black text-2xl tracking-tight text-primary">Painel</span>
        </nav>
        <p className="text-sm text-on-surface-variant">Gerencie seus artigos e contribuições educacionais.</p>
      </div>

      {/* Stats cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-slate-400">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total de posts</span>
          <span className="text-3xl font-black text-primary mt-3">{String(total).padStart(2, '0')}</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-green-500">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Publicados</span>
          <span className="text-3xl font-black text-primary mt-3">{String(statusStats.published).padStart(2, '0')}</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-sky-950/5 flex flex-col justify-between border-l-4 border-orange-400">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Em revisão</span>
          <div className="flex items-end gap-6 mt-3">
            <div>
              <span className="text-3xl font-black text-primary leading-none">{String(statusStats.draft).padStart(2, '0')}</span>
              <p className="text-xs text-on-surface-variant mt-1">Rascunhos</p>
            </div>
            <div>
              <span className="text-3xl font-black text-primary leading-none">{String(statusStats.archived).padStart(2, '0')}</span>
              <p className="text-xs text-on-surface-variant mt-1">Arquivados</p>
            </div>
          </div>
        </div>
        <div className="bg-primary p-6 rounded-xl shadow-xl shadow-primary/20 flex flex-col justify-between text-white overflow-hidden relative">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Marcados como lido</span>
            <span className="text-3xl font-black mt-3 block">{reads >= 1000 ? `${(reads/1000).toFixed(1)}k` : reads}</span>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
          </div>
        </div>
      </section>

      {/* Table section */}
      <section className="bg-surface-container-lowest rounded-xl shadow-xl shadow-sky-950/5 overflow-visible">

        {/* Table header */}
        <div className="px-6 py-4 bg-surface-container flex justify-between items-center rounded-t-xl">
          <h2 className="font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary/60 text-lg">article</span>
            Artigos
          </h2>
          <div className="flex items-center gap-1">
            <Link href="/admin/posts/new" className="p-2 hover:bg-surface-container-high rounded-lg text-secondary transition-colors" title="Novo post">
              <span className="material-symbols-outlined">add</span>
            </Link>
            <button
              onClick={() => setFilterOpen(v => !v)}
              className={`p-2 hover:bg-surface-container-high rounded-lg transition-colors ${filterOpen ? 'bg-surface-container-high text-secondary' : 'text-on-surface-variant'}`}
              title="Filtrar"
            >
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <div className="relative">
              <button
                onClick={() => setRowsDropdownOpen(v => !v)}
                className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors"
                title="Linhas por página"
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>
              {rowsDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl shadow-on-surface/10 border border-outline-variant/20 overflow-hidden z-50">
                  <p className="px-4 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Linhas por página</p>
                  {[10, 25, 50].map(n => (
                    <button
                      key={n}
                      onClick={() => { setPagination(prev => ({ ...prev, limit: n })); setRowsDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-surface-container-low transition-colors flex items-center gap-2 ${pagination.limit === n ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface-variant'}`}
                    >
                      {pagination.limit === n && <span className="material-symbols-outlined text-base">check</span>}
                      {n} por página
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter row */}
        {filterOpen && (
          <div className="px-6 py-3 bg-surface-container/40 border-b border-surface-container-high flex flex-wrap gap-3 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Busca</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                <input
                  type="text"
                  value={filterQ}
                  onChange={e => setFilterQ(e.target.value)}
                  placeholder="Buscar por título..."
                  className="bg-surface-container-low border-none rounded-xl pl-9 pr-4 py-2 text-sm w-52 focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-on-surface-variant/60"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Disciplina</label>
              <select
                value={filterDiscipline}
                onChange={e => setFilterDiscipline(e.target.value)}
                className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
              >
                <option value="">Todas</option>
                <option value="matematica">Matemática</option>
                <option value="portugues">Português</option>
                <option value="ciencias">Ciências</option>
                <option value="historia">História</option>
                <option value="geografia">Geografia</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</label>
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
              >
                <option value="">Todos</option>
                <option value="PUBLISHED">Publicado</option>
                <option value="DRAFT">Rascunho</option>
                <option value="ARCHIVED">Arquivado</option>
              </select>
            </div>
            <button
              onClick={() => { setFilterQ(''); setFilterDiscipline(''); setFilterStatus('') }}
              className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors flex items-center gap-1.5 mt-0.5"
            >
              <span className="material-symbols-outlined text-base">close</span>
              Limpar
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/30 border-b border-surface-container-high">
                <th onClick={() => handleSort('title')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                  <span className="flex items-center gap-1">Título<SortArrow col="title" /></span>
                </th>
                <th onClick={() => handleSort('author')} className="pl-0 pr-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                  <span className="flex items-center gap-1.5"><span className="text-outline-variant font-light">|</span>Autor<SortArrow col="author" /></span>
                </th>
                <th onClick={() => handleSort('disc')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                  <span className="flex items-center gap-1">Disciplina<SortArrow col="disc" /></span>
                </th>
                <th onClick={() => handleSort('status')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                  <span className="flex items-center gap-1">Status<SortArrow col="status" /></span>
                </th>
                <th onClick={() => handleSort('date')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant cursor-pointer select-none transition-colors">
                  <span className="flex items-center gap-1">Última edição<SortArrow col="date" /></span>
                </th>
                <th onClick={() => handleSort('comments')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center cursor-pointer select-none transition-colors">
                  <span className="flex items-center justify-center gap-1">Coment.<SortArrow col="comments" /></span>
                </th>
                <th onClick={() => handleSort('bookmarks')} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-center cursor-pointer select-none transition-colors">
                  <span className="flex items-center justify-center gap-1">Lidos<SortArrow col="bookmarks" /></span>
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-on-surface-variant text-sm">
                    Carregando...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-on-surface-variant text-sm">
                    Nenhum artigo encontrado.
                  </td>
                </tr>
              ) : posts.map(post => (
                <tr key={post.id} className="group hover:bg-surface-container-low/30 transition-colors">
                  <td colSpan={2} className="px-6 py-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold text-primary leading-tight hover:text-secondary cursor-pointer transition-colors">
                        {post.title}
                      </span>
                      {post.subtitle && (
                        <span className="text-xs text-on-surface-variant">{post.subtitle}</span>
                      )}
                      <div className="flex items-center gap-2 mt-0.5">
                        <AuthorId name={post.author.name} size="sm" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {post.discipline ? (
                      <span className={`${DISC_COLORS[getDisciplineSlug(post.discipline.label) ?? ''] ?? 'bg-primary'} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
                        {post.discipline.label}
                      </span>
                    ) : (
                      <span className="text-xs text-on-surface-variant/40">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-on-surface-variant">{formatDate(post.updated_at)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-mono text-on-surface-variant">{post.comments_count}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-mono text-on-surface-variant">{post.reads_count}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => router.push(`/admin/posts/${post.id}/edit`)}
                        className="p-2 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button
                        onClick={() => setDeleteTarget(post)}
                        className="p-2 text-error hover:bg-error-container/40 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low/30 border-t border-surface-container-high flex justify-between items-center text-xs font-bold text-on-surface-variant rounded-b-xl">
          <span>
            Exibindo {((pagination.page - 1) * pagination.limit) + 1}–{Math.min(pagination.page * pagination.limit, total)} de {total} artigos
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => loadPosts(pagination.page - 1)}
              disabled={pagination.page === 1}
              className={`w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors ${pagination.page === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            {Array.from({ length: Math.min(pagination.totalPages, 6) }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => loadPosts(p)}
                className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${pagination.page === p ? 'bg-primary text-white' : 'hover:bg-surface-container-high'}`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => loadPosts(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className={`w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors ${pagination.page === pagination.totalPages ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

      </section>

      {/* Delete confirmation modal */}
      <ConfirmModal
        isOpen={!!deleteTarget}
        icon="delete_forever"
        iconBgClass="bg-error-container/40"
        iconTextClass="text-error"
        title="Excluir artigo?"
        cancelLabel="Cancelar"
        confirmLabel="Excluir permanentemente"
        confirmClass="bg-error text-white shadow-lg shadow-error/20"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      >
        Esta ação é permanente. O artigo &ldquo;{deleteTarget?.title}&rdquo; será removido e não poderá ser recuperado.
      </ConfirmModal>
    </div>
  )
}
