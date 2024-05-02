"use client";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import useStore from "../store";

function Navbar() {

  // This is ZuSTand Value  
  const {  toggleValue, settoggleValue } = useStore();

  console.log("projectStatus: ", JSON.stringify(toggleValue));
  // const [isOpen, setIsOpen] = useState(false); // State to track whether the icon is open or closed

  const toggleIcon = () => {
    settoggleValue(!toggleValue) // Toggle the state
  };

  return (
    <div className="h-16 w-full bg-green-500 text-white ">
      <div className="flex justify-between items-center px-3">
        <div className=" hidden lg:block"></div>
        <div className="block lg:hidden ">
          {toggleValue ? (
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
          <p className="font-thin text-sm">Project Management Dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
