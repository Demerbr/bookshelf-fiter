import { Book } from "@/services/types/book";
import { BookCard, BookCardImage, BookCardInfo, BookCardRating, BookCardPrice, BookCardAction } from "../BookCard";

interface BooksGridProps {
  books: Book[];
}

export function BooksGrid({ books }: BooksGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book}>
          <BookCardImage />
          <BookCardInfo />
          <BookCardRating />
          <BookCardPrice />
          <BookCardAction />
        </BookCard>
      ))}
    </div>
  );
}
