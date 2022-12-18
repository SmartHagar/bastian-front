/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BiHome,
  BiUserCheck,
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
    setPathName(path);
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

        {/* kantin */}
        <details className="group" open={pathName[2] === "kantin" && true}>
          <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-merah hover:text-kuning">
            <BiExport size={20} />
            <span className="ml-3 text-sm"> Kantin </span>
            <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav aria-label="kantin Nav" className="mt-1.5 ml-8 flex flex-col">
            <NavLink
              to="/admin/kantin/Pemasukan"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Pemasukan </span>
            </NavLink>

            <NavLink
              to="/admin/kantin/Pengeluaran"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Pengeluaran </span>
            </NavLink>
          </nav>
        </details>
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
        {/* buku kas */}
        <details className="group" open={pathName[3] === "buku-kas" && true}>
          <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-merah hover:text-kuning">
            <BiExport size={20} />
            <span className="ml-3 text-sm"> Buku Kas Umum</span>
            <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav aria-label="buku-kas Nav" className="mt-1.5 ml-8 flex flex-col">
            <NavLink
              to="/admin/laporan/buku-kas/perbulan"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Perbulan </span>
            </NavLink>

            <NavLink
              to="/admin/laporan/buku-kas/persemester"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Persemester </span>
            </NavLink>

            <NavLink
              to="/admin/laporan/buku-kas/pertahun"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Pertahun </span>
            </NavLink>
          </nav>
        </details>
        {/* bukukas-kantin */}
        <details className="group" open={pathName[3] === "kantin" && true}>
          <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-merah hover:text-kuning">
            <BiExport size={20} />
            <span className="ml-3 text-sm"> Buku Kas Kantin </span>
            <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav aria-label="kantin Nav" className="mt-1.5 ml-8 flex flex-col">
            <NavLink
              to="/admin/laporan/kantin/perbulan"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Perbulan </span>
            </NavLink>

            <NavLink
              to="/admin/laporan/kantin/persemester"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Persemester </span>
            </NavLink>

            <NavLink
              to="/admin/laporan/kantin/pertahun"
              className="flex items-center rounded-lg px-4 py-2 text-merah hover:text-kuning"
            >
              <span className="ml-3 text-sm"> Pertahun </span>
            </NavLink>
          </nav>
        </details>
      </nav>
    </>
  );
};
