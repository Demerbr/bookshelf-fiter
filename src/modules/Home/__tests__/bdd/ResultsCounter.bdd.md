# ResultsCounter - Especificação BDD

## Componente Testado
**ResultsCounter** - Componente que exibe a contagem de resultados encontrados

## Responsabilidades
- Exibir contagem de livros encontrados
- Mostrar estado de carregamento
- Usar internacionalização para textos
- Tratar valores undefined/null

## Cenários de Teste

### Cenário 1: Exibição de Contagem Normal
**Dado** que o ResultsCounter está sendo renderizado
**E** isLoading é false
**E** count é fornecido com valor numérico
**Quando** o componente é montado
**Então** deve exibir a mensagem de resultados encontrados
**E** deve incluir o número correto de resultados
**E** deve usar a função de tradução t()

### Cenário 2: Estado de Carregamento
**Dado** que o ResultsCounter está sendo renderizado
**E** isLoading é true
**Quando** o componente é montado
**Então** deve exibir a mensagem de carregamento
**E** não deve exibir a contagem de resultados
**E** deve usar a função de tradução t()

### Cenário 3: Contagem Zero
**Dado** que o ResultsCounter está sendo renderizado
**E** isLoading é false
**E** count é 0
**Quando** o componente é montado
**Então** deve exibir "0 resultados encontrados"
**E** deve usar a função de tradução t()

### Cenário 4: Count Undefined
**Dado** que o ResultsCounter está sendo renderizado
**E** isLoading é false
**E** count não é fornecido (undefined)
**Quando** o componente é montado
**Então** deve exibir "0 resultados encontrados"
**E** deve tratar o valor undefined como 0

### Cenário 5: Props Não Fornecidas
**Dado** que o ResultsCounter está sendo renderizado
**E** nenhuma prop é fornecida
**Quando** o componente é montado
**Então** deve usar valores padrão (isLoading = false, count = 0)
**E** deve exibir "0 resultados encontrados"

