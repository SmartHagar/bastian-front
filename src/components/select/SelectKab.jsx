/** @format */

import React, { useEffect } from "react";
// import useKabupaten from "../../store/crud/kabupaten";
import SelectSearch from "./SelectSearch";

const SelectKab = ({ pilihKabupaten, setPilihKabupaten, provinsi_id }) => {
  const { setKabupaten, dtKabupaten } = useKabupaten();
  useEffect(() => {
    if (provinsi_id.value) {
      setKabupaten({ provinsi_id: provinsi_id.value });
    }
  }, [provinsi_id]);
  // pilihan Kabupaten
  const optionsKabupaten = dtKabupaten.map(function (Kabupaten) {
    return {
      value: Kabupaten.id,
      label: `${Kabupaten.nama}`,
    };
  });
  const onSearchSelect = (search) => {
    if (provinsi_id.value) {
      setKabupaten({ search, provinsi_id: provinsi_id.value });
    }
  };
  return (
    <>
      <SelectSearch
        value={pilihKabupaten}
        onChange={setPilihKabupaten}
        options={optionsKabupaten}
        id="Kabupaten_id"
        onInputChange={onSearchSelect}
        required
      />
    </>
  );
};

export default SelectKab;
