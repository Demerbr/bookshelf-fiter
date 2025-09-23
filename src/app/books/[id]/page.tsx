"use client";
import { BookDetailModule } from "@/modules/BookDetail";
import { BookDetailPageProps } from "@/interfaces/bookDetailPageProps";



export default function BookDetailPage({ params }: BookDetailPageProps) {
  return <BookDetailModule params={params} />;
}
