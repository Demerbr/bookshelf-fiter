import { useBookDetailContext } from "../BookDetailContext";

export function BookDetailHeader() {
  const { book, authorsText } = useBookDetailContext();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{book.name}</h1>
      <p className="text-lg text-blue-600 hover:text-blue-800 cursor-pointer">
        por {authorsText}
      </p>
    </div>
  );
}
