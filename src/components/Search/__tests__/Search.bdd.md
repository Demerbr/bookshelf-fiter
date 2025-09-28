# SearchComponent BDD Specification

## Feature: Search Input Functionality
Como um usuário
Eu quero poder pesquisar livros digitando na barra de pesquisa
Para que eu possa encontrar os livros que desejo

### Scenario: Display search input
**Given** o usuário está na página principal
**When** a página carrega
**Then** deve exibir um campo de pesquisa
**And** deve ter placeholder padrão "Pesquisar Amazon.com.br"
**And** deve ter um botão de pesquisa

### Scenario: Custom placeholder
**Given** o usuário está na página principal
**And** um placeholder customizado é fornecido
**When** a página carrega
**Then** deve exibir o placeholder customizado
**And** não deve exibir o placeholder padrão

### Scenario: User types in search
**Given** o usuário está na página principal
**When** digita "livros de ficção" no campo de pesquisa
**Then** o campo deve mostrar "livros de ficção"
**And** deve chamar onSearch com debounce de 500ms

### Scenario: Form submission
**Given** o usuário está na página principal
**And** digitou "livros de ficção" no campo de pesquisa
**When** submete o formulário (Enter ou clique no botão)
**Then** deve chamar onSearch imediatamente com "livros de ficção"
**And** deve ignorar o debounce

### Scenario: Trim whitespace on submit
**Given** o usuário está na página principal
**And** digitou "  livros de ficção  " no campo de pesquisa
**When** submete o formulário
**Then** deve chamar onSearch com "livros de ficção" (sem espaços extras)

## Feature: Clear Functionality
Como um usuário
Eu quero poder limpar o campo de pesquisa facilmente
Para que eu possa fazer uma nova pesquisa rapidamente

### Scenario: Show clear button when input has value
**Given** o usuário está na página principal
**And** digitou "teste" no campo de pesquisa
**When** o campo tem valor
**Then** deve exibir um botão de limpar (X)
**And** deve estar posicionado dentro do campo

### Scenario: Hide clear button when input is empty
**Given** o usuário está na página principal
**And** o campo de pesquisa está vazio
**When** a página carrega
**Then** não deve exibir o botão de limpar

### Scenario: Clear input when clear button is clicked
**Given** o usuário está na página principal
**And** digitou "teste" no campo de pesquisa
**When** clica no botão de limpar
**Then** o campo deve ficar vazio
**And** deve chamar onClear se fornecido
**And** deve chamar onSearch com string vazia se onClear não fornecido

## Feature: External Value Control
Como um desenvolvedor
Eu quero poder controlar o valor do campo externamente
Para que seja consistente com o estado da aplicação

### Scenario: Sync with external value
**Given** o componente SearchComponent recebe value="pesquisa externa"
**When** o componente renderiza
**Then** o campo deve mostrar "pesquisa externa"
**And** deve sincronizar com mudanças externas

### Scenario: Focus and position cursor
**Given** o componente SearchComponent recebe um novo value externo
**When** o valor muda
**Then** deve focar no campo
**And** deve posicionar o cursor no final do texto

## Feature: Styling and Layout
Como um usuário
Eu quero que a barra de pesquisa tenha um design consistente
Para que seja fácil de usar e visualmente agradável

### Scenario: Proper input styling
**Given** o usuário está na página principal
**When** a página carrega
**Then** o campo deve ter fundo branco (bg-white)
**And** deve ocupar toda a largura (w-full)
**And** deve ter cantos arredondados à direita removidos (rounded-r-none)

### Scenario: Proper button styling
**Given** o usuário está na página principal
**When** a página carrega
**Then** o botão deve ter cor laranja Amazon (bg-amazon-orange)
**And** deve ter hover effect (hover:bg-amazon-orange-hover)
**And** deve ter cantos arredondados à esquerda removidos (rounded-l-none)

### Scenario: Custom className
**Given** o componente SearchComponent recebe className customizada
**When** o componente renderiza
**Then** deve aplicar a className ao formulário
**And** deve manter as classes padrão
