import React, { useState } from "react";

const Book = ({ book }) => {
  const [showDetail, setShowDetail] = useState(0);
  const { title, authors, imageLinks, description, categories, date } = book;
  return (
    <div className=" flex gap-2 w-2/3 justify-around items-center bg-slate-300 rounded-lg hover:bg-slate-400 transform hover:scale-105 transition-transform duration-500">
      <div className="">
        <img
          className=" object-contain w-full h-auto"
          src={imageLinks.smallThumbnail}
          alt="{title}"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="font-bold text-2xl text-center">{title}</h1>
        <h3 className="text-xl">{authors}</h3>
        {showDetail && (
          <div className="flex flex-col justify-center items-center">
            <p>{description}</p>
            <p>{categories}</p>
            <p>{date}</p>
          </div>
        )}
        <button onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? "Read Less" : "Read More..."}
        </button>
      </div>
    </div>
  );
};

export default Book;
