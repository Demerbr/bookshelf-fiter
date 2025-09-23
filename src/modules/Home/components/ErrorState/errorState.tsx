interface ErrorStateProps {
  error?: Error;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Erro ao carregar livros
          </h1>
          <p className="text-gray-600">
            {error?.message || "Tente novamente mais tarde"}
          </p>
        </div>
      </div>
    </div>
  );
}
