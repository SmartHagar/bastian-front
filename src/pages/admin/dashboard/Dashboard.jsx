/** @format */

import React, { useEffect, useState } from "react";
import SkletonCard from "../../../components/loading/SkletonCard";
import showRupiah from "../../../services/rupiah";
import useSaldo from "../../../store/api/saldo";

import bg3 from "../../../assets/gambar/bg-3.jpeg";
import useSaldoKantin from "../../../store/api/saldo-kantin";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setSaldo, dtSaldo, pemasukanTerakhir, pengeluaranTerakhir } =
    useSaldo();
  const {
    setSaldoKantin,
    dtSaldoKantin,
    pemasukanTerakhirKantin,
    pengeluaranTerakhirKantin,
  } = useSaldoKantin();

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      await setSaldo();
      await setSaldoKantin();
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <div
      className="min-h-[92vh] -mt-6 -mx-4 flex"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      <div className="flex justify-center items-center min-h-full w-full bg-white/50">
        <div className="w-[30rem] h-4/5 flex items-center px-8 py-4 bg-white/95 rounded-lg shadow-sm shadow-biru">
          <div className="w-full">
            {isLoading ? (
              <SkletonCard />
            ) : (
              <div>
                <h1 className="text-center text-xl text-biru">FST</h1>
                <div className="mb-14">
                  <h1 className="text-center text-biru text-2xl font-bold">
                    Saldo Terakhir
                  </h1>
                  <p className="text-merah text-center font-Charmonman text-2xl">
                    {dtSaldo.saldo && showRupiah(dtSaldo.saldo)}
                  </p>
                </div>
                <div className="my-6">
                  <h2 className="text-biru text-xl">Pemasukan Terakhir</h2>
                  <div className="border p-2 rounded-lg">
                    <p className="text-gray-600 text-xl">
                      {pemasukanTerakhir?.item?.nama}
                    </p>
                    <p className="text-merah font-Charmonman text-xl">
                      {showRupiah(parseInt(pemasukanTerakhir?.jumlah))}
                    </p>
                  </div>
                </div>
                <div className="my-6">
                  <h2 className="text-biru text-xl">Pengeluaran Terakhir</h2>
                  <div className="border p-2 rounded-lg">
                    <p className="text-gray-600 text-xl">
                      {pengeluaranTerakhir?.item?.nama}
                    </p>
                    <p className="text-merah font-Charmonman text-xl">
                      {showRupiah(parseInt(pengeluaranTerakhir?.jumlah))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* saldo kantin */}
      <div className="flex justify-center items-center min-h-full w-full bg-white/50">
        <div className="w-[30rem] h-4/5 flex items-center px-8 py-4 bg-white/95 rounded-lg shadow-sm shadow-biru">
          <div className="w-full">
            {isLoading ? (
              <SkletonCard />
            ) : (
              <div>
                <h1 className="text-center text-xl text-biru">Kantin</h1>
                <div className="mb-14">
                  <h1 className="text-center text-biru text-2xl font-bold">
                    Saldo Terakhir
                  </h1>
                  <p className="text-merah text-center font-Charmonman text-2xl">
                    {dtSaldoKantin.saldo && showRupiah(dtSaldoKantin.saldo)}
                  </p>
                </div>
                <div className="my-6">
                  <h2 className="text-biru text-xl">Pemasukan Terakhir</h2>
                  <div className="border p-2 rounded-lg">
                    <p className="text-gray-600 text-xl">
                      {pemasukanTerakhirKantin?.ket}
                    </p>
                    <p className="text-merah font-Charmonman text-xl">
                      {showRupiah(parseInt(pemasukanTerakhirKantin?.jumlah))}
                    </p>
                  </div>
                </div>
                <div className="my-6">
                  <h2 className="text-biru text-xl">Pengeluaran Terakhir</h2>
                  <div className="border p-2 rounded-lg">
                    <p className="text-gray-600 text-xl">
                      {pengeluaranTerakhirKantin?.ket}
                    </p>
                    <p className="text-merah font-Charmonman text-xl">
                      {showRupiah(parseInt(pengeluaranTerakhirKantin?.jumlah))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
