/** @format */

import React from "react";
import Select from "react-select";

const SelectSearch = (props) => {
  return (
    <Select
      {...props}
      className="z-50 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
    />
  );
};

export default SelectSearch;
