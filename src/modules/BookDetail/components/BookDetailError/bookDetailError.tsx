import { ErrorState } from '@/components/ErrorState';

export function BookDetailError() {
  return (
    <ErrorState
      title="Erro ao carregar livro"
      message="O livro solicitado não foi encontrado."
      showBackButton={true}
      backButtonHref="/"
      backButtonText="Voltar para Início"
    />
  );
}
