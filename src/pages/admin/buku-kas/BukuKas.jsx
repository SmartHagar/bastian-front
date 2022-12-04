/** @format */

import React, { useEffect, useState } from "react";
import useBukuKas from "../../../store/api/buku-kas";
import Table from "./Table";

import useUrl from "../../../services/base_url";

const BukuKas = () => {
  const { BASE_URL } = useUrl();
  // store
  const { setBukuKas, dtBukuKas } = useBukuKas();
  // state
  const [bulan, setBulan] = useState(null);
  const [tahun, setTahun] = useState(null);
  // effect
  useEffect(() => {
    if (tahun && bulan) {
      setBukuKas({ bulan, tahun });
    }
  }, [bulan, tahun]);

  const showTable = () => {
    if (tahun && bulan) {
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
        `${BASE_URL}/excel/transaksi?bulan=${bulan}&tahun=${tahun}`,
        "_blank"
      )
      .focus();
    console.log("cetak");
  };

  const btnCetak = () => {
    if (tahun && bulan) {
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
      {/* pilih bulan dan tahun */}
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
          onChange={(e) => setBulan(e.target.value)}
          defaultValue=""
          className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
        >
          <option value="">Pilih Bulan</option>
          <option value="01">Januari</option>
          <option value="02">Februari</option>
          <option value="03">Maret</option>
          <option value="04">April</option>
          <option value="05">Mei</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">Agustus</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
        {btnCetak()}
      </div>
      {/* show table */}
      <div>{showTable()}</div>
    </div>
  );
};

export default BukuKas;
