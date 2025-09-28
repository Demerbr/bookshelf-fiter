import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export function BookDetailBreadcrumb() {
  const { t } = useTranslation();
  
  return (
    <nav className="mb-6">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
        <ArrowLeft className="w-4 h-4 mr-1" />
        {t('book.backToBooks')}
      </Link>
    </nav>
  );
}
