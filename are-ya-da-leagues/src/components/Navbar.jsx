import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link to="/" className="pl-8">
        Home
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
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
    </nav>
  );
}
