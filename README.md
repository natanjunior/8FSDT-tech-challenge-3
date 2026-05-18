# Tech Challenge Fase 3 - Frontend de Blogging Educacional

<div align="center">

**Interface gráfica para a plataforma de conteúdo educacional**

[![CI Pipeline](https://github.com/natanjunior/8FSDT-tech-challenge-3/actions/workflows/ci.yml/badge.svg)](https://github.com/natanjunior/8FSDT-tech-challenge-3/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

</div>

---

## 📋 Índice

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Tecnologias](#️-tecnologias)
3. [Arquitetura](#️-arquitetura)
4. [Páginas e Funcionalidades](#-páginas-e-funcionalidades)
5. [Fluxo de Autenticação](#-fluxo-de-autenticação)
6. [Design System](#-design-system)
7. [Testes](#-testes)
8. [Setup e Instalação](#-setup-e-instalação)
9. [Docker](#-docker)
10. [CI/CD](#️-cicd)
11. [Dificuldades Encontradas](#️-dificuldades-encontradas)
12. [Equipe](#-equipe)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Tech Challenge — Fase 3** do curso de **Full Stack Development** da FIAP (turma 8FSDT). A proposta consiste em construir a interface gráfica para a aplicação de blogging educacional cuja API RESTful foi implementada na Fase 2.

A aplicação atende dois perfis de usuário: **professores** (TEACHER), que gerenciam postagens pelo painel administrativo, e **alunos/visitantes** (STUDENT/guest), que consomem conteúdo publicado e podem interagir via comentários anônimos. O frontend foi desenvolvido com **Next.js 15 (App Router)**, utilizando renderização híbrida (Server e Client Components), estilização com **Tailwind CSS** e um Design System próprio ("The Academic Curator").

### Contexto

Professores da rede pública de educação carecem de plataformas onde possam publicar aulas e compartilhar conhecimento de forma prática, centralizada e tecnológica. A Fase 2 entregou a API backend em Node.js + PostgreSQL. A Fase 3 entrega o frontend que torna essa API acessível por meio de uma interface responsiva, acessível e intuitiva.

### Funcionalidades Principais

- **Lista de posts com busca**: Busca por palavra-chave e filtro por disciplina na página inicial
- **Leitura de posts com comentários**: Conteúdo completo do post com seção de comentários anônimos
- **Criação e edição de postagens**: Formulários com validação (apenas docentes autenticados)
- **Painel administrativo**: DataTable com listagem, edição e exclusão de posts
- **Autenticação passwordless**: Login por email com JWT armazenado em httpOnly cookie
- **Design System documentado**: Paleta de cores, tipografia, componentes e regras visuais

### Screenshots

| Home | Artigo |
|------|--------|
| ![Home](docs/screenshots/home.png) | ![Artigo](docs/screenshots/article.png) |

| Admin Dashboard | Editar Post | Login |
|-----------------|-------------|-------|
| ![Admin](docs/screenshots/admin.png) | ![Editar Post](docs/screenshots/edit.png) | ![Login](docs/screenshots/login.png) |

---

## 🛠️ Tecnologias

| Camada | Tecnologia | Origem |
|--------|-----------|--------|
| Framework | Next.js 15 (App Router) | Módulo 04 — ADR-01 |
| Linguagem | TypeScript | Módulo 02 Aula 01 |
| Estilização | Tailwind CSS | Módulo 04 Aula 02 — ADR-02 |
| Formulários | React Hook Form + Zod | ADR-03 (curso ensina Formik+Yup) |
| HTTP | Axios | Módulo 02 Aula 06 |
| Estado global | Context API | Módulo 03 Aula 03 |
| Testes | Vitest + React Testing Library | Módulo 03 Aula 05 |
| Auth | JWT em httpOnly cookie + middleware | ADR-04 |
| Container | Docker + Docker Compose | Requisito do challenge |
| CI/CD | GitHub Actions | Requisito do challenge |

### Hooks e Componentes Funcionais

Toda a aplicação utiliza **componentes funcionais** com hooks — não há class components. Os seguintes hooks são utilizados:

| Hook | Onde é usado | Para quê |
|------|-------------|----------|
| `useState` | AuthContext, PostForm, SearchBar, CommentSection, MarkAsReadButton, AdminLayout, páginas admin e login | Gerenciamento de estado local |
| `useEffect` | AuthContext, PostForm, CommentSection, MarkAsReadButton, páginas admin e login | Side effects (fetch de dados, rehydrate de auth, fechar dropdowns) |
| `useCallback` | AuthContext, CommentSection, página `/admin` | Memoização de funções (login, logout, paginação, recarga de stats) |
| `useContext` | useAuth (custom hook) | Acesso ao contexto de autenticação |
| `useRef` | PostForm | Referências DOM (selects de disciplina e status para detectar outside-click) |
| `useRouter` / `useSearchParams` | Login, AuthContext, página `/admin`, SearchBar | Navegação programática e leitura de query params |

Também são usados hooks de bibliotecas:

| Hook/API | Origem | Onde é usado |
|----------|--------|--------------|
| `useForm` + `Controller` | React Hook Form | PostForm, CommentForm, Login |
| `zodResolver` | `@hookform/resolvers/zod` | PostForm, CommentForm, Login — integra Zod com RHF |

**Custom hook:**
- `useAuth()` — encapsula `useContext(AuthContext)` com tratamento de erro, usado em todos os componentes que precisam do estado de autenticação

### Decisões Arquiteturais (ADRs)

Algumas escolhas tecnológicas divergem do conteúdo ensinado nas aulas. Cada divergência foi registrada como uma ADR (Architecture Decision Record) com a justificativa correspondente:

| ADR | Decisão | Motivo |
|-----|---------|--------|
| 01 | Next.js App Router em vez de React+Vite | Demonstra conteúdo do Módulo 04 (SSR, API Routes, BFF) |
| 02 | Tailwind CSS em vez de Styled Components | Integração nativa com App Router, sem runtime JS |
| 03 | React Hook Form + Zod em vez de Formik+Yup | Inferência TypeScript nativa, padrão de mercado atual |
| 04 | httpOnly cookie em vez de localStorage | Proteção contra XSS, sem flash de autenticação |
| 05 | Estrutura em camadas (services/, lib/, types/) | Espelha a arquitetura da API Fase 2 |
| 06 | Contract-first para comentários | Frontend definiu o contrato da API de comentários |
| 07 | UUID em localStorage para comentários anônimos | Ownership de comentários sem exigir login |

---

## 🏗️ Arquitetura

### Renderização Híbrida

A aplicação utiliza **renderização híbrida** conforme ensinado no Módulo 04 (Aulas 04 e Extra). Cada rota foi classificada como Server ou Client Component com base na sua necessidade de interatividade:

| Rota | Tipo | Justificativa |
|------|------|---------------|
| `/` | Server Component | SEO + performance para visitantes — hero + lista paginada |
| `/posts` | Server Component | Listagem completa com busca (`?q=`) e filtro por disciplina (`?discipline=`) — SEO indexável |
| `/posts/[id]` | Server Component | SEO + conteúdo indexável |
| `/login` | Client Component | Formulário interativo |
| `/admin` | Client Component | Lista mutável, ações inline |
| `/admin/posts/new` | Client Component | Formulário interativo |
| `/admin/posts/[id]/edit` | Client Component | Carrega dados + formulário |
| `/grupo` | Server Component | Estática, dados fixos |
| `/design-system` | Server Component | Estática, documentação |

Cada rota com I/O pode também declarar um arquivo `loading.tsx` adjacente, renderizado automaticamente pelo App Router enquanto a Server Component carrega dados. A aplicação fornece skeletons de alta fidelidade para `/`, `/posts` e `/posts/[id]` — ver [Loading States](#-loading-states).

### Diagrama de Arquitetura

```mermaid
graph TB
    Browser[Browser]

    subgraph "Next.js 15"
        MW[middleware.ts<br/>Proteção /admin/*]
        SC[Server Components<br/>/, /posts, /posts/id, /grupo]
        CC[Client Components<br/>/login, /admin/*]
        API[API Routes<br/>/api/auth/*]
    end

    Backend[(API Fase 2<br/>localhost:3030)]

    Browser --> MW
    MW --> SC
    MW --> CC
    SC -->|fetch| Backend
    CC -->|Axios| Backend
    CC -->|cookie| API
    API -->|JWT decode| CC
```

### Estrutura de Pastas

```
src/
├── app/                    # Next.js App Router pages + API Routes
│   ├── api/auth/           # set-cookie, clear-cookie, me
│   ├── admin/              # Área protegida (Client Components) — layout.tsx + page.tsx + posts/new + posts/[id]/edit
│   ├── posts/              # Listagem (page.tsx) + detalhe ([id]/page.tsx) — Server Components
│   ├── login/              # Página de login (Client Component)
│   ├── grupo/              # Página do grupo
│   ├── design-system/      # Documentação do Design System
│   ├── loading.tsx         # Skeleton da home
│   └── globals.css         # Tokens Tailwind v4 (@theme) + estilos base
├── components/
│   ├── layout/             # Header, Footer, Sidebar, PublicLayout
│   ├── posts/              # PostCard, PostList, SearchBar, MarkAsReadButton
│   ├── comments/           # CommentSection, CommentForm, CommentItem
│   ├── admin/              # PostForm (criação/edição)
│   └── ui/                 # Button, Input, Badge, ConfirmModal, DataTable, MarkdownEditor, Skeleton, Spinner, etc.
├── contexts/               # AuthContext com hook useAuth
├── lib/
│   ├── api.ts              # Instância Axios + interceptors
│   ├── anonymous.ts        # UUID em localStorage
│   ├── discipline.ts       # Mapa hardcoded slug↔UUID (resolve disciplina em SSR anônimo)
│   └── schemas/            # Schemas Zod (login, post, comment)
├── services/               # auth.service.ts, posts.service.ts, comments.service.ts, disciplines.service.ts
├── types/                  # Interfaces TypeScript (user, post, comment)
└── middleware.ts            # Proteção de rotas /admin/*
```

---

## 📄 Páginas e Funcionalidades

### Páginas Públicas

- **Home** (`/`): Página inicial com hero contendo campo de busca em destaque e grid paginado dos posts mais recentes. Renderizada como Server Component para otimizar SEO. A busca via hero redireciona para `/posts?q=...`.

- **Listagem** (`/posts`): Server Component que consome `GET /posts/search` quando há `?q=` ou `?discipline=` e `GET /posts` no caso contrário. Suporta paginação, busca textual e filtro por disciplina (resolvido client-side e server-side via mapa hardcoded `slug→UUID` em [`lib/discipline.ts`](src/lib/discipline.ts) — evita um round-trip extra a `GET /disciplines` quando o visitante é anônimo).

- **Artigo** (`/posts/[id]`): Exibe o conteúdo completo de um post (renderizado como **Markdown** via `react-markdown` com classes `prose` do `@tailwindcss/typography`), com badges de status e disciplina. Inclui:
  - **Botão "Marcar como lido"** ([`MarkAsReadButton`](src/components/posts/MarkAsReadButton.tsx)) — visível apenas para usuários autenticados; faz `POST /reads` e é idempotente.
  - **Seção de comentários anônimos** — cada visitante recebe um UUID em `localStorage` (chave `edublog_anonymous_id`) que vai no header `X-Anonymous-Id` em toda chamada à API de comentários. O campo `can_delete` é calculado server-side e habilita o botão de exclusão apenas para o autor anônimo.

- **Grupo** (`/grupo`): Cards com os integrantes do Grupo 12 e seus respectivos RMs.

- **Design System** (`/design-system`): Documentação interativa do Design System "The Academic Curator" — paleta de cores, tipografia, elevação, componentes e regras visuais.

### Autenticação

- **Login** (`/login`): Formulário passwordless que solicita apenas o email do docente. Validação em tempo real com React Hook Form + Zod. Feedback visual de erro seguindo o Design System (fundo vermelho suave). Após login bem-sucedido, redireciona para `?redirect=` se presente, ou para `/admin` (TEACHER) / `/` (STUDENT).

### Área Administrativa (protegida)

Todas as rotas `/admin/*` são protegidas por `middleware.ts` — apenas usuários com role TEACHER e JWT válido em httpOnly cookie podem acessar. STUDENT que tente acessar é redirecionado para `/`; visitante anônimo é redirecionado para `/login?redirect=...`.

- **Dashboard** (`/admin`): Painel com **4 stats cards** no topo (total de posts, publicados, rascunhos+arquivados, total de leituras) e tabela de artigos inline com:
  - Ordenação clicável por título, autor, disciplina, status e data
  - Filtros opcionais por texto/disciplina/status (revelados via toggle)
  - Seleção de tamanho de página (10/25/50)
  - Paginação numerada
  - Ações editar/excluir por linha, com `ConfirmModal` antes da exclusão
  
  > **Nota:** existe um componente genérico [`DataTable`](src/components/ui/data-table/DataTable.tsx) (testado isoladamente) na pasta `ui/`. A página `/admin` implementa a tabela inline para customizar layout e celular-mesclagem (título + autor compartilham célula). O `DataTable` está disponível para reuso em futuras telas.

- **Novo Post** (`/admin/posts/new`): Formulário para criação de postagens com título, **conteúdo em Markdown** (via [`MarkdownEditor`](src/components/ui/MarkdownEditor.tsx) — wrapper de `@uiw/react-md-editor` com tokens do Design System), disciplina e status. Validação com Zod — título 5–255 chars, conteúdo ≥ 10 chars.

- **Editar Post** (`/admin/posts/[id]/edit`): Mesmo formulário de criação, pré-populado com os dados do post existente. O campo de autor exibe o nome do criador original como informação não editável.

### 💀 Loading States

Cada rota com I/O tem um `loading.tsx` adjacente que renderiza skeletons de alta fidelidade enquanto a Server Component aguarda dados (commit `1f05378`):

| Arquivo | Skeleton |
|---------|----------|
| [`app/loading.tsx`](src/app/loading.tsx) | Home — hero + grid de cards |
| [`app/posts/loading.tsx`](src/app/posts/loading.tsx) | Listagem — barra de busca + grid |
| [`app/posts/[id]/loading.tsx`](src/app/posts/[id]/loading.tsx) | Artigo — título, metadados, parágrafos + seção de comentários |

O componente atômico [`Skeleton`](src/components/ui/Skeleton.tsx) é reusado em todas as variações com classes utilitárias de altura e largura.

---

## 🔐 Fluxo de Autenticação

O frontend utiliza **JWT armazenado em httpOnly cookie** (ADR-04) em vez de `localStorage`. Essa escolha protege contra ataques XSS — JavaScript da página não tem leitura direta do cookie. O token só é exposto ao client via `GET /api/auth/me`, que primeiro valida a assinatura server-side antes de devolver os dados.

### Cookies utilizados

Dois cookies são gravados no login (ambos httpOnly):

| Cookie | Conteúdo | Por quê |
|--------|----------|---------|
| `auth_token` | JWT assinado pela API Fase 2 | Fonte de verdade para `id`, `role` e `sessionId`. Validado em todo request a `/admin/*` no middleware. |
| `auth_user` | Base64 de `{ name, email }` (não assinado) | Apenas para **exibição** (nome no Header, autor no Post). Como não é fonte de autorização, dispensa assinatura. Se ausente/corrompido, `/api/auth/me` retorna 401 e força re-login. |

### API Routes internas

Três rotas Next.js (`src/app/api/auth/`) encapsulam o ciclo de vida dos cookies:

- `POST /api/auth/set-cookie` — recebe `{ token, user }` após login e grava `auth_token` + `auth_user` como httpOnly
- `POST /api/auth/clear-cookie` — remove ambos no logout
- `GET /api/auth/me` — decodifica o JWT com `JWT_SECRET`, valida `auth_user`, e devolve `{ id, role, name, email, token }`. **O `token` é devolvido no corpo** porque o `AuthContext` precisa restaurá-lo no header `Authorization` do Axios após page refresh. O cookie em si permanece inacessível ao JS — só o endpoint controlado pelo servidor (após validação) expõe o token

### Bibliotecas JWT

O projeto usa **duas libs de JWT por necessidade de runtime**:

| Lib | Onde | Por quê |
|-----|------|---------|
| `jose` (`jwtVerify`) | [`middleware.ts`](src/middleware.ts) | Middleware roda no **Edge Runtime**, que não suporta `jsonwebtoken` (depende de APIs Node) |
| `jsonwebtoken` (`jwt.verify`) | [`/api/auth/me`](src/app/api/auth/me/route.ts) | Route Handler roda no **Node Runtime**; usa a API mais conhecida e tipada |

### Rehidratação após refresh

O `AuthContext` é Client Component (precisa expor `user`, `login`, `logout` via Context). Em vez de fazer rehidratação **bloqueante** no `layout.tsx` (que pagaria a latência de `/api/auth/me` em toda navegação), optou-se por rehidratação **client-side não-bloqueante** dentro do próprio `AuthContext.useEffect`:

1. Render inicial entrega `user=null, isLoading=true`
2. `useEffect` chama `/api/auth/me`; em caso de sucesso, hidrata `user`
3. Componentes que dependem de `user` usam `isLoading` para decidir entre skeleton e conteúdo

Como `/admin/*` é bloqueado **antes** pelo `middleware.ts` (que lê o cookie diretamente), nunca há vazamento de UI protegida para visitantes anônimos. O trade-off aceito: um piscar curto (~100ms) no Header (área pública) durante a rehidratação — mitigado pelo skeleton no avatar.

```mermaid
sequenceDiagram
    participant Browser
    participant Next as Next.js
    participant API as API Routes (/api/auth)
    participant Backend as API Fase 2

    Note over Browser,Backend: Login
    Browser->>Next: POST /login (email)
    Next->>Backend: POST /auth/login
    Backend-->>Next: { user, token }
    Next->>API: POST /api/auth/set-cookie (token)
    API-->>Browser: httpOnly cookie setado

    Note over Browser,Backend: Navegação protegida
    Browser->>Next: GET /admin
    Next->>Next: middleware.ts verifica cookie
    alt Cookie inválido/ausente
        Next-->>Browser: Redirect para /login
    else Cookie válido
        Next-->>Browser: Renderiza página admin
    end

    Note over Browser,Backend: Rehydrate (page refresh)
    Browser->>API: GET /api/auth/me (cookie automático)
    API->>API: Decodifica JWT com JWT_SECRET
    API-->>Browser: { user } atualiza AuthContext

    Note over Browser,Backend: Logout
    Browser->>API: POST /api/auth/clear-cookie
    API-->>Browser: Cookie removido
    Browser->>Browser: Redirect para /
```

---

## 🎨 Design System

O Design System **"The Academic Curator"** foi criado para transmitir seriedade acadêmica com leveza visual. Os tokens estão configurados na diretiva `@theme` em [`src/app/globals.css`](src/app/globals.css) (padrão **Tailwind v4 CSS-first** — não há mais `tailwind.config.ts`) e são usados consistentemente em toda a aplicação. O preset Tailwind Typography (`@plugin "@tailwindcss/typography"`) é mapeado para os mesmos tokens, garantindo que o conteúdo Markdown dos posts respeite a paleta.

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#022448` | Headers, elementos de destaque |
| `primary-container` | `#1E3A5F` | Fundos de destaque |
| `secondary` | `#006A61` | Botões primários, links ativos |
| `secondary-container` | `#86F2E4` | Badges, destaques leves |
| `surface` | `#F9F9FF` | Fundo principal |
| `on-surface` | `#111C2D` | Texto (nunca preto puro) |
| `on-surface-variant` | `#94A3B8` | Texto secundário |
| `error` | `#DC2626` | Validação, estados de erro |

### Regras Visuais

- **Separação por elevação, não por bordas (regra dominante)**: Para separar áreas no mesmo nível visual o padrão é shift de background color (`bg-surface-container-low` vs `bg-surface-container`) em vez de `1px solid`. Bordas só aparecem em três cenários permitidos:
  1. **Inputs em erro** — `bg-error-container/20 border border-error/40` para reforçar o estado de falha
  2. **Containers funcionais** — sidebar (`border-r border-outline-variant/20`), linhas internas de tabela (`divide-y`), separador de cabeçalho de card (`border-b border-surface-container-high`)
  3. **Inputs em foco** — `focus:ring-2 focus:ring-primary/20` (não é border `solid` propriamente, mas ring)
- **Botão primário com gradiente**: `bg-gradient-to-r from-secondary to-on-secondary-container` — nunca cor sólida
- **Header com glassmorphism**: `bg-slate-50/80 backdrop-blur-md` para efeito de vidro fosco
- **Cards com sombra sutil**: `shadow-xl shadow-sky-950/5`
- **Texto nunca em preto puro**: sempre `text-on-surface` (`#111C2D`) ou `text-on-surface-variant` (`#43474E`)

### Ícones por Disciplina

Ícones do [Material Symbols](https://fonts.google.com/icons) mapeados por disciplina:

| Disciplina | Ícone |
|------------|-------|
| Matemática | `functions` |
| Português | `menu_book` |
| Ciências | `science` |
| História | `history_edu` |
| Geografia | `public` |

---

## 🧪 Testes

A aplicação utiliza **Vitest** + **React Testing Library** para testes, seguindo o padrão ensinado no Módulo 03 Aula 05. Os testes focam em **Client Components** — Server Components não são testáveis em ambiente jsdom. Chamadas HTTP são mockadas com `vi.mock('axios')`.

### Áreas Testadas

| Área | Arquivo de teste | O que testa |
|------|-----------------|-------------|
| AuthContext | `contexts/__tests__/AuthContext.test.tsx` | Login, logout, rehydrate do usuário |
| PostCard | `components/posts/__tests__/PostCard.test.tsx` | Renderização, badges, links |
| SearchBar | `components/posts/__tests__/SearchBar.test.tsx` | Busca, filtros por disciplina |
| MarkAsReadButton | `components/posts/__tests__/MarkAsReadButton.test.tsx` | Estados (não-lido/lido/loading), chamada `POST /reads`, idempotência |
| PostForm | `__tests__/components/admin/PostForm.test.tsx` | Validação Zod, submissão, mock do MarkdownEditor |
| CommentForm | `__tests__/components/comments/CommentForm.test.tsx` | Criação de comentários |
| CommentItem | `__tests__/components/comments/CommentItem.test.tsx` | Renderização, deleção |
| DataTable | `components/ui/data-table/__tests__/DataTable.test.tsx` | Ordenação, filtro, paginação |
| Admin page | `__tests__/app/admin/AdminPage.test.tsx` | Listagem, ações de editar/excluir |
| Login page | `app/login/__tests__/LoginPage.test.tsx` | Formulário, validação, redirect |
| Schemas Zod | `lib/schemas/__tests__/*.test.ts` | Validação de login, post, comment |
| `lib/anonymous.ts` | `lib/__tests__/anonymous.test.ts` | Geração/persistência UUID em localStorage |
| `lib/discipline.ts` | `lib/__tests__/discipline.test.ts` | Resolução slug↔UUID e label |
| Services | `services/__tests__/posts.service.test.ts`, `services/__tests__/comments.service.test.ts` | Chamadas HTTP com axios mockado — query params, header `X-Anonymous-Id`, conversão FHIR de sort |
| UI components | `components/ui/__tests__/*.test.tsx` | Badge, Button, Input, ConfirmModal, IconCount |

### Como Rodar

```bash
npm run test          # Watch mode (desenvolvimento)
npm run test:run      # Execução única (CI)
npm run test:coverage # Com relatório de cobertura
```

---

## 🚀 Setup e Instalação

### Pré-requisitos

- **Node.js** 20+ ([Download](https://nodejs.org/)) — versão usada no Dockerfile e nos workflows de CI/CD
- **npm** 10+ (incluído com Node.js 20)
- **API Fase 2** rodando em `http://localhost:3030` ([Repositório](https://github.com/natanjunior/8FSDT-tech-challenge-2))

### 1. Clonar o Repositório

```bash
git clone https://github.com/natanjunior/8FSDT-tech-challenge-3.git
cd 8FSDT-tech-challenge-3
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

```bash
cp .env.example .env
```

Edite `.env` com suas configurações:

```env
NEXT_PUBLIC_API_URL=http://localhost:3030
JWT_SECRET=mesma_secret_da_api_fase_2
```

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Aplicação rodando em: `http://localhost:3000`

### Variáveis de Ambiente

| Variável | Descrição | Padrão | Obrigatória |
|----------|-----------|--------|-------------|
| `NEXT_PUBLIC_API_URL` | URL da API Fase 2 | `http://localhost:3030` | Sim |
| `JWT_SECRET` | Secret para decodificar JWT (mesmo da Fase 2) | — | Sim |

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento (localhost:3000) |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run test` | Testes em watch mode |
| `npm run test:run` | Testes em execução única (CI) |
| `npm run test:coverage` | Testes com relatório de cobertura |

---

## 🐳 Docker

A aplicação é containerizada com **Docker multi-stage build** para garantir uma imagem final mínima, segura e idêntica entre ambientes (desenvolvimento, CI e produção). A abordagem segue boas práticas oficiais do Next.js: separar a etapa de build (que precisa de devDependencies como TypeScript, Tailwind e tipos) da etapa de runtime, que utiliza o **output `standalone`** do Next.js — um servidor Node autocontido que dispensa `node_modules` completo na imagem final.

### Estratégia Multi-Stage

O [Dockerfile](Dockerfile) é dividido em três estágios. Apenas o último estágio compõe a imagem publicada; os demais são descartados.

| Estágio | Base | Responsabilidade |
|---------|------|------------------|
| `deps` | `node:20-alpine` | Instala todas as dependências (`npm ci`) — inclusive devDependencies, necessárias para o build do Next |
| `builder` | `node:20-alpine` | Copia `node_modules` do estágio anterior, copia o código-fonte e executa `npm run build` (gera `.next/standalone` e `.next/static`) |
| `runner` | `node:20-alpine` | Imagem final. Copia apenas `public/`, `.next/standalone` e `.next/static`. Cria usuário não-root `nextjs:nodejs` (UID 1001) e expõe a porta 3000 |

```mermaid
graph LR
    A[Source] --> B[Stage 1: deps<br/>npm ci]
    B --> C[Stage 2: builder<br/>npm run build]
    C --> D[Stage 3: runner<br/>node server.js]
    style D fill:#86F2E4,stroke:#006A61
```

### Decisões de Segurança e Tamanho

- **Imagem `alpine`**: base mínima (~5 MB) que reduz superfície de ataque e tempo de pull
- **Usuário não-root**: o container roda como `nextjs` (UID 1001), nunca como root — boa prática contra container escape
- **Output `standalone`**: configurado em [next.config.ts](next.config.ts) — o Next gera um servidor com apenas as dependências de produção tree-shaken, reduzindo a imagem final em ~80% comparada a copiar `node_modules` inteiro
- **`.dockerignore`**: exclui `node_modules`, `.next`, `.git`, `docs/`, arquivos `.env` e o próprio `docker-compose.yml` do contexto de build, evitando vazamento de segredos e reduzindo o tempo de transferência

### docker-compose

O [docker-compose.yml](docker-compose.yml) orquestra o serviço de frontend e expõe variáveis de ambiente. Há um bloco comentado para conectar à rede externa criada pelo `docker-compose` da Fase 2, permitindo que o frontend resolva `backend:3030` em vez de `localhost:3030`.

```yaml
services:
  frontend:
    build: { context: ., dockerfile: Dockerfile }
    ports: ['3000:3000']
    environment:
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-http://localhost:3030}
      - JWT_SECRET=${JWT_SECRET}
```

### Comandos

```bash
# Build da imagem
docker build -t edublog-frontend .

# Run direto (após build)
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=http://host.docker.internal:3030 \
  -e JWT_SECRET=<mesma_secret_da_fase_2> \
  edublog-frontend

# Via docker-compose (lê .env automaticamente)
docker compose up -d
docker compose logs -f frontend
docker compose down
```

---

## ⚙️ CI/CD

O projeto utiliza **GitHub Actions** com pipelines separados para **integração contínua** (CI) e **entrega contínua** (CD). A separação garante que toda mudança seja validada antes de chegar à `main`, e que toda imagem publicada no registry tenha origem rastreável em um commit que passou nos checks.

### Pipeline de CI

Definido em [`.github/workflows/ci.yml`](.github/workflows/ci.yml). Executa em **push para qualquer branch** e em **pull requests para `main`**. Composto por 4 jobs:

| Job | Comando | Propósito |
|-----|---------|-----------|
| `lint` | `npm run lint` | ESLint — padronização de código |
| `type-check` | `npx tsc --noEmit` | Verifica tipagem sem gerar arquivos |
| `test` | `npx vitest run --reporter=verbose` | Executa toda a suite de testes |
| `build` | `npm run build` | Build de produção do Next.js |

O job `build` declara `needs: [lint, type-check, test]` — só executa se os três anteriores passarem. Os três jobs de validação rodam em **paralelo**, otimizando o tempo total do pipeline.

```mermaid
graph LR
    Push[push / PR] --> L[lint]
    Push --> T[type-check]
    Push --> Te[test]
    L --> B[build]
    T --> B
    Te --> B
    B --> Done[✓ Pronto para merge]
```

Todos os jobs utilizam **Node 20** com cache de `npm` via `actions/setup-node@v4`, reduzindo o tempo de instalação em runs subsequentes.

### Pipeline de CD

Definido em [`.github/workflows/cd.yml`](.github/workflows/cd.yml). Executa apenas em **push para `main`** (tipicamente após merge de PR validado pelo CI). Constrói a imagem Docker e publica no **GitHub Container Registry (GHCR)** em `ghcr.io/natanjunior/8fsdt-tech-challenge-3`.

A action `docker/metadata-action@v5` gera duas tags por imagem:
- `sha-<short_commit>` — identifica o commit exato (versionamento imutável)
- `latest` — sempre aponta para o último build de `main`

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant GH as GitHub
    participant CI as CI Workflow
    participant CD as CD Workflow
    participant GHCR as ghcr.io

    Dev->>GH: Push em feature branch
    GH->>CI: Dispara CI
    CI-->>GH: ✓ lint + types + tests + build
    Dev->>GH: Merge PR em main
    GH->>CD: Dispara CD
    CD->>CD: docker build (multi-stage)
    CD->>GHCR: push image:sha-abc + :latest
    GHCR-->>Dev: Imagem disponível para pull
```

### Variáveis e Secrets

| Tipo | Nome | Uso |
|------|------|-----|
| Secret | `GITHUB_TOKEN` | Fornecido automaticamente pelo Actions; autoriza push no GHCR |
| Variable | `NEXT_PUBLIC_API_URL` | URL da API consumida em build-time (passada como `--build-arg`) |
| Secret (CI) | `JWT_SECRET` | Placeholder no CI (`ci-placeholder-secret`) — o build não precisa de uma secret real |

### Como Consumir a Imagem Publicada

```bash
# Pull da imagem mais recente
docker pull ghcr.io/natanjunior/8fsdt-tech-challenge-3:latest

# Pull de uma versão específica (por commit SHA)
docker pull ghcr.io/natanjunior/8fsdt-tech-challenge-3:sha-0a5ea69

# Run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=<url_da_api> \
  -e JWT_SECRET=<secret> \
  ghcr.io/natanjunior/8fsdt-tech-challenge-3:latest
```

> A imagem é pública (visibilidade do pacote configurada no GHCR), portanto não exige autenticação para `pull`.

---

## ⚠️ Dificuldades Encontradas

Esta seção documenta os principais obstáculos enfrentados pela equipe durante o desenvolvimento e como foram resolvidos. O ciclo completo de negociação de mudanças com o backend está em [`docs/2026-05-13-handoff-api-changes-fase3.md`](docs/2026-05-13-handoff-api-changes-fase3.md).

### 1. Negociação de mudanças contratuais com a Fase 2

Ao iniciar a integração, identificamos cinco gaps entre o que a UI precisava e o que a API expunha:

| Item | O que faltava | Tipo |
|------|---------------|------|
| 1 | `?discipline=` e `?status=` em `GET /posts/search` | Crítico |
| 2 | Ordenação por `published_at`/`title`/`updated_at` | Crítico |
| 3 | Endpoints de comentários (não existiam) | Alto |
| 4 | `comments_count` e `reads_count` no shape do Post | Médio |
| 5 | `GET /posts/:id` exigir auth (impossibilitava SEO público) | Alto |

Optamos por **documentar cada solicitação formalmente** ([`docs/2026-04-01-api-change-requests.md`](docs/2026-04-01-api-change-requests.md)) antes de escrever workarounds. O backend respondeu em 3 dias com todas as 5 mudanças implementadas — e mais duas **breaking changes** decorrentes:
- Migração `POST/GET /posts/:id/read` → `POST /reads` (commit `41d2980`)
- Timestamps normalizados de `createdAt`/`updatedAt` para `created_at`/`updated_at` (commit `b75775c`)
- Comentários migrados de rota aninhada para entidade independente em `/comments` (commit `df286fa`)

**Aprendizado:** investir em contrato antes de código gerou retrabalho mínimo e evitou tomadas de decisão isoladas em cada lado.

### 2. Markdown editor em ambiente jsdom

A migração do `<textarea>` para o [`@uiw/react-md-editor`](https://uiwjs.github.io/react-md-editor/) quebrou os testes do `PostForm` — o editor usa APIs do DOM que o jsdom não fornece (`ResizeObserver`, computed styles específicos). Resolvido em duas etapas:
1. **`vi.mock('@uiw/react-md-editor', ...)`** declarado no topo de cada arquivo de teste que renderiza o `PostForm` ([`AdminPage.test.tsx:66`](src/__tests__/app/admin/AdminPage.test.tsx#L66), `PostForm.test.tsx`) — substitui o editor por um `<textarea data-testid="md-editor">` controlado (commits `61f1a20`, `3616a86`)
2. **`getByTestId`** em vez de `getByLabelText` no PostForm test, porque o `<textarea>` mockado não preserva a associação `<label htmlFor>` original (commit `16114cb`)

Bônus de segurança: adicionamos `skipHtml` ao `ReactMarkdown` que renderiza o post para garantir que HTML inline no Markdown seja escapado (commit `2f1c12c`).

### 3. Material Symbols sobrescrevendo utilities do Tailwind

O Google Fonts injeta `.material-symbols-outlined { font-size: 24px }` com especificidade `(0,1,0)`. Como o `<link>` carrega depois do CSS do Next.js, as utilities `text-sm`/`text-lg`/etc no ícone eram sobrescritas, deixando todos os ícones com o mesmo tamanho.

Tentamos primeiro ajustar a ordem de import em `globals.css` (commit `0d06115`) — não funcionou porque o `<link>` ainda fica fora da cascata do CSS bundleado. A solução final usa **especificidade dupla** em CSS (`.material-symbols-outlined.text-lg { font-size: 1.125rem }`) com especificidade `(0,2,0)` — sempre vence o Google Fonts (commit `e1370f7`). O bloco está documentado em [`globals.css`](src/app/globals.css#L88-L103).

### 4. JWT em Edge Runtime vs Node Runtime

O `middleware.ts` roda em **Edge Runtime**, que não suporta `jsonwebtoken` (depende de APIs Node). Mas no API Route `/api/auth/me` o `jsonwebtoken` é mais ergonômico. Decisão pragmática: **usar duas libs** — `jose` no middleware, `jsonwebtoken` no route handler. Os dois usam o mesmo `JWT_SECRET`, então a verificação é equivalente. O custo é ~30 KB extras no bundle e a complexidade de manter duas APIs sincronizadas — aceitável para evitar reescrever toda a verificação em `jose`.

### 5. Auth flash e a decisão de não bloquear no `layout.tsx`

A proposta inicial era fazer `await fetch('/api/auth/me')` no `RootLayout` (Server Component) para hidratar `user` antes do primeiro render. Implementamos e descobrimos um problema: páginas públicas (home, listagem) passavam a pagar a latência da rota mesmo para visitantes anônimos, derrubando o LCP em ~300ms. A solução foi mover a rehidratação para o `useEffect` do `AuthContext` (client-side, não-bloqueante) e proteger `/admin/*` exclusivamente no middleware. Trade-off documentado na seção [Fluxo de Autenticação](#-fluxo-de-autenticação).

### 6. Cookie de exibição vs cookie de autenticação

Inicialmente colocamos `name` e `email` dentro do próprio JWT — limpo, mas inflava o payload e exigia re-emissão do token sempre que o usuário trocasse de email. Refatoramos para dois cookies httpOnly: `auth_token` (JWT minimal: `id`, `role`, `sessionId`) e `auth_user` (base64 de `{name, email}`, sem assinatura). O `/api/auth/me` lê o JWT para `id`/`role` (fonte de autoridade) e o `auth_user` apenas para campos de display. Se `auth_user` estiver ausente ou corrompido, força re-login (commit `85deef1`).

---

## 👥 Equipe

**Grupo 12**

- **Dario Lacerda** - rm369195
- **Larissa Kramer** - rm370062
- **Mirian Storino** - rm369489
- **Natanael Dias** - rm369334
- **Tiago Victor** - rm370117

---

## 📄 Licença

MIT License - Projeto Educacional
