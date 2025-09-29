import { use } from "react";
import { BookDetailPageProps } from "@/interfaces/bookDetailPageProps";
import { useBookDetailQuery } from "@/queries";
import { BookDetailLoading } from "./components/BookDetailLoading";
import { BookDetailError } from "./components/BookDetailError";
import { BookDetailContent } from "./components/BookDetailContent";

export const BookDetailModule = ({ params }: BookDetailPageProps) => {
  const resolvedParams = use(params);
  const { data: book, isLoading, isError } = useBookDetailQuery(resolvedParams.id);

  if (isLoading) {
    return <BookDetailLoading />;
  }

  if (isError || !book) {
    return <BookDetailError />;
  }

  return <BookDetailContent book={book} />;
};