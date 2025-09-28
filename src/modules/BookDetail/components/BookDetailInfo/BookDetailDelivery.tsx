import { RotateCcw, Shield, Truck } from "lucide-react";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
  return (
    <div className="border-t pt-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Truck className="w-5 h-5 text-green-600" />
          <span 
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ 
              __html: t('book.freeShipping', { amount: freeShippingThreshold }) 
            }}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">
            {t('book.warranty', { days: warrantyDays })}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <RotateCcw className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600">
            {t('book.returns', { days: returnDays })}
          </span>
        </div>
      </div>
    </div>
  );
}
