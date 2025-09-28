# FavoritesHeader BDD Specification

## Feature: Favorites Header Display
Como um usuário na página de favoritos
Eu quero ver informações claras sobre meus favoritos
Para que eu possa entender quantos livros tenho salvos e onde estou

### Scenario: Display favorites title
**Given** o usuário está na página de favoritos
**When** a página carrega
**Then** deve exibir o título "My Favorites"
**And** o título deve ter tamanho grande (text-3xl)
**And** deve ter peso de fonte bold (font-bold)

### Scenario: Display favorites count for multiple items
**Given** o usuário está na página de favoritos
**And** há 5 livros favoritos
**When** a página carrega
**Then** deve exibir "5 favorites"
**And** o texto deve ter cor cinza (text-gray-600)

### Scenario: Display singular favorites count
**Given** o usuário está na página de favoritos
**And** há 1 livro favorito
**When** a página carrega
**Then** deve exibir "1 favorite" (singular)
**And** não deve exibir "1 favorites" (plural)

### Scenario: Display zero favorites count
**Given** o usuário está na página de favoritos
**And** não há favoritos (0 itens)
**When** a página carrega
**Then** deve exibir "0 favorites"
**And** o texto deve estar visível

### Scenario: Display heart icon
**Given** o usuário está na página de favoritos
**When** a página carrega
**Then** deve exibir um ícone de coração
**And** o ícone deve ter tamanho médio (h-8 w-8)
**And** o ícone deve ter cor vermelha (text-red-500)
**And** deve estar preenchido (fill-current)
**And** deve estar posicionado ao lado do título

### Scenario: Proper header layout
**Given** o usuário está na página de favoritos
**When** a página carrega
**Then** o header deve ter margem inferior (mb-8)
**And** o título e ícone devem estar alinhados horizontalmente
**And** deve haver espaçamento entre o ícone e título (gap-3)
**And** o contador de favoritos deve estar abaixo do título

## Feature: Dynamic Favorites Count
Como um usuário
Eu quero que o contador de favoritos seja atualizado dinamicamente
Para que eu sempre veja a quantidade correta de favoritos

### Scenario: Handle undefined count
**Given** o componente FavoritesHeader recebe count undefined
**When** o componente renderiza
**Then** deve tratar como 0 favoritos
**And** deve exibir "0 favorites"
**And** não deve quebrar a aplicação

### Scenario: Handle negative count
**Given** o componente FavoritesHeader recebe count negativo
**When** o componente renderiza
**Then** deve exibir o valor negativo
**And** deve exibir "-1 favorites"
**And** deve funcionar normalmente
