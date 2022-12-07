/** @format */

import React, { useEffect, useState } from "react";
import BukuKasPerBulan from "../../../components/grafik/BukuKasPerBulan";
import useBukuKas from "../../../store/api/buku-kas";

const Dashboard = () => {
  return (
    <div>
      <BukuKasPerBulan />
    </div>
  );
};

export default Dashboard;
