// src/app/admin/layout.tsx
import { PublicLayout } from '@/components/layout/PublicLayout'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>
}
