/** @format */

import React, { useEffect } from "react";
import useItem from "../../store/crud/item";

import SelectSearch from "./SelectSearch";

const SelectItem = ({ pilihItem, setPilihItem }) => {
  const { setItem, dtItem } = useItem();
  useEffect(() => {
    setItem();
  }, []);
  // pilihan Item
  const optionsItem = dtItem.map(function (Item) {
    return {
      value: Item.id,
      label: `${Item.nama}`,
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
        required
      />
    </>
  );
};

export default SelectItem;
