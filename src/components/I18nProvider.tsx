"use client";

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';
import { LoadingProviderServer } from '@/components/LoadingProvider';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkI18n = () => {
      if (i18n.isInitialized) {
        setIsReady(true);
      } else {
        setTimeout(checkI18n, 100);
      }
    };
    
    checkI18n();
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <LoadingProviderServer 
          message="Inicializando..." 
          size="lg" 
        />
      </div>
    );
  }

  return <>{children}</>;
}