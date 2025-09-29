import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  buttonHref: string;
  buttonClassName?: string;
  iconTestId?: string;
  className?: string;
}

/**
 * Componente genérico para estados vazios (carrinho vazio, favoritos vazios, etc.)
 */
export const EmptyState = ({
  icon: Icon,
  titleKey,
  descriptionKey,
  buttonTextKey,
  buttonHref,
  buttonClassName = "",
  iconTestId,
  className = ""
}: EmptyStateProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={cn("bg-gray-50 min-h-screen flex items-center justify-center", className)}>
      <div className="text-center">
        <Icon 
          className="h-24 w-24 text-gray-300 mx-auto mb-6" 
          data-testid={iconTestId}
        />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t(titleKey)}
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {t(descriptionKey)}
        </p>
        
        <Link href={buttonHref}>
          <Button size="lg" className={cn("font-medium", buttonClassName)}>
            {t(buttonTextKey)}
          </Button>
        </Link>
      </div>
    </div>
  );
};
