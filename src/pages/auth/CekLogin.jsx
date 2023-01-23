/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CekLogin = () => {
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      const { role } = user_login;
      if (role === "bendahara") {
        navigate("/admin/dashboard");
      } else if (role === "pimpinan") {
        navigate("/ketua/dashboard");
      } else if (role === "staf") {
        navigate("/staf/dashboard");
      } else {
        // delete user login
        localStorage.removeItem("user_login");
      }
    } else {
      navigate("/auth/login");
    }
  }, []);
  return <div>Gagal Cek. Refresh halaman ini</div>;
};

export default CekLogin;
