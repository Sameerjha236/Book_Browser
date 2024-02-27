// context.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState("false");
  const [value, setValue] = useState("");
  const [curr, setCurr] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPublicationDate, setSelectedPublicationDate] = useState("");
  const [page, setPage] = useState(1);
  const API_KEY = "AIzaSyACjTi82v2T-puT71aMuslFJkJz4zuZr8M";

  const categories = [
    "Fiction",
    "Romance",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Thriller",
    "Horror",
    "Nonfiction",
    "Biography",
    "Self-help",
    "History",
    "Cooking",
    "Travel",
    "Art",
    "Poetry",
    "Children's",
    "Young Adult",
  ];

  useEffect(() => {
    fetchBookDetails("Love", 1, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBookDetails = async (bookName, page, check) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}&startIndex=${
          (page - 1) * 10
        }&maxResults=10`
      );
      const data = await response.json();
      // console.log(data);
      const formattedBooks = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || [],
        imageLinks: item.volumeInfo.imageLinks || {},
        description: item.volumeInfo.description || "",
        categories: item.volumeInfo.categories || [],
        date: item.volumeInfo.publishedDate || "",
      }));
      if (check) setBooks([...books, ...formattedBooks]);
      else setBooks(formattedBooks);
    } catch (error) {
      // window.alert("No more books available");
      // console.log("No more books available");
    }
  };

  const submitHandler = (event) => {
    if (event.key === "Enter") {
      setValue(curr);
      setPage(1);
      setBooks([]);
      fetchBookDetails(curr, 1, 0);
      setCurr("");
    }
  };

  const filteredBooks = () => {
    return books.filter((book) => {
      const bookDate = new Date(book.date);
      const selectedDateObj = new Date(selectedPublicationDate);

      if (
        (selectedCategory === "all" ||
          book.categories.includes(selectedCategory)) &&
        (selectedPublicationDate === "" || bookDate > selectedDateObj)
      ) {
        return true;
      }
      return false;
    });
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        value,
        setValue,
        submitHandler,
        curr,
        setCurr,
        page,
        books: filteredBooks(),
        setMode,
        fetchBookDetails,
        selectedCategory,
        setSelectedCategory,
        selectedPublicationDate,
        setSelectedPublicationDate,
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
