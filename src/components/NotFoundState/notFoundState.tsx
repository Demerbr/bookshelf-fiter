import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotFoundStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export const NotFoundState = ({ searchQuery, onClearSearch }: NotFoundStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Nenhum resultado encontrado
          </h2>
          <p className="text-gray-500 mb-6">
            Não encontramos livros para &quot;{searchQuery}&quot;. 
            Tente usar palavras-chave diferentes ou verifique a ortografia.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={onClearSearch}
            variant="outline"
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Limpar busca
          </Button>
          
          <p className="text-sm text-gray-400">
            Dicas para melhorar sua busca:
          </p>
          <ul className="text-sm text-gray-500 text-left space-y-1">
            <li>• Use palavras-chave mais gerais</li>
            <li>• Verifique a ortografia</li>
            <li>• Tente sinônimos</li>
            <li>• Use menos palavras</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

