/** @format */

import React from "react";
import getProperty from "../../services/getProperty";

const Table = ({
  headers,
  dataTable,
  tableBodies,
  setEdit,
  setDelete,
  setLihat,
}) => {
  const showNo = (index) => {
    let noUrut = index;
    return noUrut + 1;
  };
  return (
    <div>
      <div className="overflow-x-auto relative rounded-lg shadow-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="py-5 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* loop tr */}
            {dataTable &&
              dataTable.map((row, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {showNo(index)}
                  </td>
                  {/* loop td */}
                  {tableBodies.map((column, index) => {
                    return (
                      <td
                        key={index}
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {getProperty(row, column)}
                      </td>
                    );
                  })}
                  {/* aksi */}
                  <td>
                    <div className="mt-2 flex gap-2">
                      {setLihat && (
                        <button
                          onClick={() => setLihat(row)}
                          type="button"
                          className="py-2 px-3 text-xs text-center text-biru hover:text-black border border-biru hover:bg-biru focus:ring-1 rounded-lg"
                        >
                          Kwitansi
                        </button>
                      )}

                      <button
                        onClick={() => setEdit(row)}
                        type="button"
                        className="py-2 px-3 text-xs text-center hover:text-black border border-kuning hover:bg-kuning focus:ring-1 rounded-lg"
                      >
                        Ubah
                      </button>

                      <button
                        onClick={() => setDelete(row.id)}
                        type="button"
                        className="py-2 px-3 text-xs text-center hover:text-white border border-merah hover:bg-merah focus:ring-1 rounded-lg"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
