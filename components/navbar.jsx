import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="absolute p-8 left-3/4 z-50">
            <div className="inline-flex">
                <nav>
                    <Link href="/home" className="p-4 text-white hover:text-gray-200 transition-colors duration-300  font-medium">Home</Link>
                    <Link href="/projects" className="p-4 text-white hover:text-gray-200 transition-colors duration-300  font-medium">Projects</Link>
                    <Link href="/experience" className="p-4 text-white hover:text-gray-200 transition-colors duration-300  font-medium">Experience</Link>
                    <Link href="/contact" className="p-4 text-white hover:text-gray-200 transition-colors duration-300  font-medium">Contact</Link>
                </nav>
            </div>
        </div>
    );
};
  

export default Navbar;

