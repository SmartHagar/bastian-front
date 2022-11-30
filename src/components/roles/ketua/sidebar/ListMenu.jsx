/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BiHome,
  BiSpa,
  BiUserCheck,
  BiStation,
  BiStats,
  BiStar,
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
    <nav
      aria-label="Main Nav"
      className="mt-6 flex flex-col space-y-1 nav-ketua"
    >
      <NavLink
        to="/ketua/dashboard"
        className="flex items-center rounded-lg px-4 py-2 text-black hover:bg-hijau hover:text-black"
      >
        <BiHome size={20} />

        <span className="ml-3 text-sm"> Dashboard </span>
      </NavLink>

      <details className="group" open={pathName === "laporan" && true}>
        <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-black hover:bg-hijau hover:text-black">
          <BiSpa size={20} />
          <span className="ml-3 text-sm"> Laporan </span>

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

        <nav aria-label="Laporan Nav" className="mt-1.5 ml-8 flex flex-col">
          <NavLink
            to="/ketua/laporan/keseluruhan"
            className="flex items-center rounded-lg px-4 py-2 text-black hover:bg-hijau hover:text-black"
          >
            <BiStation size={20} />

            <span className="ml-3 text-sm"> Alumni Keseluruhan </span>
          </NavLink>

          <NavLink
            to="/ketua/laporan/perdistrik"
            className="flex items-center rounded-lg px-4 py-2 text-black hover:bg-hijau hover:text-black"
          >
            <BiStats size={20} />

            <span className="ml-3 text-sm"> Alumni Per-Distrik </span>
          </NavLink>
        </nav>
      </details>

      <NavLink
        to="/ketua/alumni"
        className="flex items-center rounded-lg px-4 py-2 text-black hover:bg-hijau hover:text-black"
      >
        <BiUserCheck size={20} />

        <span className="ml-3 text-sm"> Alumni </span>
      </NavLink>
    </nav>
  );
};
