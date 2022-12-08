/** @format */

import React, { useEffect, useState } from "react";
import BukuKasPerBulan from "../../../components/grafik/BukuKasPerBulan";
import BukuKasPerTahun from "../../../components/grafik/BukuKasPerTahun";

const Dashboard = () => {
  return (
    <div>
      <div className="min-h-[91vh]">
        <BukuKasPerBulan />
      </div>
      <div className="min-h-[91vh]">
        <BukuKasPerTahun />
      </div>
    </div>
  );
};

export default Dashboard;
