import { PageLayout } from '@/components/Layout';
import { useGridClasses } from '@/hooks/useGridClasses';

export function BookDetailLoading() {
  const gridClasses = useGridClasses('book-detail');
  
  return (
    <PageLayout>
      <div className="animate-pulse" data-testid="loading-skeleton">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className={gridClasses}>
          <div className="h-96 bg-gray-200 rounded"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
