# 📚 Bookshelf - Desafio Técnico Fiter

Uma aplicação Next.js moderna para listagem e busca de livros, inspirada na interface da Amazon. Desenvolvida como solução para o desafio técnico da Fiter.

## 🎯 Objetivo

Implementar uma aplicação web ("Bookshelf") que permita:
- ✅ Listar livros de forma paginada
- ✅ Pesquisar livros por texto
- ✅ Visualizar detalhes de cada livro
- ✅ Interface agradável, responsiva e usável

## 🚀 Funcionalidades Implementadas

### Funcionalidades Obrigatórias
- ✅ **Listagem paginada de livros** (`GET /books?page=1&limit=5`)
- ✅ **Busca de livros por texto** (`GET /books?text=...`)
- ✅ **Página de detalhes do livro** (`GET /books/:id`)
- ✅ **Layout responsivo** (desktop + mobile)
- ✅ **Feedback de carregamento e tratamento de erros**
- ✅ **Código organizado** (componentização, separação de camadas)

### Funcionalidades Desejáveis (Extras)
- ✅ **Ordenação** por título, data, etc.
- ✅ **Filtros adicionais** (autor, editora, ano, etc.)
- ✅ **Favoritos** (persistência em localStorage)
- ✅ **Carrinho** (persistência em localStorage)
- ✅ **Lazy loading / infinite scroll**
- ✅ **Testes automatizados**
- ✅ **Internacionalização** (pt-BR / en-US)
- ✅ **Acessibilidade** (aria-labels, navegação via teclado)

## 🛠 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática completa
- **Tailwind CSS** - Estilização utilitária
- **React Query (TanStack Query)** - Gerenciamento de estado servidor
- **Zustand** - Gerenciamento de estado cliente (favoritos/carrinho)
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones
- **i18next** - Internacionalização
- **Jest + Testing Library** - Testes automatizados
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── books/[id]/        # Página de detalhes do livro
│   ├── cart/              # Página do carrinho
│   ├── favorites/         # Página de favoritos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   └── providers.tsx     # Providers (React Query, i18n)
├── components/           # Componentes reutilizáveis
│   ├── BookCard/         # Card do livro
│   ├── Header/           # Cabeçalho com navegação
│   ├── Search/           # Barra de busca
│   ├── SortDropdown/     # Dropdown de ordenação
│   ├── LanguageSelector/ # Seletor de idioma
│   ├── LoadingProvider/  # Provider de loading
│   ├── InfiniteScrollWrapper/ # Wrapper para infinite scroll
│   └── ui/               # Componentes base (shadcn/ui)
├── modules/              # Módulos específicos
│   ├── BookDetail/       # Módulo de detalhes do livro
│   ├── Cart/             # Módulo do carrinho
│   ├── Favorites/        # Módulo de favoritos
│   └── Home/             # Módulo da página inicial
├── hooks/                # Custom hooks
│   ├── useSearch.ts      # Hook de busca
│   ├── useCart.ts        # Hook do carrinho
│   ├── useFavorites.ts   # Hook de favoritos
│   └── useInfiniteScroll.ts # Hook de infinite scroll
├── stores/               # Zustand stores
│   ├── useCartStore.ts   # Store do carrinho
│   └── useFavoritesStore.ts # Store de favoritos
├── queries/              # React Query hooks
│   ├── useBooksInfiniteQuery.ts
│   └── useBookDetailQuery.ts
├── services/             # Camada de serviços
│   ├── api/              # Cliente HTTP
│   └── types/            # Tipos TypeScript
├── i18n/                 # Internacionalização
│   └── messages/         # Arquivos de tradução
└── lib/                  # Utilitários
    ├── i18n.ts          # Configuração i18n
    ├── formatters.ts    # Formatadores
    └── utils.ts         # Funções auxiliares
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para Execução

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd bookshelf-fiter
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_API_URL=https://34rwfm9yu2.us-east-2.awsapprunner.com
   NODE_ENV=development
   ```
   
   > 💡 **Dica:** O arquivo `env.example` contém todas as variáveis necessárias com valores padrão para desenvolvimento local.

4. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build e produção
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript

# Testes
npm test             # Executa testes
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Executa testes com coverage
```

## 🔧 Configuração de Variáveis de Ambiente

### Arquivo env.example

O projeto inclui um arquivo `env.example` com todas as variáveis de ambiente necessárias para desenvolvimento local:

```env
# Environment Variables para Desenvolvimento Local
NEXT_PUBLIC_API_URL=https://34rwfm9yu2.us-east-2.awsapprunner.com
NODE_ENV=development
```

### Variáveis Disponíveis

| Variável | Descrição | Padrão |
|----------|-----------|---------|
| `NEXT_PUBLIC_API_URL` | URL da API REST para buscar livros | `https://34rwfm9yu2.us-east-2.awsapprunner.com` |
| `NODE_ENV` | Ambiente Node.js (development/production/test) | `development` |
| `PORT` | Porta do servidor de desenvolvimento | `3000` |
| `NEXT_PUBLIC_API_TIMEOUT` | Timeout da API em milissegundos | `10000` |
| `NEXT_PUBLIC_ENABLE_API_LOGGING` | Habilitar logs da API em desenvolvimento | `true` |

### Como Usar

1. **Copie o arquivo de exemplo:**
   ```bash
   cp env.example .env.local
   ```

2. **Ajuste os valores conforme necessário** no arquivo `.env.local`

3. **Para desenvolvimento local com API própria:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

## 🔧 Configuração da API

A aplicação consome a API REST disponível em `https://34rwfm9yu2.us-east-2.awsapprunner.com`.

### Endpoints Utilizados

- `GET /books?page=1&limit=5` - Listar livros paginados
- `GET /books/:id` - Detalhes do livro
- `GET /books?text=search&page=1&limit=5` - Buscar livros por texto
- `GET /books?sortBy=name&sortOrder=ASC` - Ordenar livros

### Estrutura de Resposta

```typescript
// GET /books (listagem)
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "publisher": "string",
      "year": number,
      "coverUrl": "string",
      "description": "string",
      "isbn": "string",
      "pages": number,
      "language": "string",
      "price": "string"
    }
  ],
  "hasMore": boolean,
  "page": number,
  "limit": number
}

// GET /books/:id (detalhes)
{
  "data": {
    "id": "string",
    "title": "string",
    "author": "string",
    "publisher": "string",
    "year": number,
    "coverUrl": "string",
    "description": "string",
    "isbn": "string",
    "pages": number,
    "language": "string",
    "price": "string"
  }
}
```

## 🚀 CI/CD e Deploy

### Pipeline de CI/CD

O projeto utiliza **GitHub Actions** para automatização de CI/CD:

**Arquivo:** `.github/workflows/deploy.yml`

**Fluxo de Deploy:**
1. **Trigger:** Push para branch `main` ou Pull Request
2. **Ambiente:** Ubuntu Latest
3. **Node.js:** Versão 20
4. **Etapas:**
   - Checkout do código
   - Setup do Node.js com cache npm
   - Instalação de dependências (`npm ci`)
   - Execução de testes (`npm test`)
   - Execução de lint (`npm run lint`)
   - Build da aplicação (`npm run build`)
   - Deploy para Vercel

### Deploy Automático

- **Plataforma:** Vercel
- **Deploy:** Automático via GitHub Actions
- **Ambiente:** Produção (branch main) e Preview (PRs)
- **URL de Produção:** Disponível via Vercel

### Configuração Vercel

**Arquivo:** `vercel.json`
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

### Variáveis de Ambiente no Deploy

- `NEXT_PUBLIC_API_URL`: `https://34rwfm9yu2.us-east-2.awsapprunner.com`
- Configurada tanto no GitHub Actions quanto no Vercel

## ✏️ Alterações no Backend

**Nenhuma alteração foi realizada no backend (books-api).**

A aplicação foi desenvolvida utilizando exclusivamente os endpoints fornecidos pela API original, sem necessidade de modificações no backend.

### Endpoints Utilizados (Sem Modificações)
- ✅ `GET /books` - Listagem paginada
- ✅ `GET /books/:id` - Detalhes do livro  
- ✅ `GET /books?text=...` - Busca por texto
- ✅ `GET /books?sortBy=...&sortOrder=...` - Ordenação

## 🎨 Design System

A aplicação utiliza um design system inspirado na Amazon:

- **Primary**: `#146eb4` (Azul Amazon)
- **Accent**: `#ffd814` (Amarelo Amazon)
- **Dark**: `#232f3e` (Cinza escuro)
- **Light**: `#e3e6e6` (Cinza claro)
- **Background**: `#ffffff` (Branco)

## 📱 Responsividade

A interface é totalmente responsiva:
- **Mobile** (< 768px): Layout em coluna única
- **Tablet** (768px - 1024px): Grid 2 colunas
- **Desktop** (> 1024px): Grid 3 colunas

## 🔄 Performance e Cache

- **React Query**: Cache inteligente com invalidação automática
- **Infinite Scroll**: Carregamento progressivo de dados
- **keepPreviousData**: Evita flicker na paginação
- **staleTime**: 1 minuto para queries
- **Zustand Persist**: Persistência local de favoritos e carrinho

## 🌐 Internacionalização

- **Idiomas suportados**: Português (pt-BR) e Inglês (en-US)
- **Detecção automática**: Baseada no localStorage
- **Fallback**: Português como idioma padrão
- **Seletor de idioma**: Disponível no header

## 🧪 Testes

- **Framework**: Jest + Testing Library
- **Coverage**: Configurado para gerar relatórios HTML
- **Ambiente**: jsdom para testes de componentes
- **Arquivos de teste**: Localizados em `__tests__/`

### Executar Testes
```bash
npm test                 # Executa todos os testes
npm run test:watch      # Modo watch
npm run test:coverage   # Com relatório de cobertura
```

## ♿ Acessibilidade

- **ARIA labels**: Implementados em componentes interativos
- **Navegação por teclado**: Suporte completo
- **Contraste**: Cores seguem padrões WCAG
- **Semântica HTML**: Estrutura semântica adequada

## 📊 Funcionalidades Avançadas

### Sistema de Favoritos
- Persistência em localStorage via Zustand
- Interface intuitiva com feedback visual
- Página dedicada para gerenciar favoritos

### Carrinho de Compras
- Adição/remoção de itens
- Controle de quantidade
- Cálculo automático de totais
- Persistência em localStorage

### Busca Avançada
- Busca em tempo real
- Filtros por múltiplos critérios
- Ordenação dinâmica
- Infinite scroll integrado

## 🔧 Configurações de Desenvolvimento

### ESLint
- Configuração Next.js
- Regras personalizadas para React Query
- Integração com TypeScript

### TypeScript
- Configuração strict
- Path mapping configurado
- Tipos completos para toda aplicação

### Tailwind CSS
- Configuração customizada
- Cores do design system
- Animações personalizadas

## 📄 Licença

MIT License

---

**Desenvolvido para o Desafio Técnico da Fiter** 🚀