/**
 * Utilitários para formatação de dados
 */

/**
 * Formata um preço numérico para o formato brasileiro (R$ X,XX)
 * @param price - O preço a ser formatado
 * @returns String formatada no padrão brasileiro
 */
export const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

/**
 * Formata um preço com desconto, calculando o preço original
 * @param currentPrice - Preço atual
 * @param discountPercentage - Percentual de desconto (ex: 25 para 25%)
 * @returns Objeto com preço atual, original e economia
 */
export const formatPriceWithDiscount = (
  currentPrice: number, 
  discountPercentage: number = 25
) => {
  const originalPrice = currentPrice * (1 + discountPercentage / 100);
  const savings = originalPrice - currentPrice;
  
  return {
    currentPrice: formatPrice(currentPrice),
    originalPrice: formatPrice(originalPrice),
    savings: formatPrice(savings),
    discountPercentage
  };
};
