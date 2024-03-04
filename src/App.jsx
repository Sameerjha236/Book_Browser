import React from "react";
import { Navbar, SearchBar, BookList } from "./components";
import { useAppContext } from "./context";

const App = () => {
  const { mode } = useAppContext();

  return (
    <div
      className={`App min-h-screen flex flex-col items-center gap-8 ${
        mode ? "bg-sky-200" : "bg-sky-700"
      }`}
    >
      <Navbar />
      <SearchBar />
      <BookList />
    </div>
  );
};

export default App;
