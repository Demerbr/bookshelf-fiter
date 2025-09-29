import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Book } from "@/services/types/book";

export function useBookDetailQuery(id: string) {
  return useQuery<Book>({
    queryKey: ["book-detail", id],
    queryFn: async (): Promise<Book> => {
      try {
        const response = await api.books.getById(id);
        return response.data;
      } catch {
        return {
          id: "",
          name: "Erro ao carregar livro",
          authors: [],
          description: "",
          imagelink: "",
          publishedat: "",
          createdat: "",
          searchable: "",
          price: "0",
        };
      }
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
}
