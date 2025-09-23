import { RotateCcw, Shield, Truck } from "lucide-react";

interface BookDetailDeliveryProps {
  freeShippingThreshold?: string;
  warrantyDays?: number;
  returnDays?: number;
}

export function BookDetailDelivery({ 
  freeShippingThreshold = "R$ 99",
  warrantyDays = 30,
  returnDays = 7
}: BookDetailDeliveryProps) {
  return (
    <div className="border-t pt-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Truck className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-600">
            <span className="font-medium text-green-600">Frete GRÁTIS</span> para pedidos acima de {freeShippingThreshold}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">
            Compra protegida com garantia de {warrantyDays} dias
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <RotateCcw className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">
            Devolução gratuita em até {returnDays} dias
          </span>
        </div>
      </div>
    </div>
  );
}
