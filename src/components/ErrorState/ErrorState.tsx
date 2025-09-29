import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorStateProps {
  title?: string;
  message?: string;
  error?: Error;
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonText?: string;
  className?: string;
}

/**
 * Componente genérico para estados de erro
 */
export const ErrorState = ({
  title = "Erro ao carregar",
  message,
  error,
  showBackButton = false,
  backButtonHref = "/",
  backButtonText = "Voltar para Início",
  className = ""
}: ErrorStateProps) => {
  const displayMessage = message || error?.message || "Tente novamente mais tarde";
  
  return (
    <div className={cn("bg-gray-50 min-h-screen", className)}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 mb-6">
            {displayMessage}
          </p>
          {showBackButton && (
            <Link href={backButtonHref}>
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
