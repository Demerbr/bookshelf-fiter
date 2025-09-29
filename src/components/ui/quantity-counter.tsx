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
  min = 0,
  max = 10,
  size = "md",
  className = ""
}: QuantityCounterProps) {
  const sizeClasses = {
    sm: {
      button: "h-10 w-10 p-2 min-h-[44px] min-w-[44px] touch-manipulation",
      display: "w-10 text-center font-medium border-x border-gray-300 py-2 text-sm",
      container: "flex items-center border border-gray-300 rounded-md"
    },
    md: {
      button: "h-12 w-12 p-2 min-h-[44px] min-w-[44px] touch-manipulation",
      display: "min-w-[60px] h-12 text-center font-medium border-x border-gray-300 py-2 text-lg",
      container: "flex items-center border border-gray-300 rounded-md"
    },
    lg: {
      button: "h-14 w-14 p-2 min-h-[44px] min-w-[44px] touch-manipulation",
      display: "min-w-[80px] h-14 text-center font-medium border-x border-gray-300 py-2 text-xl",
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
        className={`${classes.button} relative z-10 active:bg-gray-100`}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4 pointer-events-none" />
      </Button>
      
      <div className={classes.display}>
        {quantity}
      </div>
      
      <Button
        size="sm"
        variant="ghost"
        onClick={(e) => onIncrease(e)}
        disabled={quantity >= max}
        className={`${classes.button} relative z-10 active:bg-gray-100`}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4 pointer-events-none" />
      </Button>
    </div>
  );
}
