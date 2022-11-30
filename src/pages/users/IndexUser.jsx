/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/roles/users/navbar/Navbar";

const IndexUser = () => {
  return (
    <div className="font-ComicNeue">
      <div className="bg-bg-1 bg-cover bg-center fixed inset-x-0 top-0">
        <Navbar />
      </div>
      <div className="md:w-11/12 border m-auto shadow-md min-h-[85vh] mt-20 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default IndexUser;
