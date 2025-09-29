"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Oops! Algo deu errado
        </h2>
        <p className="text-gray-600 mb-4">
          Ocorreu um erro inesperado na aplicação.
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
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
}
