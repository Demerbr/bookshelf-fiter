import { useBookDetailContext } from "../BookDetailContext";

export function BookDetailDetails() {
  const { book, publishedYear } = useBookDetailContext();
  
  return (
    <div className="border-t pt-4">
      <h3 className="font-semibold text-gray-900 mb-3">Detalhes do produto</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">Ano de Publicação:</span>
          <span className="ml-2 font-medium">{publishedYear}</span>
        </div>
        <div>
          <span className="text-gray-600">Autores:</span>
          <span className="ml-2 font-medium">{book.authors.length}</span>
        </div>
        <div>
          <span className="text-gray-600">Data de Criação:</span>
          <span className="ml-2 font-medium">
            {new Date(book.createdat).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <div>
          <span className="text-gray-600">ID:</span>
          <span className="ml-2 font-medium text-xs">{book.id}</span>
        </div>
      </div>
    </div>
  );
}
