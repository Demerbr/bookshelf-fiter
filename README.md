# 📚 Bookshelf - Frontend

Uma aplicação Next.js moderna para listagem e busca de livros, inspirada na interface da Amazon.

## 🚀 Funcionalidades

- ✅ Listagem paginada de livros
- ✅ Busca por texto
- ✅ Visualização de detalhes
- ✅ Interface responsiva
- ✅ Loading states e tratamento de erros
- ✅ Cache inteligente com React Query
- ✅ TypeScript completo

## 🛠 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Query** - Gerenciamento de estado servidor
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── components/         # Componentes específicos da app
│   ├── books/[id]/        # Página de detalhes do livro
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   └── providers.tsx     # Providers (React Query)
├── components/           # Componentes reutilizáveis
│   ├── Header/          # Cabeçalho
│   ├── BookCard.tsx    # Card do livro
│   ├── SearchBar.tsx   # Barra de busca
│   └── ui/             # Componentes base (shadcn/ui)
├── queries/              # React Query hooks
│   ├── useBooksListQuery.ts
│   ├── useBookDetailQuery.ts
│   └── index.ts
├── services/           # Camada de serviços
│   ├── api/           # Cliente HTTP
│   │   ├── axios.ts   # Configuração do Axios
│   │   ├── books.ts   # API de livros
│   │   └── index.ts   # Exportações centralizadas
│   └── types/         # Tipos TypeScript
│       └── book.ts    # Tipos relacionados a livros
└── lib/               # Utilitários
    └── utils.ts       # Funções auxiliares
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔧 Configuração da API

A aplicação está configurada para consumir uma API REST em `http://localhost:3000`. 

### Endpoints disponíveis:

- `GET /books?page=1&limit=5` - Listar livros paginados
- `GET /books/:id` - Detalhes do livro
- `GET /books?text=search&page=1&limit=5` - Buscar livros por texto

### Estrutura de resposta:

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
      "language": "string"
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
    "language": "string"
  }
}
```

## 🎨 Design System

A aplicação utiliza um design system baseado nas cores da Amazon:

- **Primary**: `#146eb4` (Azul Amazon)
- **Accent**: `#ffd814` (Amarelo Amazon)
- **Dark**: `#232f3e` (Cinza escuro)
- **Light**: `#e3e6e6` (Cinza claro)
- **Background**: `#ffffff` (Branco)

## 📱 Responsividade

A interface é totalmente responsiva:
- **Mobile**: Layout em coluna única
- **Tablet**: Grid 2 colunas
- **Desktop**: Grid 3 colunas

## 🔄 Cache e Performance

- **React Query**: Cache inteligente com invalidação automática
- **keepPreviousData**: Evita flicker na paginação
- **staleTime**: 5 minutos para listas, 10 minutos para detalhes
- **refetchInterval**: 30 segundos para atualizações automáticas

## 🧪 Próximos Passos

- [ ] Implementar favoritos (localStorage)
- [ ] Adicionar filtros avançados
- [ ] Implementar infinite scroll
- [ ] Adicionar testes automatizados
- [ ] Implementar acessibilidade (ARIA)
- [ ] Adicionar internacionalização
- [ ] Implementar PWA

## 📄 Licença

MIT License