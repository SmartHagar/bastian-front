/** @format */

import React, { useEffect, useState } from "react";
import Spinner from "../../../components/loading/Spinner";
import useKwitansi from "../../../store/crud/kwitansi";

const Form = ({
  showModal,
  setShowModal,
  judul,
  dataEdit,
  cekEdit,
  setPesan,
  transaksi_id,
}) => {
  // store
  const { addData, updateData } = useKwitansi();
  // state
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // reset
  const resetForm = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    resetForm;
    return () => {
      resetForm();
    };
  }, []);

  // ketika tombol simpan ditekan
  const handleSimpan = async (e) => {
    const items = {
      gambar: selectedFile,
      transaksi_id,
    };
    e.preventDefault();
    setIsLoading(true);
    let cek;
    if (cekEdit) {
      cek = await updateData(dataEdit.id, items);
      setShowModal(false);
      console.log(cek);
      setPesan(cek.data);
    } else {
      cek = await addData(items);
      console.log(cek);
      setPesan(cek.data);
      setIsLoading(false);
    }
    if (cek.status === "berhasil") {
      resetForm();
    }
  };

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    // console.log(file, typeof file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPreviewImage(reader.result);
    };
    setSelectedFile(file);
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto md:w-2/4 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                <div className="relative px-6 py-3 flex-auto max-h-96">
                  <form onSubmit={handleSimpan}>
                    <div className="w-full font-coustard-regular">
                      <label className="text-sm" id="gambar">
                        Pilh Gambar
                      </label>
                      <input
                        id="gambar"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                        onChange={onSelectFile}
                      />
                      {previewImage && (
                        <div>
                          <img
                            src={previewImage}
                            alt="selected"
                            className="h-44 mt-2 rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <>
                      <button
                        className="text-ungu background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Tutup
                      </button>
                      <button
                        className="bg-biru text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSimpan}
                      >
                        Simpan
                      </button>
                    </>
                  )}
                </div>
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
