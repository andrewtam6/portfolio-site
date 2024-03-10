import Link from "next/link";
import React from "react";

const Navbar = ({ className }) => {
  return (
    <nav className={className+ " flex align-top justify-end p-4"}>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <p className="text-lg text-medium text-white hover:text-gray-100 transition-colors duration-300">
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-lg text-medium text-white hover:text-gray-100 transition-colors duration-300">
              About
            </p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-lg text-medium text-white hover:text-gray-100 transition-colors duration-300">
              Contact
            </p>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;

