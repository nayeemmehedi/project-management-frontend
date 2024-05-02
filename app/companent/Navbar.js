"use client";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the icon is open or closed

  const toggleIcon = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="h-16 w-full bg-green-500 text-white ">
      <div className="flex justify-between items-center px-3">

        <div className=" hidden lg:block"></div>
        <div className="block lg:hidden ">
          {isOpen ? (
            <FaTimes
              onClick={toggleIcon}
              className="text-gray-600 text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleIcon}
              className="text-gray-600 text-2xl cursor-pointer"
            />
          )}
        </div>
        <div>
          <p className="font-thin text-sm">
            Project Management Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
