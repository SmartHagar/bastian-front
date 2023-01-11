/**
 * @format
 * @htmlFormat
 */

import React from "react";
import showRupiah from "../../../../services/rupiah";

const Table = ({ dataKas }) => {
  let sisaSaldo;
  // hitung sisa saldo
  const hitungSisa = () => {
    if (dataKas) {
      const { pemasukan_sebelumnya, pengeluaran_sebelumnya } = dataKas;
      //   hitung data pemasukan sebelumnya
      const pemasukanSebelumnya =
        pemasukan_sebelumnya &&
        pemasukan_sebelumnya.reduce((acc, object) => {
          return acc + parseInt(object.jmlh);
        }, 0);
      // hitung data pengeluaran sebelumnya
      const pengeluaranSebelumnya =
        pengeluaran_sebelumnya &&
        pengeluaran_sebelumnya.reduce((acc, object) => {
          return acc + parseInt(object.jmlh);
        }, 0);
      // sisa saldo
      sisaSaldo = pemasukanSebelumnya - pengeluaranSebelumnya;

      return <>{showRupiah(sisaSaldo)}</>;
    }
  };

  const showData = () => {
    console.log(sisaSaldo);
    if (dataKas) {
      const { data } = dataKas;
      let saldo = sisaSaldo;
      let totalPemasukan = 0;
      let totalPengeluaran = 0;
      return (
        <>
          {data &&
            data.map((row, index) => {
              const { item, ket, tgl_transaksi, jenis, jumlah } = row;
              let pemasukan = "";
              let pengeluaran = "";

              if (jenis === "Pemasukan") {
                pemasukan = jumlah;
                totalPemasukan += pemasukan;
                saldo += pemasukan;
              }
              if (jenis === "Pengeluaran") {
                pengeluaran = jumlah;
                totalPengeluaran += pengeluaran;
                saldo -= pengeluaran;
              }

              return (
                <tr className="divide-x divide-gray-200" key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.nama}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {ket}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {tgl_transaksi}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {pemasukan && showRupiah(pemasukan)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {pengeluaran && showRupiah(pengeluaran)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {showRupiah(saldo)}
                  </td>
                </tr>
              );
            })}
          <tr className="divide-x divide-gray-200">
            <td
              colSpan={4}
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
            >
              Total
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {showRupiah(totalPemasukan)}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {showRupiah(totalPengeluaran)}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {showRupiah(totalPemasukan - totalPengeluaran)}
            </td>
          </tr>
        </>
      );
    }
  };

  return (
    <div>
      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-biru">
            <tr className="divide-x divide-gray-200">
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                No
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Unit
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Uraian
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Tgl. Transaksi
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Pemasukan
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Pengeluaran
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white">
                Saldo
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr className="divide-x divide-gray-200">
              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700 "
                colSpan={4}
              >
                Sisa Saldo
              </td>

              <td
                className="whitespace-nowrap px-4 py-2 text-gray-700 text-right"
                colSpan={3}
              >
                {hitungSisa()}
              </td>
            </tr>
            {showData()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
