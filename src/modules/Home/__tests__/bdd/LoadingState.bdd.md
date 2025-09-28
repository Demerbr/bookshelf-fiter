# LoadingState - Especificação BDD

## Componente Testado
**LoadingState** - Componente que exibe skeleton cards durante o carregamento

## Responsabilidades
- Exibir skeleton cards animados
- Simular layout da grade de livros
- Usar animação de pulse
- Manter consistência visual com o conteúdo real

## Cenários de Teste

### Cenário 1: Renderização de Skeleton Cards
**Dado** que o LoadingState está sendo renderizado
**Quando** o componente é montado
**Então** deve renderizar 12 skeleton cards
**E** cada card deve ter animação de pulse
**E** deve usar classes CSS apropriadas

### Cenário 2: Layout da Grade
**Dado** que o LoadingState está sendo renderizado
**Quando** o componente é montado
**Então** deve usar classes de grid responsivo
**E** deve ter 1 coluna em mobile, 2 em tablet, etc.
**E** deve manter espaçamento consistente

### Cenário 3: Estrutura dos Skeleton Cards
**Dado** que o LoadingState está sendo renderizado
**Quando** o componente é montado
**Então** cada skeleton card deve ter:
- Imagem placeholder com aspect ratio 2:3
- Linhas de texto placeholder
- Estilização consistente com cards reais

### Cenário 4: Animações
**Dado** que o LoadingState está sendo renderizado
**Quando** o componente é montado
**Então** deve aplicar animação de pulse
**E** deve usar cores de fundo apropriadas
**E** deve manter bordas e sombras consistentes

