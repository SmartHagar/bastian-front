/** @format */

import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
// pages admin
import DashboardAdmin from "../pages/admin/dashboard/Dashboard";
import UnitAdmin from "../pages/admin/unit/Unit";
import IndexAdmin from "../pages/admin/IndexAdmin";
import TransaksiAdmin from "../pages/admin/transaksi/Transaksi";
import TransaksiKantinAdmin from "../pages/admin/kantin/Kantin";
import GambarAdmin from "../pages/admin/gambar/Gambar";
import KwitansiAdmin from "../pages/admin/kwitansi/Kwitansi";
import BukuKasPerbulanAdmin from "../pages/admin/buku-kas/Perbulan";
import BukuKasPersemesterAdmin from "../pages/admin/buku-kas/Persemester";
import BukuKasPertahunAdmin from "../pages/admin/buku-kas/Pertahun";
import AkunAdmin from "../pages/admin/akun/Akun";

// auth pages
import CekLogin from "../pages/auth/CekLogin";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// ketua pages
import IndexKetua from "../pages/ketua/IndexKetua";
import DashboardKetua from "../pages/ketua/dashboard/Dashboard";
import BukuKasKetua from "../pages/ketua/laporan/BukuKas";
import AkunKetua from "../pages/ketua/akun/Akun";

// error
import NotFound from "../pages/errors/NotFound";

const MyRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
        {/* auth pages */}
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cek-login" element={<CekLogin />} />
        </Route>
        {/* admin pages */}
        <Route path="admin" element={<IndexAdmin />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="unit" element={<UnitAdmin />} />
          <Route path="transaksi">
            <Route path=":jenis" element={<TransaksiAdmin />} />
            <Route path=":jenis/:transaksi_id" element={<GambarAdmin />} />
          </Route>
          <Route path="kantin">
            <Route path=":jenis" element={<TransaksiKantinAdmin />} />
            <Route path=":jenis/:transaksi_id" element={<GambarAdmin />} />
          </Route>
          <Route path="kwitansi" element={<KwitansiAdmin />} />
          <Route path="buku-kas">
            <Route path="perbulan" element={<BukuKasPerbulanAdmin />} />
            <Route path="persemester" element={<BukuKasPersemesterAdmin />} />
            <Route path="pertahun" element={<BukuKasPertahunAdmin />} />
          </Route>
          <Route path="akun" element={<AkunAdmin />} />
        </Route>
        {/* ketua pages */}
        <Route path="ketua" element={<IndexKetua />}>
          <Route path="dashboard" element={<DashboardKetua />} />
          <Route path="akun" element={<AkunKetua />} />
          <Route path="laporan">
            <Route path="buku-kas" element={<BukuKasKetua />} />
          </Route>
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
