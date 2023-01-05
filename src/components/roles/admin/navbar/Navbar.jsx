/** @format */

import React from "react";
import { BsTextIndentLeft } from "react-icons/bs";

const Navbar = ({ showMenu }) => {
  return (
    <div>
      <div className="absolute h-14 left-2 z-50 flex items-center">
        <div onClick={showMenu} className="cursor-pointer">
          <BsTextIndentLeft size={30} className="text-biru" />
        </div>
      </div>
      <div className="border-b shadow-md h-14 backdrop-blur-sm bg-white/30 flex items-center justify-center fixed left-0 right-0 lg:right-0 lg:left-64">
        <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-b from-biru to-kuning font-Charmonman font-bold">
          Keuangan Fakultas Sains Dan Teknologi
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
