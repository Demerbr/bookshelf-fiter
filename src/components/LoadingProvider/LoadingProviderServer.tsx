import { SpinnerLoading } from '../SpinnerLoading/SpinnerLoading';

interface LoadingProviderServerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LoadingProviderServer = ({ 
  message = "Carregando...", 
  size = 'lg'
}: LoadingProviderServerProps) => {
  return <SpinnerLoading message={message} size={size} />;
};
