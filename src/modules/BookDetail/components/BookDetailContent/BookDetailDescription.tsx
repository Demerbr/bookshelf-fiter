import { useBookDetailContext } from "../BookDetailContext";

export function BookDetailDescription() {
  const { book } = useBookDetailContext();
  
  return (
    <div className="border-t mt-8 pt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Sinopse</h3>
      <p className="text-gray-700 leading-relaxed">{book.description}</p>
    </div>
  );
}
