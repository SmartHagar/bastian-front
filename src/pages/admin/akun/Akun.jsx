/** @format */

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toastError from "../../../services/toast-error";
import toastSuccess from "../../../services/toast-success";
import useLogin from "../../../store/login";

const Akun = () => {
  // get user_login from local storage
  const user_login = JSON.parse(localStorage.getItem("user_login"));
  let role;
  user_login ? (role = user_login.role) : (role = null);
  // state
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // store
  const { setGantiPassword } = useLogin();
  // ganti passpowd
  const handleSimpan = async (e) => {
    e.preventDefault();
    const items = {
      id: user_login.user_id,
      password,
      password_baru: newPassword,
    };

    const ganti = await setGantiPassword(items);
    if (ganti.status === "error") {
      toastError(ganti.error.pesan);
    }
    if (ganti.status === "berhasil") {
      toastSuccess(ganti.data);
      setPassword("");
      setNewPassword("");
    }
  };
  return (
    <div>
      <Toaster />
      <div>
        <h1 className="uppercase text-center font-bold text-biru text-xl">
          {role}
        </h1>
        <h1 className="uppercase text-center font-bold text-biru text-xl">
          fakultas sanis dan teknologi
        </h1>
        <h3 className="text-center mt-10 text-lg font-bold">Ganti Password</h3>
      </div>
      <div className="w-96 mx-auto mt-5">
        <form onSubmit={handleSimpan}>
          <div className="mb-3 pt-0 flex flex-col gap-2">
            <label htmlFor="password">Password Lama</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div className="mb-3 pt-0 flex flex-col gap-2">
            <label htmlFor="newPassword">Password Baru</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="newPassword"
              type="password"
              className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
        </form>
        <div className="mx-3">
          <button
            className="bg-biru w-full text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleSimpan}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Akun;
