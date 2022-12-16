/** @format */

import React, { useEffect } from "react";
import useItem from "../../store/crud/item";

import SelectSearch from "./SelectSearch";

const SelectItem = ({
  pilihItem,
  setPilihItem,
  disable = false,
  kantin = false,
}) => {
  const { setItem, dtItem } = useItem();
  useEffect(() => {
    setItem();
  }, []);
  // filter data tanpa kantin
  let data = dtItem;
  if (!kantin) {
    // data = data.filter((row) => row.nama.toLowerCase() !== "kantin");
    data = data.filter(function (row) {
      return !row.nama.toLowerCase().includes("kantin");
    });
  }
  // pilihan Item
  const optionsItem = data.map(function (Item) {
    return {
      value: Item.id,
      label: `${Item.nama}`,
      data: `${Item.kode}`,
    };
  });
  const onSearchSelect = (search) => {
    setItem({ search });
  };
  return (
    <>
      <SelectSearch
        value={pilihItem}
        onChange={setPilihItem}
        options={optionsItem}
        id="Item_id"
        onInputChange={onSearchSelect}
        isDisabled={disable}
      />
    </>
  );
};

export default SelectItem;
