/** @format */
import React, { useState } from "react";
import SelectItem from "../../../components/select/SelectItem";

const FormPemasukan = () => {
  // store
  // state
  const [kode, setKode] = useState("");
  const [pilihItem, setPilihItem] = useState("");

  const handleSimpan = () => {};
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
      <div className="w-full">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="px-6 py-3 flex-auto max-h-96">
            <form onSubmit={handleSimpan}>
              <div className="grid grid-cols-12 gap-4">
                {/* Item */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="item_id">Unit</label>
                  <SelectItem
                    setPilihItem={setPilihItem}
                    pilihItem={pilihItem}
                  />
                </div>
                {/* kode */}
                <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                  <label htmlFor="kode">Uraian</label>
                  <input
                    value={kode}
                    onChange={(e) => setKode(e.target.value)}
                    id="kode"
                    type="text"
                    className="px-3 py-2 text-slate-600 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
              </div>
            </form>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-biru text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleSimpan}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPemasukan;
