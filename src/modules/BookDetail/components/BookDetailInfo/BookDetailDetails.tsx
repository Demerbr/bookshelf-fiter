import { useBookDetailContext } from "../BookDetailContext";
import { useTranslation } from 'react-i18next';

export function BookDetailDetails() {
  const { book, publishedYear } = useBookDetailContext();
  const { t } = useTranslation();
  
  return (
    <div className="border-t pt-4">
      <h3 className="font-semibold text-gray-900 mb-3">{t('book.details.title')}</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">{t('book.details.publicationYear')}:</span>
          <span className="ml-2 font-medium">{publishedYear}</span>
        </div>
        <div>
          <span className="text-gray-600">{t('book.details.authors')}:</span>
          <span className="ml-2 font-medium">{book.authors.length}</span>
        </div>
        <div>
          <span className="text-gray-600">{t('book.details.creationDate')}:</span>
          <span className="ml-2 font-medium">
            {new Date(book.createdat).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div>
          <span className="text-gray-600">{t('book.details.id')}:</span>
          <span className="ml-2 font-medium text-xs">{book.id}</span>
        </div>
      </div>
    </div>
  );
}
