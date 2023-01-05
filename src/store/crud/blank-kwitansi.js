/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../services/base_url";
import useKwitansiPDF from "../laporan/pdf/kwitansi";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { crud } = useUrl();
// const getToken = JSON.parse(localStorage.getItem("token"));

const useBlankKwitansi = create(
  devtools((set, get) => ({
    dtBlankKwitansi: [],
    responses: [],
    setBlankKwitansi: async () => {
      try {
        const response = await crud({
          method: "get",
          url: `/blank-kwitansi`,
        });
        set((state) => ({ ...state, responses: response.data }));
        set((state) => ({ ...state, dtBlankKwitansi: response.data }));
        // coba
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    addData: async (items) => {
      try {
        const res = await crud({
          method: "post",
          url: `/blank-kwitansi`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: items,
        });

        set((state) => ({
          dtBlankKwitansi: [res.data, ...state.dtBlankKwitansi],
        }));
        const { data } = res.data;
        // panggil cetak kwitansi
        if (data.jenis === "pemasukan") {
          useKwitansiPDF.getState().cetakKwitansiPemasukan(data.id);
        } else {
          useKwitansiPDF.getState().cetakKwitansiPengeluaran(data.id);
        }
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const res = await crud({
          method: "delete",
          url: `/blank-kwitansi/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({
          dtBlankKwitansi: state.dtBlankKwitansi.filter(
            (item) => item.id !== id
          ),
        }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const response = await crud({
          method: "put",
          url: `/blank-kwitansi/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: row,
        });
        set((state) => ({
          dtBlankKwitansi: state.dtBlankKwitansi.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                ...response.data.data,
              };
            } else {
              return item;
            }
          }),
        }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useBlankKwitansi;
