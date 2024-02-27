import React, { useState } from "react";

const Book = ({ book }) => {
  const { title, authors, imageLinks, description } = book;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  // console.log("idhar ", book);
  return (
    <div className="flex w-full max-w-md mx-aut0  hover:bg-slate-300 shadow-md rounded-lg overflow-hidden">
      <div className="w-1/2">
        {imageLinks && imageLinks.smallThumbnail && (
          <img
            className="object-contain w-full h-auto"
            src={imageLinks.smallThumbnail}
            alt={title}
          />
        )}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm mb-2">Author: {authors.join(", ")}</p>
        <p className="text-sm">
          Description:{" "}
          {showFullDescription
            ? `${description.slice(0, 300)}...`
            : `${description.slice(0, 100)}...`}
        </p>
        <button
          className="text-sm text-blue-500 hover:underline focus:outline-none"
          onClick={toggleDescription}
        >
          {showFullDescription ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default Book;
