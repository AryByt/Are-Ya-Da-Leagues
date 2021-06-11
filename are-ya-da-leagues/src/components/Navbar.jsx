import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ... p-5 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <nav>
          <ul>
            <li className="inline-block p-2 text-red-200 hover:text-purple-100">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block p-2 text-pink-300 hover:text-red-200">
              <Link to="/leagues">Leagues</Link>
            </li>
            <li className="text-purple-200 inline-block p-2 hover:text-pink-200">
              <Link to="/teams">Teams</Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="">
        <ul className="">
          <li className="hover:bg-pink-300  hover:text-pink-100 text-white font-bold rounded">
            <Link to="/team/create">Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
