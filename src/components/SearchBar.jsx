import React from "react";
import { useAppContext } from "../context";
const SearchBar = () => {
  const { curr, setCurr, submitHandler } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler();
  };

  return (
    <div className="SearchBar flex w-52 sm:w-80">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          value={curr}
          onChange={(e) => setCurr(e.target.value)}
          className="w-full rounded-full h-8 text-center text-black font-bold"
          placeholder="Enter Book Name"
        />
      </form>
    </div>
  );
};

export default SearchBar;
