import { ModernLoading } from '@/components/ui/ModernLoading';

export default function Loading() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
      <ModernLoading 
        message="Carregando..." 
        size="xl" 
      />
    </div>
  );
}
