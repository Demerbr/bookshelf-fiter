import { useBookDetailContext } from "../BookDetailContext";
import { useTranslation } from 'react-i18next';

export function BookDetailHeader() {
  const { book, authorsText } = useBookDetailContext();
  const { t } = useTranslation();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{book.name}</h1>
      <p className="text-lg text-blue-600 hover:text-blue-800 cursor-pointer">
        {t('book.by')} {authorsText}
      </p>
    </div>
  );
}
