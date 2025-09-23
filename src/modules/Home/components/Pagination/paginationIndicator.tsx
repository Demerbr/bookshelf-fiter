import { usePaginationContext } from "./paginationContext";

interface PaginationIndicatorProps {
  className?: string;
}

export function PaginationIndicator({ className }: PaginationIndicatorProps) {
  const { currentPage } = usePaginationContext();
  
  return (
    <span className={`text-sm text-gray-600 ${className || ''}`}>
      Página {currentPage}
    </span>
  );
}
