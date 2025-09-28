"use client";

import { useTranslation } from "react-i18next";
import { SpinnerLoading } from '../SpinnerLoading/SpinnerLoading';

interface LoadingProviderClientProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LoadingProviderClient = ({ 
  message, 
  size = 'lg'
}: LoadingProviderClientProps) => {
  const { t } = useTranslation();
  
  const displayMessage = message ? t(message) : t('common.loading');
  
  return <SpinnerLoading message={displayMessage} size={size} />;
};
