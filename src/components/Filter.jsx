// Filter.jsx
import React from "react";
import { useAppContext } from "../context";

const Filter = () => {
  const { setSelectedCategory, setSelectedPublicationDate, categories } =
    useAppContext();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedPublicationDate(e.target.value);
  };

  return (
    <div className="Filter flex justify-center items-center gap-4">
      <select onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input type="date" onChange={handleDateChange} />
    </div>
  );
};

export default Filter;
