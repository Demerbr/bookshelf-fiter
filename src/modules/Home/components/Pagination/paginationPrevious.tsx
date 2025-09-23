import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { usePaginationContext } from "./paginationContext";

interface PaginationPreviousProps {
  children?: ReactNode;
  className?: string;
}

export function PaginationPrevious({ children = "Anterior", className }: PaginationPreviousProps) {
  const { currentPage, onPreviousPage } = usePaginationContext();
  
  return (
    <Button
      disabled={currentPage === 1}
      onClick={onPreviousPage}
      variant="outline"
      className={`px-6 ${className || ''}`}
    >
      {children}
    </Button>
  );
}
