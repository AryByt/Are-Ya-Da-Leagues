import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/team/create">Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
