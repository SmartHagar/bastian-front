/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { exports } = useUrl();

// const getToken = JSON.parse(localStorage.getItem("token"));

const useKwitansiPDF = create(
  devtools((set, get) => ({
    cetakKwitansiPengeluaran: async (id) => {
      // return;
      //
      try {
        const res = await exports({
          method: "post",
          url: `/pdf/pengeluaran/${id}`,
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        // nama file
        link.setAttribute("download", "Kwitansi Pengeluaran.pdf");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    cetakKwitansiPemasukan: async (id) => {
      // return;
      //
      try {
        const res = await exports({
          method: "post",
          url: `/pdf/pemasukan/${id}`,
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        // nama file
        link.setAttribute("download", "Kwitansi Pemasukan.pdf");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useKwitansiPDF;
