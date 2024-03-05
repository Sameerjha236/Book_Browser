import React from "react";
import { useAppContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { mode, setMode } = useAppContext();

  return (
    <div
      className={`Navbar w-full h-20 flex justify-between items-center p-8 ${
        mode ? "bg-sky-300" : "bg-zinc-800"
      }`}
    >
      <h1
        className={`font-bold text-3xl ${
          mode ? "text-zinc-900" : "text-zinc-50"
        }`}
      >
        Book Browser
      </h1>
      <button className="" onClick={() => setMode(!mode)}>
        <FontAwesomeIcon
          icon={mode ? faMoon : faSun}
          className={`h-6 ${mode ? "text-zinc-900" : "text-yellow-500"}`}
        />
      </button>
    </div>
  );
};

export default Navbar;
