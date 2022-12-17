/** @format */

import React, { useEffect, useState } from "react";
import DatePickComp from "../../../components/date/DatePickComp";
import SelectItem from "../../../components/select/SelectItem";
import useTransaksi from "../../../store/crud/transaksi";
import moment from "moment";
import Rupiah from "../../../components/mask/Rupiah";
import kodefikasi from "../../../services/kodefikasi";
import useTransaksiAPI from "../../../store/api/transaksi";
import useItem from "../../../store/crud/item";

const Form = ({
  showModal,
  setShowModal,
  judul,
  dataEdit,
  cekEdit,
  setPesan,
  jenis,
}) => {
  // store
  const { addData, updateData } = useTransaksi();
  const { setTransaksi, dtTransaksi } = useTransaksiAPI();
  const { setItem } = useItem();
  // state
  const [ket, setKet] = useState("");
  const [pilihItem, setPilihItem] = useState("");
  const [date, setDate] = useState(new Date());
  const [jumlah, setJumlah] = useState("");
  const [kode, setKode] = useState("");
  const [noUrut, setNoUrut] = useState("");
  //   reset state
  const reset = () => {
    setKet("");
    setJumlah("");
    setKode("");
    setPilihItem("");
    setDate(new Date());
    setNoUrut("");
  };

  // effect
  useEffect(() => {
    if (cekEdit) {
      return (
        dataEdit.ket && setKet(dataEdit.ket),
        dataEdit.jumlah && setJumlah(`Rp. ${dataEdit.jumlah}`),
        dataEdit.tgl_transaksi && setDate(new Date(dataEdit.tgl_transaksi)),
        dataEdit.kode && setKode(dataEdit.kode),
        dataEdit.no_urut && setNoUrut(dataEdit.no_urut)
      );
    }
    setTransaksi();
    reset();
  }, [cekEdit, dataEdit]);

  // kode kantin
  const cekKode = async () => {
    // kode baru
    let kode = "";
    const { data } = await setItem();
    if (data.length > 0) {
      const filter = data.filter((row) =>
        row.nama.toLowerCase().includes("kantin")
      );

      if (filter.length > 0) {
        setPilihItem(filter[0].id);
        kode = `${moment(date).format("DD/MM/YYYY")}-${filter[0].kode}`;
        const kodefk = kodefikasi({
          old_prefix: dtTransaksi,
          new_prefix: kode,
        });
        setKode(kode);
        setNoUrut(kodefk);
      }
    }
    // mengambil kode lama
    // membuat kodefikasi
  };

  useEffect(() => {
    if (!cekEdit) {
      cekKode();
    }

    return () => {};
  }, [date, pilihItem]);

  // ketika tombol simpan ditekan
  const handleSimpan = async (e) => {
    const tgl_transaksi = moment(date).format("YYYY-MM-DD");
    const items = {
      item_id: pilihItem,
      tgl_transaksi,
      ket,
      jenis,
      jumlah: jumlah.replace(/\D/g, ""),
      kode,
      no_urut: noUrut,
    };
    e.preventDefault();
    let cek;
    if (cekEdit) {
      cek = await updateData(dataEdit.id, items);
      setShowModal(false);
      setPesan(cek.data);
    } else {
      cek = await addData(items);
      setPesan(cek.data);
    }
    if (cek.status === "berhasil") {
      reset();
      setTransaksi();
    }
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-auto my-6 mx-auto md:w-2/4">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t shadow-md">
                  <h3 className="text-xl font-semibold text-center w-full">
                    Form {judul}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSimpan}>
                  <div className=" px-6 py-3 flex-auto">
                    {/* Kode */}
                    <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="kode">Kode Transaksi</label>
                      <input
                        value={`${kode}-${noUrut}`}
                        onChange={(e) => setKode(e.target.value)}
                        id="kode"
                        type="text"
                        readOnly
                        className="px-3 py-2 text-slate-600  bg-gray-100 rounded text-sm border shadow outline-none w-full"
                      />
                    </div>
                    {/* Ket */}
                    <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="ket">Uraian</label>
                      <input
                        value={ket}
                        onChange={(e) => setKet(e.target.value)}
                        id="ket"
                        type="text"
                        className="px-3 py-2 text-slate-600  bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    {/* Tgl */}
                    <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="ket">Tanggal</label>
                      <DatePickComp
                        selected={date}
                        onChange={setDate}
                        dateFormat="dd MMMM yyyy"
                        readOnly={cekEdit ? true : false}
                      />
                    </div>
                    {/* Jumlah */}
                    <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="jumlah">Jumlah</label>
                      <Rupiah setJumlah={setJumlah} jumlah={jumlah} />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-ungu background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Tutup
                    </button>
                    <button
                      className="bg-biru text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={handleSimpan}
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"></div>
        </>
      ) : null}
    </div>
  );
};

export default Form;
