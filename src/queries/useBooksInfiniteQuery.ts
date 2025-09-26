import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { BooksListResponse, BooksParams } from "@/services/types/book";

export function useBooksInfiniteQuery(params: Omit<BooksParams, 'page'> = {}) {
  const { limit = 4, text, sortBy, sortOrder } = params;
  
  return useInfiniteQuery<BooksListResponse>({
    queryKey: ["books-infinite", { limit, text, sortBy, sortOrder }],
    queryFn: async ({ pageParam = 1 }): Promise<BooksListResponse> => {
      try {
        return await api.books.list({
          page: pageParam as number,
          limit,
          text,
          sortBy,
          sortOrder,
        });
      } catch {
        return {
          data: [],
          hasMore: false,
          page: String(pageParam),
          limit: String(limit),
        };
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000, 
  });
}
