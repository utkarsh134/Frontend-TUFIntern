import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <NavLink  to="/" className="text-white text-lg font-semibold" activeclassname="text-white">
          Code Snippet App
        </NavLink>
        <div className="flex items-center mr-6 font-semibold">
          <NavLink  to="/" className="text-white mr-8 px-2 py-1 rounded-lg transition-all duration-500 hover:bg-black" activeclassname="bg-black">
            Home
          </NavLink>
          <NavLink to="/submissions" className="text-white mr-8 px-2 py-1 rounded-lg transition-all duration-500 hover:bg-black" activeclassname="bg-black">
            Submissions
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
