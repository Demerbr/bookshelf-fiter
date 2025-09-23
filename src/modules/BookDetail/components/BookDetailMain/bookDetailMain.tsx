import { BookDetailImage } from "./BookDetailImage";
import { BookDetailInfo } from "../BookDetailInfo";

export function BookDetailMain() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <BookDetailImage />
      <BookDetailInfo />
    </div>
  );
}
