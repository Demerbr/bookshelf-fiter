import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { usePaginationContext } from "./paginationContext";

interface PaginationNextProps {
  children?: ReactNode;
  className?: string;
}

export function PaginationNext({ children = "Próxima", className }: PaginationNextProps) {
  const { hasMore, onNextPage } = usePaginationContext();
  
  return (
    <Button
      disabled={!hasMore}
      onClick={onNextPage}
      variant="outline"
      className={`px-6 ${className || ''}`}
    >
      {children}
    </Button>
  );
}
