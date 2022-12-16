/** @format */

import moment from "moment";
import React, { useState } from "react";
import DatePickComp from "../../../components/date/DatePickComp";
import SelectItem from "../../../components/select/SelectItem";
import useKwitansiPDF from "../../../store/laporan/pdf/kwitansi";
import angkaTerbilang from "@develoka/angka-terbilang-js";
import Rupiah from "../../../components/mask/Rupiah";

const FormPemasukan = () => {
  // store
  const { cetakKwitansiPemasukan } = useKwitansiPDF();
  // state
  const [kode, setKode] = useState("");
  const [pilihItem, setPilihItem] = useState("");
  const [penerima, setPenerima] = useState("");
  const [uang_terbilang, setUang_terbilang] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");

  const handleCetak = () => {
    const tgl_transaksi = moment(tanggal).format("DD/MM/yyyy");
    const items = {
      kode,
      unit: pilihItem && pilihItem.label,
      penerima,
      uang_terbilang,
      jumlah: jumlah.replace(/\D/g, ""),
      tanggal: tanggal && tgl_transaksi,
    };
    cetakKwitansiPemasukan(items);
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
      <div className="w-full">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="px-6 py-3 flex-auto max-h-96">
            <form onSubmit={handleCetak}>
              <div className="grid grid-cols-12 gap-4">
                {/* Item */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="item_id">Unit</label>
                  <SelectItem
                    setPilihItem={setPilihItem}
                    pilihItem={pilihItem}
                  />
                </div>
                {/* kode Pengeluaran*/}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="kode">Kode Pemasukan</label>
                  <input
                    value={kode}
                    onChange={(e) => setKode(e.target.value)}
                    id="kode"
                    type="text"
                    className="px-3 py-2 text-slate-600 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                {/* Penerima */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="penerima">Penerima</label>
                  <input
                    value={penerima}
                    onChange={(e) => setPenerima(e.target.value)}
                    id="penerima"
                    type="text"
                    className="px-3 py-2 text-slate-600 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                {/* Uang sejumlah */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="jumlah">Jumlah Uang</label>
                  <Rupiah setJumlah={setJumlah} jumlah={jumlah} />
                </div>
                {/* Uang sejumlah (Terbilang)? */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="uang_terbilang">
                    Uang sejumlah (Terbilang)?
                  </label>
                  <input
                    value={
                      jumlah
                        ? angkaTerbilang(jumlah.replace(/\D/g, "")) + " rupiah"
                        : ""
                    }
                    onChange={(e) => setUang_terbilang(e.target.value)}
                    id="uang_terbilang"
                    type="text"
                    className="px-3 py-2 text-slate-600 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                {/* Tanggal */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="tanggal">Tanggal</label>
                  <DatePickComp
                    selected={tanggal}
                    onChange={setTanggal}
                    dateFormat="dd MMMM yyyy"
                  />
                </div>
              </div>
            </form>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-biru text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCetak}
            >
              Cetak Kwitansi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPemasukan;
