# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Commit Rules

**NEVER add co-authorship lines to commits.** Do not include `Co-Authored-By:` trailers in any commit message, under any circumstance.

## Project Status

This is a **planning-phase repository** for the PosTech 8FSDT Phase 3 Tech Challenge. No source code has been scaffolded yet. The implementation plans are in `docs/superpowers/plans/` (6 phases) and the full design spec is in `docs/superpowers/specs/2026-03-28-frontend-fase3-design.md`.

## Commands

Once the project is scaffolded (Plan 1), these are the standard commands:

```bash
npm run dev           # Start dev server at http://localhost:3000
npm run build         # Production build
npm run lint          # ESLint
npx tsc --noEmit      # Type checking

npm run test          # Run tests in watch mode
npm run test:run      # Run tests once (CI mode)
npm run test:coverage # Run tests with coverage report

# Run a single test file
npm run test:run -- src/lib/schemas/__tests__/login.schema.test.ts

# Run tests in a directory
npm run test:run -- src/lib/schemas
```

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| HTTP | Axios |
| Global state | Context API |
| Testing | Vitest + React Testing Library |
| Container | Docker + Docker Compose |

## Rendering Architecture

The app uses **hybrid rendering**:

| Route | Type | Reason |
|---|---|---|
| `/`, `/posts`, `/posts/[id]`, `/grupo`, `/design-system` | Server Component | SEO |
| `/login` | Client Component | Interactive form |
| `/admin`, `/admin/posts/new`, `/admin/posts/[id]/edit` | Client Component | Mutations + interactivity |

Route protection is done in `middleware.ts` (not inside layouts): `/admin/*` requires a TEACHER JWT in an httpOnly cookie. STUDENT role redirects to `/`.

## Auth Flow

JWT stored in **httpOnly cookie** (not localStorage). Three internal Next.js API Routes manage the cookie:
- `POST /api/auth/set-cookie` — sets the httpOnly cookie after login
- `POST /api/auth/clear-cookie` — clears cookie on logout
- `GET /api/auth/me` — decodes JWT server-side using `JWT_SECRET`, returns user object

`AuthContext` holds `user` in memory. On page refresh, `root layout.tsx` calls `/api/auth/me` server-side to rehydrate state before render (prevents auth flash).

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages + API Routes
│   ├── api/auth/           # set-cookie, clear-cookie, me routes
│   ├── admin/              # Protected admin area (Client Components)
│   ├── posts/              # Public post pages (Server Components)
│   └── login/              # Login page (Client Component)
├── components/
│   ├── layout/             # Header, Footer, Sidebar, AdminSidebar
│   ├── posts/              # PostCard, PostList, SearchBar
│   ├── comments/           # CommentSection, CommentForm, CommentItem
│   └── ui/                 # Button, Input, Badge, DataTable, etc.
├── contexts/               # AuthContext with useAuth hook
├── lib/
│   ├── api.ts              # Axios instance + interceptors
│   ├── anonymous.ts        # UUID in localStorage (key: edublog_anonymous_id)
│   └── schemas/            # Zod schemas (login, post, comment)
├── services/               # auth.service.ts, posts.service.ts, comments.service.ts
├── types/                  # TypeScript interfaces (user, post, comment)
└── middleware.ts            # Route protection for /admin/*
```

## API Backend

Base URL: `http://localhost:3030` (Phase 2 Node.js backend)

Key contracts:
- Auth: `POST /auth/login` (email only, passwordless) → `{ user, token }`
- Posts: `GET /posts`, `GET /posts/search?q=&discipline=`, `GET /posts/:id`, `POST/PATCH/DELETE /posts/:id`
- Comments: `GET /posts/:id/comments`, `POST /posts/:id/comments`, `DELETE /posts/:id/comments/:commentId`

Visibility rules: TEACHER sees DRAFT + PUBLISHED + ARCHIVED; STUDENT/guest sees only PUBLISHED.

The `X-Anonymous-Id` header must be sent on every comment request (from `localStorage`). `can_delete` for comments is calculated server-side.

`DELETE` endpoints return 204 with no body — do not call `.json()`.

## Design System — "The Academic Curator"

Tailwind tokens (configured in `tailwind.config.ts`):
- `primary` / `primary-container`: `#022448` / `#1E3A5F` — dark blue
- `secondary` / `secondary-container`: `#006A61` / `#86F2E4` — teal
- `surface` / `surface-low` / `surface-lowest`: `#F9F9FF` / `#F0F3FF` / `#FFFFFF`
- `on-surface`: `#111C2D` — never use pure black
- `on-surface-variant`: `#94A3B8`
- `error` / `error-container`: `#DC2626` / `#FEE2E2`

**Critical visual rules:**
1. No `1px solid` borders for layout separation — use background color shifts instead
2. Pure black text is forbidden — always `text-on-surface`
3. Primary button: `bg-gradient-to-r from-secondary to-secondary-on-container` — never solid color
4. Header: `bg-slate-50/80 backdrop-blur-md` (glassmorphism)
5. Error state on inputs: `bg-error-container/20 border border-error/40` — this is the **only** exception to the no-border rule
6. Cards: `shadow-xl shadow-sky-950/5`
7. Mobile sidebar: `translate-x-0 / -translate-x-full` drawer; key breakpoint is `lg` (1024px)

Discipline → icon (Material Symbols): `matematica=functions`, `portugues=menu_book`, `ciencias=science`, `historia=history_edu`, `geografia=public`

## Testing

Tests use Vitest + React Testing Library. **Server Components are not tested** (no jsdom support).

Mock Axios calls following the pattern from Módulo 03 Aula 05. Key areas to test: `AuthContext`, `PostCard`, `SearchBar`, `PostForm`, `CommentForm`, `CommentItem`, `lib/anonymous.ts`, `/admin` page, `DataTable`.

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3030
JWT_SECRET=<must match Phase 2 backend secret>
```

`JWT_SECRET` is server-side only (no `NEXT_PUBLIC_` prefix). Used in `/api/auth/me` to decode the JWT without calling the backend.

## Implementation Plans

All 6 plans are in `docs/superpowers/plans/`:
1. **plan-1-foundation** — scaffold, types, Zod schemas, Axios, services
2. **plan-2-auth** — AuthContext, API Routes, middleware, login page
3. **plan-3-ui-components** — all reusable components
4. **plan-4-public-pages** — `/`, `/posts`, `/posts/[id]`, `/grupo`, `/design-system`
5. **plan-5-admin-area** — admin dashboard, post forms, DataTable
6. **plan-6-infra** — Docker, GitHub Actions CI/CD

## ADR Summary

- **ADR-01**: Next.js 15 App Router (not React+Vite) — demonstrates Módulo 04 content
- **ADR-02**: Tailwind CSS (not Styled Components) — native App Router integration
- **ADR-03**: React Hook Form + Zod (not Formik+Yup) — industry standard, TypeScript inference
- **ADR-04**: httpOnly cookie + `middleware.ts` (not localStorage) — XSS protection, no auth flash
- **ADR-05**: Layered folder structure (`services/`, `lib/`, `types/`) — mirrors Phase 2 backend architecture
- **ADR-06**: Contract-first API design — frontend defined the comments contract
- **ADR-07**: UUID in localStorage for anonymous comment ownership
