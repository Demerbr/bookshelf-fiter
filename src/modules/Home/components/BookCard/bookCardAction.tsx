import { Button } from "@/components/ui/button";
import { useBookCardContext } from "./bookCardContext";

interface BookCardActionProps {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  className?: string;
  onClick?: () => void;
}

export function BookCardAction({ 
  children = "Adicionar ao Carrinho", 
  variant = "default",
  className,
  onClick 
}: BookCardActionProps) {
  const { book } = useBookCardContext();
  
  return (
    <Button 
      className={`w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm py-2 rounded-md transition-colors ${className || ''}`}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
