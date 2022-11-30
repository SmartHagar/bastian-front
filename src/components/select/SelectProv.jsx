/** @format */

import React, { useEffect } from "react";
import useProvinsi from "../../store/crud/provinsi";
import SelectSearch from "./SelectSearch";

const SelectProv = ({ pilihProvinsi, setPilihProvinsi }) => {
  const { setProvinsi, dtProvinsi } = useProvinsi();
  useEffect(() => {
    setProvinsi();
  }, []);
  // pilihan Provinsi
  const optionsProvinsi = dtProvinsi.map(function (Provinsi) {
    return {
      value: Provinsi.id,
      label: `${Provinsi.nama}`,
    };
  });
  const onSearchSelect = (value) => {
    setProvinsi(value);
  };
  return (
    <>
      <SelectSearch
        value={pilihProvinsi}
        onChange={setPilihProvinsi}
        options={optionsProvinsi}
        id="Provinsi_id"
        onInputChange={onSearchSelect}
        required
      />
    </>
  );
};

export default SelectProv;
