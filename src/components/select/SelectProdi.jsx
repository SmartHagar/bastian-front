/** @format */
import React, { useEffect } from "react";
import SelectSearch from "./SelectSearch";
import useProdiAPI from "../../store/api/prodi";

const SelectProdi = ({ pilihProdi, setPilihProdi }) => {
  const { setProdi, dtProdi } = useProdiAPI();
  useEffect(() => {
    setProdi();
  }, []);
  // pilihan prodi
  const optionsProdi = dtProdi.map(function (prodi) {
    return {
      value: prodi.id,
      label: `${prodi.nama}`,
    };
  });
  const onSearchSelect = (value) => {
    setProdi();
  };
  return (
    <>
      <SelectSearch
        value={pilihProdi}
        onChange={setPilihProdi}
        options={optionsProdi}
        id="prodi_id"
        onInputChange={onSearchSelect}
        required
      />
    </>
  );
};

export default SelectProdi;
