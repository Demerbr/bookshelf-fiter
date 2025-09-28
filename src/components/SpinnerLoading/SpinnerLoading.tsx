import { Loader2 } from "lucide-react";

interface SpinnerLoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SpinnerLoading = ({ 
  message = "Carregando...", 
  size = 'lg'
}: SpinnerLoadingProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 80
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <Loader2 
          size={iconSizes[size]} 
          className="text-amazon-orange animate-spin" 
        />
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-t-2 border-amazon-blue animate-[spin_3s_linear_infinite]`}></div>
      </div>
      
      {message && (
        <div className="text-center">
          <p className="text-amazon-text font-medium text-lg">{message}</p>
        </div>
      )}
    </div>
  );
};
