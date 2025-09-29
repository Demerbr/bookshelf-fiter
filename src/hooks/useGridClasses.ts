/**
 * Hook para gerenciar classes de grid responsivas
 */

export type GridVariant = 'book-detail' | 'cart' | 'favorites' | 'books-grid';

/**
 * Hook que retorna as classes CSS apropriadas para diferentes tipos de grid
 * @param variant - Tipo de grid desejado
 * @returns String com as classes CSS do grid
 */
export const useGridClasses = (variant: GridVariant): string => {
  const gridClasses = {
    'book-detail': 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    'cart': 'grid grid-cols-1 lg:grid-cols-3 gap-8',
    'favorites': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
    'books-grid': 'grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-4'
  };
  
  return gridClasses[variant];
};

/**
 * Hook que retorna classes de grid com customizações adicionais
 * @param variant - Tipo de grid desejado
 * @param customClasses - Classes CSS adicionais
 * @returns String com as classes CSS do grid + customizações
 */
export const useGridClassesWithCustom = (
  variant: GridVariant, 
  customClasses: string = ''
): string => {
  const baseClasses = useGridClasses(variant);
  return customClasses ? `${baseClasses} ${customClasses}` : baseClasses;
};
