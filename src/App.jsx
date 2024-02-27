import React from "react";
import { Navbar, SearchBar, BookList } from "./components";

const App = () => (
  <div className="App min-h-screen flex flex-col items-center gap-8 bg-slate-200">
    <Navbar />
    <SearchBar />
    <BookList />
  </div>
);

export default App;
