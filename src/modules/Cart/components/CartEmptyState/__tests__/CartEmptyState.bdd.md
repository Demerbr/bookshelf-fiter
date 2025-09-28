# CartEmptyState BDD Specification

## Feature: Cart Empty State Display
Como um usuário que tem um carrinho vazio
Eu quero ver uma mensagem clara indicando que meu carrinho está vazio
Para que eu possa entender o estado atual e saber como proceder

### Scenario: Display empty cart message
**Given** o usuário está na página do carrinho
**And** o carrinho está vazio
**When** a página carrega
**Then** deve exibir o título "Your cart is empty"
**And** deve exibir a descrição "Add some books to your cart to get started"

### Scenario: Display continue shopping button
**Given** o usuário está na página do carrinho
**And** o carrinho está vazio
**When** a página carrega
**Then** deve exibir um botão "Continue Shopping"
**And** o botão deve ter link para a página inicial

### Scenario: Display shopping cart icon
**Given** o usuário está na página do carrinho
**And** o carrinho está vazio
**When** a página carrega
**Then** deve exibir um ícone de carrinho de compras
**And** o ícone deve ter tamanho apropriado (h-24 w-24)
**And** o ícone deve ter cor cinza (text-gray-300)

### Scenario: Proper styling and layout
**Given** o usuário está na página do carrinho
**And** o carrinho está vazio
**When** a página carrega
**Then** o container deve ter fundo cinza claro (bg-gray-50)
**And** deve ocupar toda a altura da tela (min-h-screen)
**And** deve centralizar o conteúdo verticalmente e horizontalmente
**And** o conteúdo deve estar centralizado (text-center)

## Feature: Navigation from Empty Cart
Como um usuário com carrinho vazio
Eu quero poder navegar facilmente para continuar comprando
Para que eu possa adicionar itens ao meu carrinho

### Scenario: Navigate to home page
**Given** o usuário está na página do carrinho vazio
**When** clica no botão "Continue Shopping"
**Then** deve ser redirecionado para a página inicial (/)
**And** o link deve funcionar corretamente
