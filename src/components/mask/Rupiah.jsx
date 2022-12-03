/** @format */

import React from "react";
import { NumericFormat } from "react-number-format";
const Rupiah = ({ setJumlah, jumlah }) => {
  return (
    <NumericFormat
      displayType="input"
      value={jumlah}
      onChange={(e) => setJumlah(e.target.value)}
      id="jumlah"
      type="text"
      thousandSeparator=","
      prefix={"Rp. "}
      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
    />
  );
};

export default Rupiah;
