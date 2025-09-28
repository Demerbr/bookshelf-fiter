# Estrutura de Testes - Bookshelf Filter

Este documento descreve a organização completa dos testes e especificações BDD para o projeto Bookshelf Filter.

## Visão Geral

O projeto implementa uma estratégia de testes abrangente que inclui:
- **Testes Unitários**: Para componentes individuais
- **Especificações BDD**: Para documentar comportamento em linguagem natural
- **Cobertura Completa**: Todos os módulos e componentes principais
- **Padrões Consistentes**: Arrange-Act-Assert e mocks padronizados

## Estrutura de Diretórios

```
src/
├── modules/
│   ├── Cart/
│   │   └── __tests__/
│   │       ├── components/
│   │       │   ├── CartEmptyState.test.tsx
│   │       │   └── CartHeader.test.tsx
│   │       ├── bdd/
│   │       │   ├── CartEmptyState.bdd.md
│   │       │   ├── CartHeader.bdd.md
│   │       │   └── CartModule.bdd.md
│   │       ├── CartModule.test.tsx
│   │       └── README.md
│   │
│   ├── Favorites/
│   │   └── __tests__/
│   │       ├── components/
│   │       │   ├── FavoritesEmptyState.test.tsx
│   │       │   ├── FavoritesHeader.test.tsx
│   │       │   └── FavoriteBookCard.test.tsx
│   │       ├── bdd/
│   │       │   ├── FavoritesEmptyState.bdd.md
│   │       │   ├── FavoritesHeader.bdd.md
│   │       │   ├── FavoriteBookCard.bdd.md
│   │       │   └── FavoritesModule.bdd.md
│   │       ├── FavoritesModule.test.tsx
│   │       └── README.md
│   │
│   ├── BookDetail/
│   │   └── __tests__/
│   │       ├── components/
│   │       │   ├── BookDetailLoading.test.tsx
│   │       │   ├── BookDetailError.test.tsx
│   │       │   └── BookDetailHeader.test.tsx
│   │       ├── bdd/
│   │       │   ├── BookDetailLoading.bdd.md
│   │       │   ├── BookDetailError.bdd.md
│   │       │   └── BookDetailHeader.bdd.md
│   │       └── README.md
│   │
│   └── Home/
│       └── __tests__/
│           ├── components/
│           │   ├── BooksGrid.test.tsx
│           │   ├── EmptyState.test.tsx
│           │   ├── ErrorState.test.tsx
│           │   ├── LoadingState.test.tsx
│           │   └── ResultsCounter.test.tsx
│           ├── bdd/
│           │   ├── BooksGrid.bdd.md
│           │   ├── EmptyState.bdd.md
│           │   ├── ErrorState.bdd.md
│           │   ├── HomeModule.bdd.md
│           │   ├── LoadingState.bdd.md
│           │   └── ResultsCounter.bdd.md
│           ├── HomeModule.test.tsx
│           └── README.md
│
└── components/
    └── __tests__/
        ├── Search.test.tsx
        ├── SortDropdown.test.tsx
        ├── Header.test.tsx
        ├── bdd/
        │   ├── SearchComponent.bdd.md
        │   ├── SortDropdown.bdd.md
        │   └── Header.bdd.md
        └── README.md
```

## Módulos Testados

### 1. Cart Module
**Localização**: `src/modules/Cart/__tests__/`
- **Componentes**: CartEmptyState, CartHeader, CartModule
- **Funcionalidades**: Estado vazio, cabeçalho com contagem, layout responsivo
- **BDD**: Especificações para todos os cenários de carrinho

### 2. Favorites Module
**Localização**: `src/modules/Favorites/__tests__/`
- **Componentes**: FavoritesEmptyState, FavoritesHeader, FavoriteBookCard, FavoritesModule
- **Funcionalidades**: Estado vazio, cabeçalho com contagem, cards de livros favoritos
- **BDD**: Especificações para gerenciamento de favoritos

### 3. BookDetail Module
**Localização**: `src/modules/BookDetail/__tests__/`
- **Componentes**: BookDetailLoading, BookDetailError, BookDetailHeader
- **Funcionalidades**: Estados de carregamento, erro e cabeçalho de detalhes
- **BDD**: Especificações para página de detalhes do livro

### 4. Home Module
**Localização**: `src/modules/Home/__tests__/` (já existente)
- **Componentes**: BooksGrid, EmptyState, ErrorState, LoadingState, ResultsCounter
- **Funcionalidades**: Grid de livros, estados vazios/erro/carregamento, contador de resultados
- **BDD**: Especificações para página inicial

### 5. Shared Components
**Localização**: `src/components/__tests__/`
- **Componentes**: SearchComponent, SortDropdown, Header
- **Funcionalidades**: Pesquisa com debounce, ordenação, navegação
- **BDD**: Especificações para componentes compartilhados

## Padrões de Teste Implementados

### 1. Estrutura AAA (Arrange-Act-Assert)
```typescript
it('should display title', () => {
  // Arrange
  const props = { title: 'Test Title' }
  
  // Act
  render(<Component {...props} />)
  
  // Assert
  expect(screen.getByText('Test Title')).toBeInTheDocument()
})
```

### 2. Mocking Consistente
- **Hooks**: `useCart`, `useFavorites`, `useSearch`
- **Componentes**: Componentes filhos mockados para isolamento
- **Internacionalização**: `react-i18next` mockado
- **Timers**: `jest.useFakeTimers()` para debounce

### 3. Renderização com Providers
```typescript
const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nProvider>
      {component}
    </I18nProvider>
  )
}
```

### 4. Especificações BDD
- **Formato**: Given-When-Then
- **Cobertura**: Todos os cenários de usuário
- **Documentação**: Comportamento em linguagem natural

## Comandos de Execução

### Executar Todos os Testes
```bash
npm test
```

### Executar por Módulo
```bash
# Cart Module
npm test -- src/modules/Cart

# Favorites Module
npm test -- src/modules/Favorites

# BookDetail Module
npm test -- src/modules/BookDetail

# Home Module
npm test -- src/modules/Home

# Shared Components
npm test -- src/components/__tests__
```

### Executar Testes Específicos
```bash
npm test -- CartEmptyState.test.tsx
npm test -- Search.test.tsx
```

### Executar com Cobertura
```bash
npm run test:coverage
```

## Cobertura de Testes

### Componentes Testados: 15+
- ✅ CartEmptyState, CartHeader, CartModule
- ✅ FavoritesEmptyState, FavoritesHeader, FavoriteBookCard, FavoritesModule
- ✅ BookDetailLoading, BookDetailError, BookDetailHeader
- ✅ SearchComponent, SortDropdown, Header
- ✅ BooksGrid, EmptyState, ErrorState, LoadingState, ResultsCounter (existentes)

### Funcionalidades Cobertas
- ✅ Renderização de componentes
- ✅ Interações do usuário
- ✅ Estados e props
- ✅ Layout responsivo
- ✅ Internacionalização
- ✅ Integração entre componentes
- ✅ Casos extremos e tratamento de erros
- ✅ Estilização e classes CSS
- ✅ Navegação e links
- ✅ Funcionalidades de debounce e timers

## Benefícios da Estrutura

1. **Organização Clara**: Cada módulo tem sua própria pasta de testes
2. **Documentação BDD**: Comportamento documentado em linguagem natural
3. **Isolamento**: Componentes testados independentemente
4. **Manutenibilidade**: Padrões consistentes facilitam manutenção
5. **Cobertura Completa**: Todos os componentes principais testados
6. **CI/CD Ready**: Estrutura preparada para integração contínua

## Próximos Passos

1. **Integração**: Configurar testes no pipeline CI/CD
2. **E2E**: Adicionar testes end-to-end com Playwright/Cypress
3. **Performance**: Adicionar testes de performance
4. **Acessibilidade**: Adicionar testes de acessibilidade
5. **Visual**: Adicionar testes visuais com Chromatic
