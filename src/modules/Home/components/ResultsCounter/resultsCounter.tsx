interface ResultsCounterProps {
  count?: number;
  isLoading?: boolean;
}

export function ResultsCounter({ count, isLoading }: ResultsCounterProps) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600">
        {isLoading ? 'Carregando...' : `${count || 0} resultados encontrados`}
      </p>
    </div>
  );
}
