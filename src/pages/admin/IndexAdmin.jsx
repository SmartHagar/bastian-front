/** @format */

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/roles/admin/navbar/Navbar";
import Sidebar from "../../components/roles/admin/sidebar/Sidebar";

const IndexAdmin = () => {
  // state
  const [menu, setMenu] = useState(false);
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("user_login"));
    console.log(user_login);
    if (user_login) {
      const { role } = user_login;
      if (role === "pimpinan") {
        navigate("/ketua/dashboard");
      }
    } else {
      navigate("/auth/login");
    }
  }, []);
  // show menu
  const showMenu = () => {
    setMenu(true);
  };
  const hiddenMenu = () => {
    setMenu(false);
  };
  return (
    <div className="flex font-Poppins text-black">
      {/* sidebar */}
      <div
        className={`z-50 h-screen fixed shadow-lg lg:block lg:z-0 ${
          menu ? "block" : "hidden"
        }`}
      >
        <Sidebar hiddenMenu={hiddenMenu} />
      </div>
      <div className="flex flex-wrap absolute left-0 right-0 lg:left-64 lg:right-0">
        {/* navbar */}
        <div className="w-full z-40 relative top-0">
          <Navbar showMenu={showMenu} />
        </div>
        {/* content */}
        <div className="w-full px-4 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexAdmin;
