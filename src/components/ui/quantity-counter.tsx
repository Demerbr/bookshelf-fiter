import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

interface QuantityCounterProps {
  quantity: number;
  onIncrease: (e: React.MouseEvent) => void;
  onDecrease: (e: React.MouseEvent) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function QuantityCounter({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 10,
  size = "md",
  className = ""
}: QuantityCounterProps) {
  const sizeClasses = {
    sm: {
      button: "h-8 w-8 p-0",
      display: "w-8 text-center font-medium border-x border-gray-300 py-1 text-sm",
      container: "flex items-center border border-gray-300 rounded-md"
    },
    md: {
      button: "h-10 w-10 p-0",
      display: "min-w-[60px] h-10 text-center font-medium border-x border-gray-300 py-1 text-lg",
      container: "flex items-center border border-gray-300 rounded-md"
    },
    lg: {
      button: "h-12 w-12 p-0",
      display: "min-w-[80px] h-12 text-center font-medium border-x border-gray-300 py-1 text-xl",
      container: "flex items-center border border-gray-300 rounded-md"
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className={`${classes.container} ${className}`}>
      <Button
        size="sm"
        variant="ghost"
        onClick={(e) => onDecrease(e)}
        disabled={quantity <= min}
        className={classes.button}
      >
        <Minus className="h-4 w-4" />
      </Button>
      
      <div className={classes.display}>
        {quantity}
      </div>
      
      <Button
        size="sm"
        variant="ghost"
        onClick={(e) => onIncrease(e)}
        disabled={quantity >= max}
        className={classes.button}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
