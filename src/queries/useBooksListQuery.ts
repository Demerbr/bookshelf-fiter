import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { BooksListResponse, BooksParams } from "@/services/types/book";

export function useBooksListQuery(params: BooksParams = {}) {
  const { page = 1, limit = 4, text, sortBy, sortOrder } = params;
  
  return useQuery<BooksListResponse>({
    queryKey: ["books-list", { page, limit, text, sortBy, sortOrder }],
    queryFn: async (): Promise<BooksListResponse> => {
      try {
        return await api.books.list(params);
      } catch {
        // Fallback para evitar quebra da UI
        return {
          data: [],
          hasMore: false,
          page: "1",
          limit: "4",
        };
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchInterval: 30 * 1000, // 30 segundos
  });
}
