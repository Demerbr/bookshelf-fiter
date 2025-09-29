import { Book } from "@/services/types/book";
import { BookDetailContext } from "../BookDetailContext";
import { BookDetailBreadcrumb } from "./BookDetailBreadcrumb";
import { BookDetailMain } from "../BookDetailMain";
import { BookDetailDescription } from "./BookDetailDescription";

interface BookDetailContentProps {
  book: Book;
}

const formatAuthors = (authors: string[]): string => {
  return authors.length > 1 ? authors.join(', ') : authors[0] || '';
};

const cleanImageUrl = (url: string): string => {
  return url?.replace(/\]$/, '') || '';
};

export function BookDetailContent({ book }: BookDetailContentProps) {
  const publishedYear = new Date(book.publishedat).getFullYear();
  const authorsText = formatAuthors(book.authors);
  const cleanImage = cleanImageUrl(book.imagelink);

  const contextValue = {
    book,
    publishedYear,
    authorsText,
    cleanImageUrl: cleanImage
  };

  return (
    <BookDetailContext.Provider value={contextValue}>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <BookDetailBreadcrumb />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <BookDetailMain />
            
            {book.description && (
              <BookDetailDescription />
            )}
          </div>
        </div>
      </div>
    </BookDetailContext.Provider>
  );
}
