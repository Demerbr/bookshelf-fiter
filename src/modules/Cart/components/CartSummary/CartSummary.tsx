import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useTranslation } from 'react-i18next';
import { PurchaseSuccessModal } from '@/components/PurchaseSuccessModal';

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export const CartSummary = ({ totalItems }: CartSummaryProps) => {
  const { formatTotalPrice } = useCart();
  const { t } = useTranslation();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handleCheckout = () => {
    setIsPurchaseModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border p-6 h-fit">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {t('cart.summary')}
        </h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t('cart.subtotal', { count: totalItems })}</span>
            <span>{formatTotalPrice()}</span>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t('cart.shipping')}</span>
            <span className="text-green-600">{t('cart.free')}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>{t('cart.total')}</span>
              <span>{formatTotalPrice()}</span>
            </div>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium mb-4"
          onClick={handleCheckout}
        >
          {t('cart.checkout')}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          {t('cart.disclaimer')}
        </p>
      </div>

      <PurchaseSuccessModal 
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
      />
    </>
  );
};
