/** @format */

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/loading/Spinner";
import toastError from "../../services/toast-error";
import useLogin from "../../store/login";

const Login = () => {
  // store
  const { setLogin } = useLogin();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // navigation
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const items = {
      email,
      password,
    };
    const cek = await setLogin(items);
    if (cek.status === "error") {
      toastError(cek.error.message);
    }
    if (cek.status === "berhasil") {
      navigate("/auth/cek-login");
    }
    setIsLoading(false);
  };

  // cek apakah sdh login
  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      navigate("/auth/cek-login");
    }
  }, []);
  return (
    <div className="h-screen flex items-center bg-bg-2 bg-cover bg-center">
      <Toaster />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800/10 backdrop-blur-md lg:max-w-lg">
        <div className="w-full px-6 py-8 md:px-8">
          <h2 className="text-xl text-center text-white">WEBSITE KEUANGAN</h2>

          <p className="text-2xl text-center text-gray-100 text-bold">
            FAKULTAS SAINS & TEKNOLOGI
          </p>

          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm text-gray-100"
                htmlFor="LoggingEmailAddress"
              >
                Alamat Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 border rounded-md bg-gray-800/20 text-gray-300 border-gray-600  focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm text-gray-100"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                id="loggingPassword"
                className="block w-full px-4 py-2 border rounded-md bg-gray-800/20 text-gray-300 border-gray-600  focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            {isLoading && (
              <div className="flex justify-center mt-4">
                <Spinner />
              </div>
            )}
            {!isLoading && (
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-biru rounded focus:outline-none focus:bg-hijau focus:text-ungu"
                >
                  Login
                </button>
              </div>
            )}
          </form>

          {/* <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
            <Link
              to="/user/dashboard"
              className="text-sm uppercase text-kuning hover:underline"
            >
              Kembali ke dashboard
            </Link>
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
