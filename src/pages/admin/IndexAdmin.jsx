/** @format */

import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/roles/admin/navbar/Navbar";
import Sidebar from "../../components/roles/admin/sidebar/Sidebar";

const IndexAdmin = () => {
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      const { role } = user_login;
      if (role === "ketua") {
        navigate("/ketua/dashboard");
      }
    } else {
      navigate("/auth/login");
    }
  }, []);
  return (
    <div className="flex font-Poppins text-black">
      {/* sidebar */}
      <div className="h-screen fixed shadow-lg z-0">
        <Sidebar />
      </div>
      <div className="flex flex-wrap absolute left-64 right-0">
        {/* navbar */}
        <div className="w-full z-40 relative top-0">
          <Navbar />
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
