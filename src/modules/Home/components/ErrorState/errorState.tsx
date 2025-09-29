import { ErrorState as GenericErrorState } from '@/components/ErrorState';

interface ErrorStateProps {
  error?: Error;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <GenericErrorState
      title="Erro ao carregar livros"
      message={error?.message || "Tente novamente mais tarde"}
    />
  );
}
