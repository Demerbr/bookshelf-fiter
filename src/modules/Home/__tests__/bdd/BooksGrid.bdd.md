# BooksGrid - Especificação BDD

## Componente Testado
**BooksGrid** - Componente responsável por exibir uma grade de livros em formato de cards

## Responsabilidades
- Renderizar uma grade responsiva de livros
- Exibir BookCard para cada livro fornecido
- Gerenciar interações de favoritos
- Aplicar estilos CSS customizados
- Tratar lista vazia de livros

## Cenários de Teste

### Cenário 1: Renderização de Livros
**Dado** que o BooksGrid está sendo renderizado
**E** uma lista de livros é fornecida como prop
**Quando** o componente é montado
**Então** deve renderizar um BookCard para cada livro
**E** deve exibir o título de cada livro
**E** deve renderizar todos os subcomponentes do BookCard (Image, Info, Rating, Price, Action)

### Cenário 2: Grade Responsiva
**Dado** que o BooksGrid está sendo renderizado
**E** livros são fornecidos
**Quando** o componente é montado
**Então** deve aplicar classes CSS para grid responsivo
**E** deve ter layout de 1 coluna em mobile, 2 em tablet, etc.

### Cenário 3: Lista Vazia
**Dado** que o BooksGrid está sendo renderizado
**E** uma lista vazia é fornecida como prop
**Quando** o componente é montado
**Então** não deve renderizar nenhum BookCard
**E** deve exibir apenas o container da grade vazio

### Cenário 4: Interação com Favoritos
**Dado** que o BooksGrid está sendo renderizado
**E** livros são fornecidos
**E** o hook useFavorites está disponível
**Quando** o usuário clica no botão de favorito de um livro
**Então** deve chamar toggleFavorite com o livro correto
**E** deve atualizar o estado visual do favorito

### Cenário 5: Aplicação de Classes CSS Customizadas
**Dado** que o BooksGrid está sendo renderizado
**E** uma className customizada é fornecida
**Quando** o componente é montado
**Então** deve aplicar a className customizada ao container
**E** deve manter as classes padrão do grid

### Cenário 6: Tratamento de Erros
**Dado** que o BooksGrid está sendo renderizado
**E** está envolvido por ErrorBoundary
**Quando** ocorre um erro durante a renderização
**Então** o ErrorBoundary deve capturar o erro
**E** deve exibir uma mensagem de erro apropriada

