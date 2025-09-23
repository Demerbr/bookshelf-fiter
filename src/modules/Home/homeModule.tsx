import { Button } from "@/components/ui/button";
import { useBooksListQuery } from "@/queries";
import { BooksListResponse } from "@/services/types/book";
import { Search } from "lucide-react";
import { useState } from "react";
import { BookCard } from "./components/BookCard";

export const HomeModule = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useBooksListQuery({
      page,
      limit: 12,
    });
  
    const booksData = data as BooksListResponse | undefined;
  
    if (isError) {
      return (
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Erro ao carregar livros
              </h1>
              <p className="text-gray-600">
                {error?.message || "Tente novamente mais tarde"}
              </p>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
  
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {booksData?.data ? `${booksData.data.length} resultados encontrados` : 'Carregando...'}
            </p>
          </div>
  
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
                  <div className="aspect-[2/3] bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
                {booksData?.data?.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
  
              {booksData && booksData.data && booksData.data.length > 0 && (
                <div className="flex justify-center items-center gap-4">
                  <Button
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                    variant="outline"
                    className="px-6"
                  >
                    Anterior
                  </Button>
                  <span className="text-sm text-gray-600">
                    Página {page}
                  </span>
                  <Button
                    disabled={!booksData.hasMore}
                    onClick={() => setPage(p => p + 1)}
                    variant="outline"
                    className="px-6"
                  >
                    Próxima
                  </Button>
                </div>
              )}
  
              {booksData && booksData.data && booksData.data.length === 0 && (
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
              )}
            </>
          )}
        </div>
      </div>
    );
};