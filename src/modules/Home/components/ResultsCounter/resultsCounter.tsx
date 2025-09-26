interface ResultsCounterProps {
  count?: number;
  isLoading?: boolean;
}

export function ResultsCounter({ count, isLoading }: ResultsCounterProps) {
  return (
    <div>
      <p className="text-sm text-amazon-text-secondary font-medium">
        {isLoading ? 'Carregando...' : `${count || 0} resultados encontrados`}
      </p>
    </div>
  );
}
