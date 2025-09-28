# ErrorState - Especificação BDD

## Componente Testado
**ErrorState** - Componente que exibe estado de erro quando falha ao carregar dados

## Responsabilidades
- Exibir mensagem de erro
- Fornecer opção de retry
- Usar internacionalização
- Tratar diferentes tipos de erro

## Cenários de Teste

### Cenário 1: Exibição de Erro com Mensagem
**Dado** que o ErrorState está sendo renderizado
**E** um objeto Error é fornecido como prop
**Quando** o componente é montado
**Então** deve exibir a mensagem do erro
**E** deve usar a função de tradução t()
**E** deve ter estilização apropriada

### Cenário 2: Exibição de Erro Genérico
**Dado** que o ErrorState está sendo renderizado
**E** nenhum erro específico é fornecido
**Quando** o componente é montado
**Então** deve exibir mensagem de erro genérica
**E** deve usar a função de tradução t()

### Cenário 3: Botão de Retry
**Dado** que o ErrorState está sendo renderizado
**E** uma função onRetry é fornecida
**Quando** o usuário clica no botão de retry
**Então** deve chamar a função onRetry
**E** deve ter texto apropriado para o botão

### Cenário 4: Sem Função de Retry
**Dado** que o ErrorState está sendo renderizado
**E** nenhuma função onRetry é fornecida
**Quando** o componente é montado
**Então** não deve exibir botão de retry
**E** deve exibir apenas a mensagem de erro

