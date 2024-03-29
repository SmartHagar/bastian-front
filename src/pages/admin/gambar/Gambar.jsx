/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useKwitansi from "../../../store/crud/kwitansi";
import { Toaster } from "react-hot-toast";
import toastSuccess from "../../../services/toast-success";
import Form from "./Form";
import SkletonImg from "../../../components/loading/SkletonImg";
import Swal from "sweetalert2";
import useUrl from "../../../services/base_url";
import axios from "axios";

const Gambar = () => {
  const { BASE_URL } = useUrl();

  // params
  const { transaksi_id } = useParams();
  // storage
  const { setKwitansi, dtKwitansi, removeData } = useKwitansi();
  //  state
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // effect
  useEffect(() => {
    const fetch = async () => {
      await setKwitansi(transaksi_id);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin menghapus data ini?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF2C14",
      cancelButtonColor: "#A214FF",
      confirmButtonText: "Yakin",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { status } = await removeData(id);
        if (status !== "error") {
          Swal.fire("Deleted!", "Data berhasil dihapus.", "success");
        }
      }
    });
  };

  const handleCetak = (transaksi_id) => {
    window
      .open(
        `${BASE_URL}/export/pdf/gambar-kwitansi?transaksi_id=${transaksi_id}`,
        "_blank"
      )
      .focus();
    console.log("cetak");
  };
  const handleCetakOne = (row) => {
    let printWindow = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    printWindow.document.write(
      "<html><head><title>Gambar</title><style>body {margin: 0;}</style></head><body><img src='" +
        row.gambar +
        "' /></body></html>"
    );

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const showImage = () => {
    if (dtKwitansi.length > 0) {
      return (
        <div className="grid justify-items-stretch grid-cols-2 gap-2 w-full">
          {dtKwitansi.map((row, index) => (
            <div key={index} className="w-full justify-self-center">
              <div href="#" className="block">
                <img
                  alt="Signage"
                  src={row.gambar}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
                />
              </div>
              <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <button
                  onClick={() => handleCetakOne(row)}
                  type="button"
                  className="py-2 px-3 text-xs text-center hover:text-white border border-biru hover:bg-biru focus:ring-1 rounded-lg"
                >
                  Cetak
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  type="button"
                  className="py-2 px-3 text-xs text-center hover:text-white border border-merah hover:bg-merah focus:ring-1 rounded-lg"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>Tidak Ada Data</div>;
    }
  };

  return (
    <div>
      {/* toaster */}
      <Toaster />
      {/* form */}
      {showModal && (
        <Form
          showModal={showModal}
          setShowModal={setShowModal}
          judul="Gambar"
          setPesan={toastSuccess}
          transaksi_id={transaksi_id}
        />
      )}
      {/* header */}
      <div className="flex justify-between mb-2">
        <p>Silahkan menambah dan menghapus data gambar kwitansi</p>
        <div>
          <button
            className="bg-biru text-white active:bg-biru font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Tambah Data
          </button>
          {dtKwitansi.length > 0 && (
            <button
              className="bg-merah text-white active:bg-biru font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                handleCetak(dtKwitansi[0].transaksi_id);
              }}
            >
              Cetak
            </button>
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="w-1/3 flex gap-2">
          <SkletonImg />
          <SkletonImg />
          <SkletonImg />
        </div>
      ) : (
        <>{showImage()}</>
      )}
    </div>
  );
};

export default Gambar;
