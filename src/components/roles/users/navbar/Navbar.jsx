/** @format */

import React from "react";
import ListMenu from "./ListMenu";

const Navbar = () => {
  return (
    <nav className="relative backdrop-blur-sm bg-white/50 shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center ">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700 ">
            Alumni Fakultas Ekonomi
          </div>
        </div>

        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <ListMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
