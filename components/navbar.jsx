import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="absolute top-0 right-0 py-8 z-50">
            <div className="flex justify-end space-x-8">
                <nav>
                    <Link href="/home" className="text-white p-4 hover:text-gray-200 transition-colors duration-300 font-medium">Home</Link>
                    <Link href="/projects" className="text-white p-4 hover:text-gray-200 transition-colors duration-300 font-medium">Projects</Link>
                </nav>
            </div>
        </div>
    );
};
  

export default Navbar;
