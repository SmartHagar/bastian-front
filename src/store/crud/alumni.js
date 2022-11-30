/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { crud } = useUrl();

// const getToken = JSON.parse(localStorage.getItem("token"));

const useAlumni = create(
  devtools((set, get) => ({
    dtAlumni: [],
    responses: [],
    setAlumni: async (search = "", page = "", limit = "") => {
      try {
        const response = await crud({
          method: "get",
          url: `/alumni`,
          // headers: { Authorization: `Bearer ${getToken}` },
          params: {
            limit,
            search,
            page,
          },
        });
        set((state) => ({ ...state, responses: response.data }));
        set((state) => ({ ...state, dtAlumni: response.data.data }));
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
      const formData = new FormData();
      formData.append("distrik_id", items.distrik_id);
      formData.append("prodi_id", items.prodi_id);
      formData.append("nama", items.nama);
      formData.append("tempat", items.tempat);
      formData.append("tgl_lahir", items.tgl_lahir);
      formData.append("no_hp", items.no_hp);
      formData.append("email", items.email);
      formData.append("jenkel", items.jenkel);
      formData.append("alamat", items.alamat);
      formData.append("thn_masuk", items.thn_masuk);
      formData.append("thn_lulus", items.thn_lulus);
      formData.append("status_nikah", items.status_nikah);
      formData.append("status_kerja", items.status_kerja);
      formData.append("nm_instansi", items.nm_instansi);
      formData.append("jabatan", items.jabatan);
      formData.append("foto", items.foto);
      // const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const res = await crud({
          method: "post",
          url: `/alumni`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: formData,
        });
        set((state) => ({
          dtAlumni: [res.data.data, ...state.dtAlumni],
        }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          data: error.response.data,
          status: `error`,
        };
      }
    },
    removeData: async (id) => {
      try {
        const res = await crud({
          method: "delete",
          url: `/alumni/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({
          dtAlumni: state.dtAlumni.filter((item) => item.id !== id),
        }));
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
    updateData: async (id, items) => {
      const formData = new FormData();
      formData.append("distrik_id", items.distrik_id);
      formData.append("prodi_id", items.prodi_id);
      formData.append("nama", items.nama);
      formData.append("tempat", items.tempat);
      formData.append("tgl_lahir", items.tgl_lahir);
      formData.append("no_hp", items.no_hp);
      formData.append("email", items.email);
      formData.append("jenkel", items.jenkel);
      formData.append("alamat", items.alamat);
      formData.append("thn_masuk", items.thn_masuk);
      formData.append("thn_lulus", items.thn_lulus);
      formData.append("status_nikah", items.status_nikah);
      formData.append("status_kerja", items.status_kerja);
      formData.append("nm_instansi", items.nm_instansi);
      formData.append("jabatan", items.jabatan);
      formData.append("foto", items.foto);
      // const getToken = JSON.parse(localStorage.getItem("token"));
      try {
        const response = await crud({
          method: "post",
          url: `/alumni/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((state) => ({
          dtAlumni: state.dtAlumni.map((item) => {
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
          error: error.response.data,
        };
      }
    },
  }))
);

export default useAlumni;
