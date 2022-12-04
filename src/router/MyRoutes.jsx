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
import GambarAdmin from "../pages/admin/gambar/Gambar";
import KwitansiAdmin from "../pages/admin/kwitansi/Kwitansi";
import BukuKasAdmin from "../pages/admin/buku-kas/BukuKas";

// auth pages
import CekLogin from "../pages/auth/CekLogin";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// user pages
import IndexUser from "../pages/users/IndexUser";
import DashboardUser from "../pages/users/dashboard/Dashboard";
import AlumniUser from "../pages/users/alumni/Alumni";
import AboutUser from "../pages/users/about/About";

// ketua pages
import IndexKetua from "../pages/ketua/IndexKetua";
import DashboardKetua from "../pages/ketua/dashboard/Dashboard";

// error
import NotFound from "../pages/errors/NotFound";

const MyRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate replace to="/admin/dashboard" />} />
        {/* user pages */}
        <Route path="user" element={<IndexUser />}>
          <Route path="dashboard" element={<DashboardUser />} />
          <Route path="about" element={<AboutUser />} />
          <Route path="alumni/:id" element={<AlumniUser />} />
        </Route>
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
          <Route path="kwitansi" element={<KwitansiAdmin />} />
          <Route path="buku-kas" element={<BukuKasAdmin />} />
        </Route>
        {/* ketua pages */}
        <Route path="ketua" element={<IndexKetua />}>
          <Route path="dashboard" element={<DashboardKetua />} />
          <Route path="laporan"></Route>
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
