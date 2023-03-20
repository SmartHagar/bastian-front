/** @format */

import React, { useEffect, useState } from "react";
import useBukuKas from "../../../../store/api/buku-kas";
import Table from "./Table";

import useUrl from "../../../../services/base_url";
import moment from "moment";

const Perhari = () => {
  const { BASE_URL } = useUrl();
  // store
  const { setBukuKasPerhari, dtBukuKas } = useBukuKas();
  // state
  const [hari, setHari] = useState(null);
  const [bulan, setBulan] = useState(null);
  const [tahun, setTahun] = useState(null);
  const [perhari, setPerhari] = useState(null);

  // effect
  useEffect(() => {
    if (hari) {
      const perhari = moment(hari).format("DD");
      const bulan = moment(hari).format("MM");
      const tahun = moment(hari).format("YYYY");
      setBukuKasPerhari({ bulan, tahun, perhari, kantin: true });
      setPerhari(perhari);
      setBulan(bulan);
      setTahun(tahun);
    }
  }, [hari]);

  const showTable = () => {
    if (hari) {
      return (
        <div>
          <Table dataKas={dtBukuKas} perhari={true} />
        </div>
      );
    }
  };

  const handleCetak = () => {
    window
      .open(
        `${BASE_URL}/export/pdf/bulan?tanggal=${perhari}&bulan=${bulan}&tahun=${tahun}`,
        "_blank"
      )
      .focus();
    console.log("cetak");
  };

  const btnCetak = () => {
    if (dtBukuKas?.data?.length > 0) {
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
      <div className="flex gap-2 mb-4 items-center justify-center">
        <input
          type="date"
          className="border-biru border p-2 rounded-lg"
          onChange={(e) => setHari(e.target.value)}
        />
        {btnCetak()}
      </div>
      {/* show table */}
      <div className="mb-5">{showTable()}</div>
    </div>
  );
};

export default Perhari;
