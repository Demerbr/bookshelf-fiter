# Testes do Módulo Home

Este diretório contém todos os testes automatizados para o módulo Home, organizados com documentação BDD separada e testes no padrão AAA.

## Estrutura

```
__tests__/
├── bdd/                           # Documentação BDD
│   ├── HomeModule.bdd.md         # Especificação do componente principal
│   ├── BooksGrid.bdd.md          # Especificação do grid de livros
│   ├── ResultsCounter.bdd.md      # Especificação do contador
│   ├── EmptyState.bdd.md         # Especificação do estado vazio
│   └── ErrorState.bdd.md         # Especificação do estado de erro
├── components/                    # Testes dos componentes filhos
│   ├── BooksGrid.test.tsx        # Testes AAA do grid de livros
│   ├── ResultsCounter.test.tsx   # Testes AAA do contador
│   ├── EmptyState.test.tsx       # Testes AAA do estado vazio
│   └── ErrorState.test.tsx       # Testes AAA do estado de erro
├── HomeModule.test.tsx           # Testes AAA do componente principal
├── index.ts                      # Exportações centralizadas
└── README.md                     # Esta documentação
```

## Padrão AAA (Arrange, Act, Assert)

Todos os testes seguem o padrão AAA:

- **Arrange**: Configuração inicial, mocks, props, estado
- **Act**: Execução da ação sendo testada
- **Assert**: Verificação dos resultados esperados

### Exemplo:

```typescript
it('should display books when data is loaded', () => {
  // Arrange
  const mockBooks = [{ id: '1', title: 'Book 1' }]
  mockUseSearch.mockReturnValue({ allBooks: mockBooks, isLoading: false })

  // Act
  render(<HomeModule />)

  // Assert
  expect(screen.getByText('Book 1')).toBeInTheDocument()
})
```

## Documentação BDD

Cada componente possui sua própria documentação BDD em `bdd/` que descreve:

- **Componente Testado**: Nome e responsabilidades
- **Cenários de Teste**: Descrições Given/When/Then
- **Comportamentos Esperados**: O que cada cenário deve validar

## Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage

# Executar apenas testes do módulo Home
npm test -- src/modules/Home
```

## Cobertura de Testes

Os testes cobrem:

- ✅ Renderização de componentes
- ✅ Estados de loading, erro e vazio
- ✅ Interações do usuário
- ✅ Props e callbacks
- ✅ Cenários de erro
- ✅ Validação de estilos CSS

## Mocks Utilizados

- `@/hooks/useSearch`: Hook principal de busca
- `@/hooks/useFavorites`: Hook de favoritos
- `react-i18next`: Internacionalização
- `next/router` e `next/navigation`: Roteamento
- Componentes filhos do módulo

## Benefícios da Estrutura

1. **Separação Clara**: Documentação BDD separada dos testes
2. **Padrão Consistente**: Todos os testes seguem AAA
3. **Manutenibilidade**: Fácil de entender e modificar
4. **Documentação**: BDD serve como especificação viva
5. **Organização**: Estrutura clara e escalável

