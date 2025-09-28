# EmptyState - Especificação BDD

## Componente Testado
**EmptyState** - Componente que exibe estado vazio quando não há livros

## Responsabilidades
- Exibir mensagem quando não há livros disponíveis
- Sugerir ações para o usuário
- Usar internacionalização
- Manter design consistente

## Cenários de Teste

### Cenário 1: Exibição de Estado Vazio
**Dado** que o EmptyState está sendo renderizado
**Quando** o componente é montado
**Então** deve exibir mensagem de "nenhum livro encontrado"
**E** deve usar a função de tradução t()
**E** deve ter estilização centralizada

### Cenário 2: Sugestões para o Usuário
**Dado** que o EmptyState está sendo renderizado
**Quando** o componente é montado
**Então** deve exibir sugestão para tentar busca diferente
**E** deve usar a função de tradução t()
**E** deve ter layout responsivo

### Cenário 3: Estilização e Layout
**Dado** que o EmptyState está sendo renderizado
**Quando** o componente é montado
**Então** deve ter padding vertical apropriado
**E** deve estar centralizado na tela
**E** deve usar cores consistentes com o tema

