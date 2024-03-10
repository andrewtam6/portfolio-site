import React from "react";

const Navbar = () => {
  return (
    <nav className="flex align-top justify-end p-4">
      <ul className="flex space-x-4">
        <li>
          <a
            href="#"
            className="text-white hover:text-gray-100 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-gray-100 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-gray-100 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

