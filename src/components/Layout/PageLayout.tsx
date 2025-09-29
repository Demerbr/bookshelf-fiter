import React from 'react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundClassName?: string;
}

/**
 * Componente de layout base para páginas
 * Fornece o padrão comum de container e background usado em toda a aplicação
 */
export const PageLayout = ({ 
  children, 
  className = "",
  containerClassName = "",
  backgroundClassName = ""
}: PageLayoutProps) => {
  return (
    <div className={cn("bg-gray-50 min-h-screen", backgroundClassName, className)}>
      <div className={cn("container mx-auto px-4 py-8", containerClassName)}>
        {children}
      </div>
    </div>
  );
};
