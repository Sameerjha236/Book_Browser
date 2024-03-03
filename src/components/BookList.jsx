import React, { useEffect } from "react";
import { useAppContext } from "../context";
import Book from "./Book";
import Filter from "./Filter";
import { debounce } from "lodash";

const BookList = () => {
  const { books, value, fetchBookDetails, page } = useAppContext();

  const handleScroll = debounce(() => {
    const buffer = 100;
    if (
      window.innerHeight + document.documentElement.scrollTop + buffer >=
      document.documentElement.offsetHeight
    ) {
      fetchBookDetails(value, page + 1, 1);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [fetchBookDetails, page, handleScroll]);

  return (
    <div className="BookList w-full flex flex-col justify-center items-center gap-8">
      <Filter />
      {books.map((book, index) => (
        <Book key={`${book.id}-${book.title}-${index}-${page}`} book={book} />
      ))}
    </div>
  );
};

export default BookList;
