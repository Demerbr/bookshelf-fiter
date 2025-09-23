import { BookDetailHeader } from "./BookDetailHeader";
import { BookDetailRating } from "./BookDetailRating";
import { BookDetailPrice } from "./BookDetailPrice";
import { BookDetailDetails } from "./BookDetailDetails";
import { BookDetailActions } from "./BookDetailActions";
import { BookDetailDelivery } from "./BookDetailDelivery";

export function BookDetailInfo() {
  return (
    <div className="space-y-6">
      <BookDetailHeader />
      <BookDetailRating />
      <BookDetailPrice />
      <BookDetailDetails />
      <BookDetailActions />
      <BookDetailDelivery />
    </div>
  );
}
