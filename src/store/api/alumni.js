/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

// const getToken = JSON.parse(localStorage.getItem("token"));

const useAlumniAPI = create(
  devtools((set, get) => ({
    dtAlumni: [],
    setAlumni: async (
      cari = { search: "", prodi_id: "" },
      page = "",
      limit = ""
    ) => {
      try {
        const res = await api({
          method: "get",
          url: `/alumni`,
          params: {
            limit,
            search: cari.search,
            prodi_id: cari.prodi_id,
            page,
          },
        });
        set((state) => ({ ...state, dtAlumni: res.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setChartAlumni: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/alumni/chart`,
        });
        set((state) => ({ ...state, dtAlumni: res.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useAlumniAPI;
