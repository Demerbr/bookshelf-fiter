"use client";

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for i18n to be ready
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
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
