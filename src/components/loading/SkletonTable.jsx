/** @format */
import React from "react";

const SkletonTable = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="w-full">
        <div className="h-4 bg-gray-200 mt-3 mb-3 rounded"></div>
        <div className="h-4 bg-gray-300 mb-3 rounded"></div>
        <div className="h-4 bg-gray-200 mb-3 rounded"></div>
        <div className="h-4 bg-gray-300 mb-3 rounded"></div>
        <div className="h-4 bg-gray-200 mb-3 rounded"></div>
      </div>
    </div>
  );
};

export default SkletonTable;
