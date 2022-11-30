/** @format */

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import SkletonTable from "../../../components/loading/SkletonTable";
import Paginate from "../../../components/paginate/Paginate";
import Search from "../../../components/search/Search";
import Table from "../../../components/table/Table";
import toastSuccess from "../../../services/toast-success";
import useItem from "../../../store/crud/item";
import Form from "./Form";

const Unit = () => {
  // store
  const { setItem, dtItem, responses, removeData } = useItem();
  // state
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataEdit, setDataEdit] = useState({});
  const [cekEdit, setCekEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect
  useEffect(() => {
    const fetch = async () => {
      await setItem({ search }, page);
      setIsLoading(false);
    };
    fetch();
  }, [setItem, search, page]);
  // table
  const headers = ["No", "Nama Unit", "Aksi"];
  const tableBodies = [`nama`];

  const handleEdit = (item) => {
    setCekEdit(true);
    setDataEdit(item);
    setShowModal(true);
  };

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

  return (
    <div>
      {/* toaster */}
      <Toaster />
      {/* form */}
      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        judul="Unit"
        dataEdit={dataEdit}
        cekEdit={cekEdit}
        setPesan={toastSuccess}
      />
      {/* header */}
      <div className="flex justify-between mb-2">
        <p>Silahkan menambah, merubah dan menghapus data distrik</p>
        <button
          className="bg-biru text-white active:bg-biru font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            setShowModal(true);
            setCekEdit(false);
          }}
        >
          Tambah Data
        </button>
      </div>
      {isLoading ? (
        <SkletonTable />
      ) : (
        <>
          {/* set tampilan */}
          <div className="mb-3 flex flex-wrap items-start gap-3 justify-between">
            {/* search */}
            <div className="shrink w-full">
              <Search setSearch={setSearch} />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-wrap justify-between gap-5">
            {/* table */}
            <div className="w-full">
              <Table
                headers={headers}
                dataTable={dtItem}
                tableBodies={tableBodies}
                setEdit={handleEdit}
                setDelete={handleDelete}
                page={page}
              />
            </div>
            {/* paginate */}
            <div className="mb-10 flex justify-center w-full">
              <Paginate pageData={responses} setPage={setPage} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Unit;
