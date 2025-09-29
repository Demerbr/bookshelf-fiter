import { Book } from "@/services/types/book";
import { BookDetailContext } from "../BookDetailContext";
import { BookDetailBreadcrumb } from "./BookDetailBreadcrumb";
import { BookDetailMain } from "../BookDetailMain";
import { BookDetailDescription } from "./BookDetailDescription";

interface BookDetailContentProps {
  book: Book;
}

export function BookDetailContent({ book }: BookDetailContentProps) {
  const publishedYear = new Date(book.publishedat).getFullYear();
  
  const authorsText = book.authors && book.authors.length > 1 
    ? book.authors.join(', ') 
    : book.authors[0] || '';

  const cleanImageUrl = book.imagelink?.replace(/\]$/, '') || '';

  const contextValue = {
    book,
    publishedYear,
    authorsText,
    cleanImageUrl
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
