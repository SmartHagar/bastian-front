/** @format */

import React, { useEffect, useState } from "react";
import AlumniCard from "../../../components/card/AlumniCard";
import useAlumniAPI from "../../../store/api/alumni";
import { useParams } from "react-router-dom";
import Search from "../../../components/search/Search";
import Limited from "../../../components/limited/Limited";
import Paginate from "../../../components/paginate/Paginate";

const Alumni = () => {
  // params
  const { id } = useParams();
  // state
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  // store
  const { setAlumni, dtAlumni } = useAlumniAPI();
  // effect
  useEffect(() => {
    setAlumni({ search, prodi_id: id }, page, limit);
  }, [setAlumni, search, page, limit]);

  const cekData = (rows) => rows.data.length <= 0 && <div>Data Kosong</div>;

  return (
    <div>
      {/* tools search */}
      <div className="mb-3 flex flex-wrap items-start gap-3 justify-between mr-2">
        {/* search */}
        <div className="shrink w-4/5">
          <Search setSearch={setSearch} />
        </div>
        {/* limit */}
        <div className="shrink w-1/6">
          <Limited setLimit={setLimit} />
        </div>
      </div>
      {/* jika data kosong */}
      <div>{dtAlumni.data && cekData(dtAlumni)}</div>
      {/* show card */}
      <div className="w-full flex flex-wrap gap-8">
        <div className="grid grid-cols-12 gap-4">
          {dtAlumni.data &&
            dtAlumni.data.map((row, index) => (
              <div
                key={index}
                className="col-span-12 m-auto md:col-span-6 lg:col-span-4"
              >
                <AlumniCard row={row} />
              </div>
            ))}
        </div>
        {/* paginate */}
        <div className="mb-10 flex justify-center w-full">
          <Paginate pageData={dtAlumni} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Alumni;
