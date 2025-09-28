# Estrutura de Testes Reorganizada - Bookshelf Filter

Este documento descreve a nova organização dos testes e especificações BDD para o projeto Bookshelf Filter, onde cada componente tem seus testes organizados em sua própria pasta.

## Visão Geral da Nova Estrutura

A estrutura foi reorganizada para que **cada componente tenha sua própria pasta de testes** (`__tests__`) junto com o componente, contendo:
- **Arquivo de teste** (`.test.tsx`)
- **Especificação BDD** (`.bdd.md`)

## Nova Estrutura de Diretórios

```
src/
├── modules/
│   ├── Cart/
│   │   └── components/
│   │       ├── CartEmptyState/
│   │       │   ├── CartEmptyState.tsx
│   │       │   ├── index.ts
│   │       │   └── __tests__/
│   │       │       ├── CartEmptyState.test.tsx
│   │       │       └── CartEmptyState.bdd.md
│   │       │
│   │       └── CartHeader/
│   │           ├── CartHeader.tsx
│   │           ├── index.ts
│   │           └── __tests__/
│   │               ├── CartHeader.test.tsx
│   │               └── CartHeader.bdd.md
│   │
│   ├── Favorites/
│   │   └── components/
│   │       ├── FavoritesEmptyState/
│   │       │   ├── FavoritesEmptyState.tsx
│   │       │   ├── index.ts
│   │       │   └── __tests__/
│   │       │       ├── FavoritesEmptyState.test.tsx
│   │       │       └── FavoritesEmptyState.bdd.md
│   │       │
│   │       └── FavoritesHeader/
│   │           ├── FavoritesHeader.tsx
│   │           ├── index.ts
│   │           └── __tests__/
│   │               ├── FavoritesHeader.test.tsx
│   │               └── FavoritesHeader.bdd.md
│   │
│   ├── BookDetail/
│   │   └── components/
│   │       └── BookDetailLoading/
│   │           ├── bookDetailLoading.tsx
│   │           ├── index.ts
│   │           └── __tests__/
│   │               ├── BookDetailLoading.test.tsx
│   │               └── BookDetailLoading.bdd.md
│   │
│   └── Home/
│       └── components/
│           ├── EmptyState/
│           │   ├── emptyState.tsx
│           │   ├── index.ts
│           │   └── __tests__/
│           │       ├── EmptyState.test.tsx
│           │       └── EmptyState.bdd.md
│           │
│           └── [outros componentes com estrutura similar]
│
└── components/
    ├── Search/
    │   ├── search.tsx
    │   ├── index.ts
    │   └── __tests__/
    │       ├── Search.test.tsx
    │       └── Search.bdd.md
    │
    ├── SortDropdown/
    │   ├── SortDropdown.tsx
    │   ├── index.ts
    │   └── __tests__/
    │       ├── SortDropdown.test.tsx
    │       └── SortDropdown.bdd.md
    │
    └── Header/
        ├── header.tsx
        ├── index.ts
        └── __tests__/
            ├── Header.test.tsx
            └── Header.bdd.md
```

## Vantagens da Nova Estrutura

### 🎯 **Coesão e Proximidade**
- **Testes próximos ao código**: Cada componente tem seus testes na mesma pasta
- **Fácil localização**: Desenvolvedores encontram testes rapidamente
- **Manutenção simplificada**: Mudanças no componente e testes ficam juntas

### 📁 **Organização Clara**
- **Estrutura consistente**: Todos os componentes seguem o mesmo padrão
- **Separação lógica**: Cada componente é independente
- **Escalabilidade**: Fácil adicionar novos componentes com testes

### 🔍 **Descoberta de Testes**
- **Padrão previsível**: `ComponentName/__tests__/ComponentName.test.tsx`
- **BDD junto**: Especificações ficam junto com os testes
- **Documentação próxima**: READMEs podem ser específicos por componente

## Componentes com Testes Organizados

### ✅ **Cart Module**
- `CartEmptyState/__tests__/` - Estado vazio do carrinho
- `CartHeader/__tests__/` - Cabeçalho com contagem de itens

### ✅ **Favorites Module**
- `FavoritesEmptyState/__tests__/` - Estado vazio de favoritos
- `FavoritesHeader/__tests__/` - Cabeçalho com contagem de favoritos

### ✅ **BookDetail Module**
- `BookDetailLoading/__tests__/` - Estado de carregamento

### ✅ **Shared Components**
- `Search/__tests__/` - Componente de pesquisa
- `SortDropdown/__tests__/` - Dropdown de ordenação
- `Header/__tests__/` - Cabeçalho principal

### ✅ **Home Module** (já existente)
- `EmptyState/__tests__/` - Estado vazio da home
- Outros componentes seguem o mesmo padrão

## Comandos de Execução

### Executar Testes por Componente
```bash
# Teste específico de um componente
npm test -- CartEmptyState.test.tsx
npm test -- Search.test.tsx
npm test -- EmptyState.test.tsx

# Testes de um módulo inteiro
npm test -- src/modules/Cart
npm test -- src/modules/Favorites
npm test -- src/modules/BookDetail
npm test -- src/modules/Home
npm test -- src/components
```

### Executar Todos os Testes
```bash
npm test
```

### Executar com Cobertura
```bash
npm run test:coverage
```

## Padrões Mantidos

### 🧪 **Estrutura de Teste**
- **Arrange-Act-Assert**: Padrão AAA mantido
- **Mocking consistente**: Hooks e dependências mockados
- **I18n**: Renderização com providers para internacionalização

### 📝 **BDD**
- **Given-When-Then**: Especificações em linguagem natural
- **Cenários completos**: Cobertura de casos de uso
- **Documentação próxima**: BDD junto com os testes

### 🎨 **Estilização**
- **Classes CSS testadas**: Verificação de estilos
- **Layout responsivo**: Testes de breakpoints
- **Estados visuais**: Loading, error, empty states

## Benefícios da Reorganização

1. **🔗 Coesão**: Testes e código ficam próximos
2. **🚀 Produtividade**: Desenvolvedores encontram testes rapidamente
3. **🛠️ Manutenção**: Mudanças ficam organizadas por componente
4. **📈 Escalabilidade**: Fácil adicionar novos componentes
5. **🎯 Clareza**: Estrutura previsível e consistente
6. **📚 Documentação**: BDD junto com implementação

## Próximos Passos

1. **Completar migração**: Mover todos os componentes restantes
2. **Padronizar**: Garantir que todos seguem a mesma estrutura
3. **Documentar**: Criar READMEs específicos por componente se necessário
4. **CI/CD**: Atualizar pipelines para nova estrutura
5. **Tooling**: Configurar ferramentas para nova organização

Esta nova estrutura torna o projeto mais organizado, mantível e escalável, com testes sempre próximos aos componentes que testam!
