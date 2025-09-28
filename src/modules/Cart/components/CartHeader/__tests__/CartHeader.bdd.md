# CartHeader BDD Specification

## Feature: Cart Header Display
Como um usuário na página do carrinho
Eu quero ver informações claras sobre meu carrinho
Para que eu possa entender quantos itens tenho e onde estou

### Scenario: Display cart title
**Given** o usuário está na página do carrinho
**When** a página carrega
**Then** deve exibir o título "Shopping Cart"
**And** o título deve ter tamanho grande (text-3xl)
**And** deve ter peso de fonte bold (font-bold)

### Scenario: Display item count for multiple items
**Given** o usuário está na página do carrinho
**And** o carrinho tem 5 itens
**When** a página carrega
**Then** deve exibir "5 items"
**And** o texto deve ter cor cinza (text-gray-600)

### Scenario: Display singular item count
**Given** o usuário está na página do carrinho
**And** o carrinho tem 1 item
**When** a página carrega
**Then** deve exibir "1 item" (singular)
**And** não deve exibir "1 items" (plural)

### Scenario: Display zero items count
**Given** o usuário está na página do carrinho
**And** o carrinho está vazio (0 itens)
**When** a página carrega
**Then** deve exibir "0 items"
**And** o texto deve estar visível

### Scenario: Display shopping cart icon
**Given** o usuário está na página do carrinho
**When** a página carrega
**Then** deve exibir um ícone de carrinho de compras
**And** o ícone deve ter tamanho médio (h-8 w-8)
**And** o ícone deve ter cor amarela (text-yellow-600)
**And** deve estar posicionado ao lado do título

### Scenario: Proper header layout
**Given** o usuário está na página do carrinho
**When** a página carrega
**Then** o header deve ter margem inferior (mb-8)
**And** o título e ícone devem estar alinhados horizontalmente
**And** deve haver espaçamento entre o ícone e título (gap-3)
**And** o contador de itens deve estar abaixo do título

## Feature: Dynamic Item Count
Como um usuário
Eu quero que o contador de itens seja atualizado dinamicamente
Para que eu sempre veja a quantidade correta de itens

### Scenario: Handle undefined item count
**Given** o componente CartHeader recebe itemCount undefined
**When** o componente renderiza
**Then** deve tratar como 0 itens
**And** deve exibir "0 items"
**And** não deve quebrar a aplicação
