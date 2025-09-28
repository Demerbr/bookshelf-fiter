# BookDetailLoading BDD Specification

## Feature: Book Detail Loading State
Como um usuário navegando para uma página de detalhes do livro
Eu quero ver um estado de carregamento enquanto os dados são buscados
Para que eu saiba que a página está carregando e não está travada

### Scenario: Display loading skeleton
**Given** o usuário navega para uma página de detalhes do livro
**And** os dados do livro estão sendo carregados
**When** a página renderiza
**Then** deve exibir um skeleton de carregamento
**And** deve ter animação de pulse (animate-pulse)

### Scenario: Proper container styling
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** o container principal deve ter fundo cinza claro (bg-gray-50)
**And** deve ocupar toda a altura da tela (min-h-screen)

### Scenario: Container layout and spacing
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** deve ter container centralizado (container mx-auto)
**And** deve ter padding horizontal (px-4)
**And** deve ter padding vertical (py-8)

### Scenario: Responsive grid layout
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** deve usar grid responsivo (grid-cols-1 lg:grid-cols-2)
**And** deve ter espaçamento entre colunas (gap-8)
**And** deve ter duas colunas em telas grandes

## Feature: Loading Skeleton Elements
Como um usuário
Eu quero ver elementos de skeleton que representem o conteúdo que será carregado
Para que eu tenha uma ideia do layout final da página

### Scenario: Title skeleton
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** deve exibir skeleton para o título
**And** deve ter altura de h-8
**And** deve ter largura de w-1/4
**And** deve ter margem inferior (mb-6)

### Scenario: Image skeleton
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** deve exibir skeleton para a imagem do livro
**And** deve ter altura de h-96
**And** deve ocupar uma coluna do grid

### Scenario: Content skeletons
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** deve exibir skeletons para informações do livro
**And** deve ter skeleton para título (h-8, w-3/4)
**And** deve ter skeleton para autor (h-6, w-1/2)
**And** deve ter skeleton para preço (h-6, w-1/3)
**And** deve ter skeleton para descrição (h-32)

### Scenario: Skeleton styling
**Given** o usuário está na página de carregamento do livro
**When** a página renderiza
**Then** todos os skeletons devem ter cor cinza (bg-gray-200)
**And** devem ter cantos arredondados (rounded)
**And** devem ter espaçamento adequado (space-y-4)
