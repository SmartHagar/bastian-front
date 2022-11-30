/** @format */

import React from "react";

const Limited = ({ setLimit }) => {
  return (
    <>
      <div>
        <select
          onChange={(e) => setLimit(e.target.value)}
          defaultValue={10}
          className="w-full m-2 px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  );
};

export default Limited;
