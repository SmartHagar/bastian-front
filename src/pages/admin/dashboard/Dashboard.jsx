/** @format */

import React, { useEffect, useState } from "react";
import SkletonCard from "../../../components/loading/SkletonCard";
import showRupiah from "../../../services/rupiah";
import useSaldo from "../../../store/api/saldo";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setSaldo, dtSaldo } = useSaldo();
  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      await setSaldo();
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-[30rem] h-4/5 flex items-center px-8 py-4 bg-white rounded-lg shadow-sm shadow-biru">
        <div className="w-full">
          {isLoading ? (
            <SkletonCard />
          ) : (
            <>
              <div className="mb-14">
                <h1 className="text-center text-biru text-2xl font-bold">
                  Saldo Terakhir
                </h1>
                <p className="text-merah text-center font-Charmonman text-xl">
                  {dtSaldo.saldo && showRupiah(dtSaldo.saldo)}
                </p>
              </div>
              <div className="my-6">
                <h2 className="text-biru">Pemasukan Terakhir</h2>
                <div className="border p-2 rounded-lg">
                  <p className="text-gray-600">
                    {dtSaldo.pemasukan_terakhir &&
                      dtSaldo.pemasukan_terakhir.item.nama}
                  </p>
                  <p className="text-merah font-Charmonman">
                    {dtSaldo.pengeluaran_terakhir &&
                      showRupiah(dtSaldo.pemasukan_terakhir.jumlah)}
                  </p>
                </div>
              </div>
              <div className="my-6">
                <h2 className="text-biru">Pengeluaran Terakhir</h2>
                <div className="border p-2 rounded-lg">
                  <p className="text-gray-600">
                    {dtSaldo.pengeluaran_terakhir &&
                      dtSaldo.pengeluaran_terakhir.item.nama}
                  </p>
                  <p className="text-merah font-Charmonman">
                    {dtSaldo.pengeluaran_terakhir &&
                      showRupiah(dtSaldo.pengeluaran_terakhir.jumlah)}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
