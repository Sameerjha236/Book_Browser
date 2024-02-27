import React, { useEffect } from "react";
import { useAppContext } from "../context";
import Book from "./Book";
import Filter from "./Filter";
import { debounce } from "lodash"; // Import debounce function from lodash

const BookList = () => {
  const { books, value, fetchBookDetails, page } = useAppContext();

  // Debounce the handleScroll function to prevent it from being called too frequently
  const handleScroll = debounce(() => {
    const buffer = 100; // Adjust this value as needed
    if (
      window.innerHeight + document.documentElement.scrollTop + buffer >=
      document.documentElement.offsetHeight
    ) {
      console.log("fetch again");
      fetchBookDetails(value, page + 1, 1); // Trigger function to fetch more books with the next page
    }
  }, 300); // Set the debounce delay to 300ms

  // Add event listener for infinite scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel any pending debounce calls when the component unmounts
    };
  }, [fetchBookDetails, page, handleScroll]); // Include fetchBookDetails, page, and handleScroll in dependency array

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
