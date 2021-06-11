import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-red-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/teams" className="p-4">
        Teams
      </Link>
      <Link to="/team/create" className="p-4">
        Create
      </Link>
      <Link to="/leagues" className="p-4">
        Leagues
      </Link>
    </div>
  );
}

export default Dropdown;
