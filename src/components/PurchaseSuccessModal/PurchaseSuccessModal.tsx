"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter 
} from "@/components/ui/sheet";
import { CheckCircle, Package, Truck, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from "react-i18next";

interface PurchaseSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PurchaseSuccessModal({ isOpen, onClose }: PurchaseSuccessModalProps) {
  const { cartItems, formatTotalPrice, clearCart } = useCart();
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => {
    setIsProcessing(false);
    onClose();
  };

  const handleFinishPurchase = () => {
    setIsProcessing(true);
    
    // Simula processamento da compra
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent side="bottom" className="h-[85vh] max-h-[600px] flex flex-col">
        <SheetHeader className="text-center pb-4">
          <div className="flex justify-center mb-3">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <SheetTitle className="text-xl font-bold text-gray-900">
            {t('purchase.success.title')}
          </SheetTitle>
          <SheetDescription className="text-sm text-gray-600">
            {t('purchase.success.description')}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-3 py-2 overflow-y-auto">
          {/* Resumo da Compra */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-base">
              <Package className="h-5 w-5 mr-2" />
              {t('purchase.summary')}
            </h3>
            
            <div className="space-y-2 text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('purchase.items', { count: totalItems })}</span>
                <span className="font-medium">{formatTotalPrice()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">{t('cart.shipping')}</span>
                <span className="text-green-600 font-medium">{t('cart.free')}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>{t('cart.total')}</span>
                  <span>{formatTotalPrice()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Informações de Entrega */}
          <div className="bg-blue-50 rounded-lg p-3">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
              <Truck className="h-4 w-4 mr-2" />
              {t('purchase.delivery.title')}
            </h3>
            
            <div className="space-y-1 text-xs text-gray-600">
              <p>{t('purchase.delivery.time')}</p>
              <p>{t('purchase.delivery.tracking')}</p>
            </div>
          </div>

          {/* Informações de Pagamento */}
          <div className="bg-green-50 rounded-lg p-3">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
              <CreditCard className="h-4 w-4 mr-2" />
              {t('purchase.payment.title')}
            </h3>
            
            <div className="space-y-1 text-xs text-gray-600">
              <p>{t('purchase.payment.method')}</p>
              <p>{t('purchase.payment.confirmation')}</p>
            </div>
          </div>
        </div>

        <SheetFooter className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
          <Button 
            onClick={handleFinishPurchase}
            disabled={isProcessing}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5"
          >
            {isProcessing ? t('purchase.processing') : t('purchase.finish')}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="w-full py-2.5"
          >
            {t('purchase.close')}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
