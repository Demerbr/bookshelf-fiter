"use client";

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';
import { ModernLoading } from './ui';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkI18n = () => {
      if (i18n.isInitialized) {
        setIsReady(true);
      } else {
        setTimeout(checkI18n, 0);
      }
    };
    
    checkI18n();
  }, []);

  if (!isReady) {
    return  (
      <div className='mt-40'>

        <ModernLoading size='xl' />
      </div>
    )
  }

  return <>{children}</>;
}
