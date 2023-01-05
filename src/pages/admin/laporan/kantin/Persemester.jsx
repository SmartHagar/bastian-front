/** @format */

import React, { useEffect, useState } from "react";
import useBukuKas from "../../../../store/api/buku-kas";
import Table from "./Table";

import useUrl from "../../../../services/base_url";

const Persemester = () => {
  const { BASE_URL } = useUrl();
  // store
  const { setBukuKasSemester, dtBukuKas } = useBukuKas();
  // state
  const [semester, setSemester] = useState(null);
  const [tahun, setTahun] = useState(null);
  // effect
  useEffect(() => {
    if (tahun && semester) {
      setBukuKasSemester({ semester, tahun, kantin: true });
    }
  }, [semester, tahun]);

  const showTable = () => {
    if (tahun && semester) {
      return (
        <div>
          <Table dataKas={dtBukuKas} />
        </div>
      );
    }
  };

  const handleCetak = () => {
    window
      .open(
        `${BASE_URL}/export/pdf/semester?semester=${semester}&tahun=${tahun}`,
        "_blank"
      )
      .focus();
    console.log("cetak");
  };

  const btnCetak = () => {
    if (tahun && semester) {
      return (
        <button
          className="bg-biru text-white active:bg-biru font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            handleCetak();
          }}
        >
          Cetak
        </button>
      );
    }
  };

  return (
    <div>
      {/* pilih semester dan tahun */}
      <div className="flex gap-2 mb-4 items-center">
        <select
          onChange={(e) => setTahun(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Tahun</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <select
          onChange={(e) => setSemester(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Semester</option>
          <option value="Genap">Genap</option>
          <option value="Ganjil">Ganjil</option>
        </select>
        {btnCetak()}
      </div>
      {/* show table */}
      <div className="mb-5">{showTable()}</div>
    </div>
  );
};

export default Persemester;
