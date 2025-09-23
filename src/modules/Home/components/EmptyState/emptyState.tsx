import { Search } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <Search className="w-16 h-16 mx-auto" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Nenhum livro encontrado
      </h3>
      <p className="text-gray-500">
        Tente ajustar seus filtros ou termos de busca
      </p>
    </div>
  );
}
