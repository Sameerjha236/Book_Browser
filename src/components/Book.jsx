import React, { useState } from "react";
import { useAppContext } from "../context";
const Book = ({ book }) => {
  const [showDetail, setShowDetail] = useState(0);
  const { title, authors, imageLinks, description, categories, date } = book;
  const { mode } = useAppContext();
  return (
    <div
      className={`flex gap-2 w-2/3 text-wrap justify-around items-center rounded-lg transform hover:scale-105 transition-transform duration-500  ${
        mode
          ? "bg-sky-300 text-zinc-800 hover:bg-sky-400"
          : "bg-sky-600 text-zinc-200 hover:bg-sky-500"
      }`}
    >
      <div className="">
        <img
          className=" object-contain w-full h-auto"
          src={imageLinks.smallThumbnail}
          alt="{title}"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="font-bold sm:text-2xl text-xl text-center">{title}</h1>
        <h3 className="sm:text-xl text-l">{authors}</h3>
        {showDetail ? (
          <div className="flex flex-col justify-center items-center">
            <p>{description.substring(0, 300)}...</p>
            <p>{categories}</p>
            <p>{date ? date : ""}</p>
          </div>
        ) : (
          ""
        )}
        <button onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? "Read Less" : "Read More..."}
        </button>
      </div>
    </div>
  );
};

export default Book;
