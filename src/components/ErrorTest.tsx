"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function ErrorTrigger() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Erro de teste!');
  }

  return (
    <div className="p-4 border rounded-lg bg-red-50">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Teste de Error Boundary
      </h3>
      <p className="text-red-600 mb-4">
        Clique no botão para simular um erro.
      </p>
      <Button
        onClick={() => setShouldThrow(true)}
        variant="destructive"
        size="sm"
      >
        Simular Erro
      </Button>
    </div>
  );
}

export default function ErrorTest() {
  return (
    <ErrorBoundary>
      <ErrorTrigger />
    </ErrorBoundary>
  );
}
