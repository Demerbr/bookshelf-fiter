"use client";

import { Button } from "@/components/ui/button";

export default function BookDetailError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Livro não encontrado
        </h2>
        <p className="text-gray-600 mb-4">
          Não foi possível carregar os detalhes deste livro.
        </p>
        <div className="space-y-2">
          <Button onClick={reset} className="w-full">
            Tentar novamente
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = "/"}
            className="w-full"
          >
            Voltar à página inicial
          </Button>
        </div>
      </div>
    </div>
  );
}
