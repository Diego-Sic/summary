import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent mt-8 text-white px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="sm:mr-4">
          <a href="#" className="text-2xl font-bold text-white">
            Brand Name
          </a>
        </div>
        <div className="hidden md:flex space-x-10 text-l">
          <a
            href="https://5gkg1urth2t.typeform.com/to/gXEyT2dy"
            target="_blank"
            rel="noopener noreferrer"
          >
            WaitList
          </a>
          <div className="outline-dashed outline-2 outline-offset-2 rounded-lg">
            <a href="#" className="p-4">
              How it works!
            </a>
          </div>
        </div>
        <div className="md:hidden ml-4 px-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" z-[1] flex-col md:hidden mt-6 mx-4 space-y-4 justify-center items-center">
          <div className="flex justify-center items-center">
            <a
              href="https://5gkg1urth2t.typeform.com/to/gXEyT2dy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WaitList
            </a>
          </div>
          <div className="flex outline-dashed outline-2 outline-offset-2 rounded-lg justify-center items-center">
            <a href="#">How it works!</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
