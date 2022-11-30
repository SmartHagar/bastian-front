/** @format */

import React, { useEffect } from "react";
import useDistrik from "../../store/crud/distrik";
import SelectSearch from "./SelectSearch";

const SelectDistrik = ({ pilihDistrik, setPilihDistrik, kabupaten_id }) => {
  const { setDistrik, dtDistrik } = useDistrik();
  useEffect(() => {
    if (kabupaten_id.value) {
      setDistrik({ kabupaten_id: kabupaten_id.value });
    }
  }, [kabupaten_id]);
  // pilihan Distrik
  const optionsDistrik = dtDistrik.map(function (Distrik) {
    return {
      value: Distrik.id,
      label: `${Distrik.nama}`,
    };
  });
  const onSearchSelect = (search) => {
    if (kabupaten_id.value) {
      setDistrik({ search, kabupaten_id: kabupaten_id.value });
    }
  };
  return (
    <>
      <SelectSearch
        value={pilihDistrik}
        onChange={setPilihDistrik}
        options={optionsDistrik}
        id="Distrik_id"
        onInputChange={onSearchSelect}
        required
      />
    </>
  );
};

export default SelectDistrik;
