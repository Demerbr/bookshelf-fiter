# HomeModule - Especificação BDD

## Componente Testado
**HomeModule** - Componente principal do módulo Home que gerencia a exibição de livros

## Responsabilidades
- Exibir estado de carregamento durante busca de livros
- Mostrar estado de erro quando falha ao carregar dados
- Renderizar grid de livros quando dados estão disponíveis
- Exibir estado vazio quando não há livros
- Gerenciar ordenação de livros
- Implementar scroll infinito para carregar mais livros

## Cenários de Teste

### Cenário 1: Exibição do Estado de Carregamento
**Dado** que o HomeModule está sendo renderizado
**E** os dados estão sendo carregados (isLoading = true)
**Quando** o componente é montado
**Então** deve exibir o componente LoadingState
**E** não deve exibir BooksGrid, EmptyState ou ErrorState

### Cenário 2: Exibição do Estado de Erro
**Dado** que o HomeModule está sendo renderizado
**E** ocorreu um erro ao carregar os dados (isError = true)
**Quando** o componente é montado
**Então** deve exibir o componente ErrorState
**E** deve passar o erro para o componente ErrorState
**E** não deve exibir outros estados

### Cenário 3: Exibição de Livros com Sucesso
**Dado** que o HomeModule está sendo renderizado
**E** os dados foram carregados com sucesso (isLoading = false, isError = false)
**E** existem livros disponíveis (allBooks.length > 0)
**Quando** o componente é montado
**Então** deve exibir o componente ResultsCounter com a contagem correta
**E** deve exibir o componente SortDropdown
**E** deve exibir o componente BooksGrid com os livros
**E** deve exibir o componente InfiniteScrollWrapper

### Cenário 4: Exibição do Estado Vazio (Busca sem Resultados)
**Dado** que o HomeModule está sendo renderizado
**E** os dados foram carregados com sucesso
**E** não foram encontrados livros para a busca (isNotFound = true)
**Quando** o componente é montado
**Então** deve exibir mensagem de "nenhum livro encontrado"
**E** deve exibir a query de busca utilizada
**E** não deve exibir BooksGrid ou EmptyState

### Cenário 5: Exibição do Estado Vazio (Sem Livros)
**Dado** que o HomeModule está sendo renderizado
**E** os dados foram carregados com sucesso
**E** não há livros disponíveis (allBooks.length = 0)
**E** não é resultado de busca (isNotFound = false)
**Quando** o componente é montado
**Então** deve exibir o componente EmptyState
**E** não deve exibir BooksGrid ou mensagens de busca

### Cenário 6: Interação com Ordenação
**Dado** que o HomeModule está sendo renderizado
**E** existem livros disponíveis
**Quando** o usuário altera a ordenação através do SortDropdown
**Então** deve chamar a função handleSort com o novo critério de ordenação

### Cenário 7: Scroll Infinito
**Dado** que o HomeModule está sendo renderizado
**E** existem livros disponíveis
**E** há mais páginas para carregar (hasNextPage = true)
**Quando** o usuário faz scroll até o final da lista
**Então** deve chamar a função fetchNextPage
**E** deve exibir indicador de carregamento durante fetchNextPage

