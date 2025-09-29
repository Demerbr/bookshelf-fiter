import { BookDetailImage } from "./BookDetailImage";
import { BookDetailInfo } from "../BookDetailInfo";
import { useGridClasses } from "@/hooks/useGridClasses";

export function BookDetailMain() {
  const gridClasses = useGridClasses('book-detail');
  
  return (
    <div className={gridClasses}>
      <BookDetailImage />
      <BookDetailInfo />
    </div>
  );
}
