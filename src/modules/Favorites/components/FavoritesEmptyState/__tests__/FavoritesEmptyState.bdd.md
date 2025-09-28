# FavoritesEmptyState BDD Specification

## Feature: Favorites Empty State Display
Como um usuário que não tem favoritos
Eu quero ver uma mensagem clara indicando que não tenho favoritos
Para que eu possa entender o estado atual e saber como proceder

### Scenario: Display empty favorites message
**Given** o usuário está na página de favoritos
**And** não há favoritos salvos
**When** a página carrega
**Then** deve exibir o título "No favorites yet"
**And** deve exibir a descrição "Start adding books to your favorites to see them here"

### Scenario: Display explore books button
**Given** o usuário está na página de favoritos
**And** não há favoritos salvos
**When** a página carrega
**Then** deve exibir um botão "Explore Books"
**And** o botão deve ter link para a página inicial

### Scenario: Display heart icon
**Given** o usuário está na página de favoritos
**And** não há favoritos salvos
**When** a página carrega
**Then** deve exibir um ícone de coração
**And** o ícone deve ter tamanho apropriado (h-24 w-24)
**And** o ícone deve ter cor cinza (text-gray-300)

### Scenario: Proper styling and layout
**Given** o usuário está na página de favoritos
**And** não há favoritos salvos
**When** a página carrega
**Then** o container deve ter fundo cinza claro (bg-gray-50)
**And** deve ocupar toda a altura da tela (min-h-screen)
**And** deve centralizar o conteúdo verticalmente e horizontalmente
**And** o conteúdo deve estar centralizado (text-center)

## Feature: Navigation from Empty Favorites
Como um usuário sem favoritos
Eu quero poder navegar facilmente para explorar livros
Para que eu possa encontrar livros para adicionar aos favoritos

### Scenario: Navigate to home page
**Given** o usuário está na página de favoritos vazia
**When** clica no botão "Explore Books"
**Then** deve ser redirecionado para a página inicial (/)
**And** o link deve funcionar corretamente

### Scenario: Button styling
**Given** o usuário está na página de favoritos vazia
**When** a página carrega
**Then** o botão deve ter cor azul (bg-blue-600)
**And** deve ter hover effect azul escuro (hover:bg-blue-700)
**And** deve ter tamanho grande (size="lg")
