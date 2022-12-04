/** @format */

import React, { useState } from "react";
import FormPemasukan from "./FormPemasukan";
import FormPengeluaran from "./FormPengeluaran";

const Kwitansi = () => {
  const [selectKwitansi, setselectKwitansi] = useState("");

  const showKwitansi = () => {
    if (selectKwitansi === "Pemasukan") {
      return <FormPemasukan />;
    } else if (selectKwitansi === "Pengeluaran") {
      return <FormPengeluaran />;
    }
  };

  return (
    <div>
      <div className="w-full">
        <select
          onChange={(e) => setselectKwitansi(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Kwitansi</option>
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>
      <div className="mt-4">{showKwitansi()}</div>
    </div>
  );
};

export default Kwitansi;
