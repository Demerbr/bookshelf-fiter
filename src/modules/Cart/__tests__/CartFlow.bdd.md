# Cenários de Teste BDD - Fluxo de Carrinho

## Funcionalidade: Gerenciamento de Carrinho de Compras

### Cenário 1: Adicionar item ao carrinho
**Dado** que o usuário está na página de detalhes de um livro
**E** o carrinho está vazio
**Quando** o usuário clica no botão "Adicionar ao Carrinho"
**Então** o item deve ser adicionado ao carrinho
**E** a quantidade deve ser 1
**E** o preço total deve ser atualizado
**E** o contador do carrinho deve mostrar 1 item

### Cenário 2: Adicionar item existente ao carrinho
**Dado** que o usuário tem um item no carrinho
**E** está na página de detalhes do mesmo livro
**Quando** o usuário clica no botão "Adicionar ao Carrinho"
**Então** a quantidade do item deve ser incrementada em 1
**E** o preço total deve ser recalculado
**E** o contador do carrinho deve ser atualizado

### Cenário 3: Remover item do carrinho
**Dado** que o usuário tem itens no carrinho
**E** está na página do carrinho
**Quando** o usuário clica no botão "Remover" de um item
**Então** o item deve ser removido do carrinho
**E** o preço total deve ser recalculado
**E** o contador do carrinho deve ser atualizado

### Cenário 4: Alterar quantidade de item no carrinho
**Dado** que o usuário tem um item no carrinho com quantidade 2
**E** está na página do carrinho
**Quando** o usuário clica no botão "+" do contador de quantidade
**Então** a quantidade deve ser incrementada para 3
**E** o preço total deve ser recalculado
**E** o preço do item deve ser atualizado

### Cenário 5: Diminuir quantidade de item no carrinho
**Dado** que o usuário tem um item no carrinho com quantidade 3
**E** está na página do carrinho
**Quando** o usuário clica no botão "-" do contador de quantidade
**Então** a quantidade deve ser decrementada para 2
**E** o preço total deve ser recalculado
**E** o preço do item deve ser atualizado

### Cenário 6: Remover item ao zerar quantidade
**Dado** que o usuário tem um item no carrinho com quantidade 1
**E** está na página do carrinho
**Quando** o usuário clica no botão "-" do contador de quantidade
**Então** o item deve ser removido do carrinho
**E** o carrinho deve ficar vazio
**E** o preço total deve ser R$ 0,00

### Cenário 7: Visualizar carrinho vazio
**Dado** que o usuário não tem itens no carrinho
**E** acessa a página do carrinho
**Então** deve ser exibida a mensagem "Seu carrinho está vazio"
**E** deve haver um botão "Continuar Comprando"
**E** o botão deve redirecionar para a página inicial

### Cenário 8: Visualizar resumo do carrinho
**Dado** que o usuário tem itens no carrinho
**E** está na página do carrinho
**Então** deve ser exibido o resumo com:
- Subtotal dos itens
- Frete grátis
- Total geral
- Botão "Finalizar Compra"

### Cenário 9: Finalizar compra
**Dado** que o usuário tem itens no carrinho
**E** está na página do carrinho
**Quando** o usuário clica em "Finalizar Compra"
**Então** deve ser aberto o modal de sucesso da compra
**E** deve exibir:
- Confirmação de compra realizada
- Resumo dos itens comprados
- Informações de entrega
- Informações de pagamento

### Cenário 10: Processar compra no modal
**Dado** que o modal de sucesso da compra está aberto
**Quando** o usuário clica em "Finalizar Compra" no modal
**Então** deve ser exibido o estado "Processando..."
**E** após 2 segundos o carrinho deve ser limpo
**E** o modal deve ser fechado
**E** o usuário deve ser redirecionado

### Cenário 11: Persistência do carrinho
**Dado** que o usuário adicionou itens ao carrinho
**E** fechou o navegador
**Quando** o usuário reabre o navegador
**Então** os itens devem ainda estar no carrinho
**E** as quantidades devem ser mantidas
**E** o preço total deve estar correto

### Cenário 12: Validação de quantidade máxima
**Dado** que o usuário tem um item no carrinho
**E** a quantidade está no máximo permitido (10)
**Quando** o usuário tenta aumentar a quantidade
**Então** o botão "+" deve estar desabilitado
**E** a quantidade não deve ser alterada

### Cenário 13: Validação de quantidade mínima
**Dado** que o usuário tem um item no carrinho
**E** a quantidade está no mínimo (1)
**Quando** o usuário tenta diminuir a quantidade
**Então** o item deve ser removido do carrinho
**E** não deve ficar com quantidade 0

### Cenário 14: Cálculo de preços com múltiplos itens
**Dado** que o usuário tem 2 livros diferentes no carrinho:
- Livro A: R$ 29,90 (quantidade 2)
- Livro B: R$ 39,90 (quantidade 1)
**Então** o subtotal deve ser R$ 99,70
**E** o frete deve ser grátis
**E** o total deve ser R$ 99,70

### Cenário 15: Navegação entre páginas mantendo carrinho
**Dado** que o usuário tem itens no carrinho
**E** navega para outras páginas do site
**Quando** o usuário retorna à página do carrinho
**Então** os itens devem ainda estar no carrinho
**E** o contador do carrinho no header deve estar correto

### Cenário 16: Responsividade do carrinho
**Dado** que o usuário está visualizando o carrinho em dispositivo móvel
**Então** os elementos devem estar organizados verticalmente
**E** os botões devem ter tamanho adequado para toque
**E** o texto deve ser legível
**E** a navegação deve funcionar corretamente

### Cenário 17: Acessibilidade do carrinho
**Dado** que o usuário navega usando apenas o teclado
**Então** todos os botões devem ser focáveis
**E** deve haver indicadores visuais de foco
**E** as ações devem ser executáveis via teclado
**E** deve haver textos alternativos para imagens

### Cenário 18: Tratamento de erro na compra
**Dado** que o usuário está finalizando uma compra
**E** ocorre um erro no processamento
**Então** deve ser exibida uma mensagem de erro
**E** o carrinho não deve ser limpo
**E** o usuário deve poder tentar novamente

### Cenário 19: Limpeza manual do carrinho
**Dado** que o usuário tem itens no carrinho
**E** deseja limpar tudo
**Quando** o usuário remove todos os itens manualmente
**Então** o carrinho deve ficar vazio
**E** deve ser exibida a mensagem de carrinho vazio
**E** o contador deve mostrar 0 itens

### Cenário 20: Adição rápida de múltiplos itens
**Dado** que o usuário está na página inicial
**E** há vários livros listados
**Quando** o usuário adiciona rapidamente vários livros ao carrinho
**Então** todos os itens devem ser adicionados corretamente
**E** as quantidades devem estar corretas
**E** o preço total deve ser calculado corretamente
**E** não deve haver duplicações indevidas

