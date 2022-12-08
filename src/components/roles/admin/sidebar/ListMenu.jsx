/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BiHome,
  BiUserCheck,
  BiAbacus,
  BiCabinet,
  BiExport,
  BiImport,
} from "react-icons/bi";

import "./style.css";

export const ListMenu = () => {
  // state
  const [pathName, setPathName] = useState("");
  // navigation
  const location = useLocation();
  const path = location.pathname.split("/");
  // use effect
  useEffect(() => {
    setPathName(path[2]);
  }, [location]);

  return (
    <>
      <div className="h-10 w-40 rounded-lg bg-biru mx-auto flex justify-center items-center text-white my-4 sticky top-0">
        <span className="font-bold">MENU</span>
      </div>
      <nav aria-label="Main Nav" className="flex flex-col space-y-1 nav-admin">
        <NavLink
          to="/admin/dashboard"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiHome size={20} />

          <span className="ml-3 text-sm"> Home </span>
        </NavLink>
        <NavLink
          to="/admin/unit"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiCabinet size={20} />

          <span className="ml-3 text-sm"> Unit </span>
        </NavLink>
        <NavLink
          to="/admin/akun"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiUserCheck size={20} />

          <span className="ml-3 text-sm"> Akun </span>
        </NavLink>
      </nav>
      <div className="h-10 w-40 rounded-lg bg-biru mx-auto flex justify-center items-center text-white my-4 sticky top-0">
        <span className="font-bold">TRANSAKSI</span>
      </div>
      <nav aria-label="Main Nav" className="flex flex-col space-y-1 nav-admin">
        <NavLink
          to="/admin/transaksi/Pemasukan"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiImport size={20} />

          <span className="ml-3 text-sm"> Pemasukan </span>
        </NavLink>

        <NavLink
          to="/admin/transaksi/Pengeluaran"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiExport size={20} />

          <span className="ml-3 text-sm"> Pengeluaran </span>
        </NavLink>
      </nav>
      <div className="h-10 w-40 rounded-lg bg-biru mx-auto flex justify-center items-center text-white my-4">
        <span className="font-bold uppercase">Cetak</span>
      </div>
      <nav aria-label="Main Nav" className="flex flex-col space-y-1 nav-admin">
        <NavLink
          to="/admin/kwitansi"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiImport size={20} />

          <span className="ml-3 text-sm"> Kwitansi </span>
        </NavLink>

        <NavLink
          to="/admin/buku-kas"
          className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
        >
          <BiExport size={20} />

          <span className="ml-3 text-sm"> Buku Kas </span>
        </NavLink>
      </nav>
    </>
  );
};
