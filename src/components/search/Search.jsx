/** @format */

import React from "react";

const Search = ({ setSearch }) => {
  return (
    <>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="px-3 py-2 mt-2 text-slate-600 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
          placeholder="Cari Data"
        />
      </div>
    </>
  );
};

export default Search;
