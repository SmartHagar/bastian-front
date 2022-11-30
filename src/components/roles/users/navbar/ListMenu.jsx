/** @format */

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useProdiAPI from "../../../../store/api/prodi";

const ListMenu = () => {
  // store
  const { setProdi } = useProdiAPI();
  //   state
  const [links, setLinks] = useState();
  const [heading, setHeading] = useState("");
  // menu
  const menu = async () => {
    const data = await setProdi();

    const menuAlumni = [];
    // add data MenuAlumni
    data.data.map((row) =>
      menuAlumni.push({
        head: row.nama,
        link: `/user/alumni/${row.id}`,
        haveSub: false,
      })
    );

    setLinks([
      {
        head: "Dashboard",
        submenu: false,
        link: "/user/dashboard",
      },
      {
        head: "Alumni",
        submenu: true,
        sublink: menuAlumni,
      },
      {
        head: "About",
        submenu: false,
        link: "/user/about",
      },
      {
        head: "Login",
        submenu: false,
        link: "/auth/login",
      },
    ]);
  };
  useEffect(() => {
    menu();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:mx-6">
      <div className="relative flex gap-4 z-50">
        {links &&
          links.map((row, index) => (
            <div className="" key={index}>
              {row.submenu ? (
                <Link
                  className="my-2 text-gray-900 transition-colors duration-300 transform hover:text-ungu hover:font-bold md:my-0"
                  onClick={() => {
                    heading !== row.name
                      ? setHeading(row.name)
                      : setHeading("");
                  }}
                >
                  {row.head}
                </Link>
              ) : (
                <NavLink
                  className="my-2 text-gray-900 transition-colors duration-300 transform hover:text-ungu hover:font-bold md:my-0"
                  to={row.link}
                >
                  {row.head}
                </NavLink>
              )}
              {row.submenu && (
                <div
                  className={`${
                    heading === row.name ? "absolute" : "hidden"
                  } left-14 top-10 w-44 rounded-lg flex flex-wrap backdrop-blur-lg bg-white/70 z-50`}
                >
                  {row.sublink.map((sub, isblk) => (
                    <NavLink
                      key={isblk}
                      className="px-2 py-1 hover:bg-hijau hover:rounded-lg hover:text-ungu hover:font-bold w-full cursor-pointer"
                      to={sub.link}
                    >
                      {sub.head}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListMenu;
