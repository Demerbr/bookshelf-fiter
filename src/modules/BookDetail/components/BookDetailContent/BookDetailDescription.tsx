import { useBookDetailContext } from "../BookDetailContext";
import { useTranslation } from 'react-i18next';

export function BookDetailDescription() {
  const { book } = useBookDetailContext();
  const { t } = useTranslation();
  
  return (
    <div className="border-t mt-8 pt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('book.synopsis')}</h3>
      <p className="text-gray-700 leading-relaxed">{book.description}</p>
    </div>
  );
}
