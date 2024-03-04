// Filter.jsx
import React from "react";
import { useAppContext } from "../context";

const Filter = () => {
  const { setSelectedCategory, setSelectedPublicationDate, categories, mode } =
    useAppContext();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedPublicationDate(e.target.value);
  };

  return (
    <div className="Filter flex justify-center items-center gap-4">
      <select
        className={`bg-inherit border-solid rounded-md border-2 h-6 w-36 ${
          mode
            ? "text-zinc-800 border-zinc-800 "
            : "text-zinc-100 border-zinc-100"
        } `}
        onChange={handleCategoryChange}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        className={`bg-inherit border-solid border-2 rounded-md h-6 w-36 ${
          mode
            ? "text-zinc-800 border-zinc-800"
            : "text-zinc-100 border-zinc-100"
        } `}
        type="date"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Filter;
