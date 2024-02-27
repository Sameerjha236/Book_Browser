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
      {/* Category Filter */}
      <select onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Publication Date Filter */}
      <input type="date" onChange={handleDateChange} />
    </div>
  );
};

export default Filter;
