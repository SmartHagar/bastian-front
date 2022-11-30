/** @format */

import React from "react";

const SkletonCard = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex flex-col w-full">
        <div className="space-y-2">
          <div className="h-2 bg-slate-700 rounded w-64 m-auto"></div>
          <div className="h-2 bg-slate-700 rounded w-40 m-auto"></div>
        </div>
        <div className="mt-10 space-y-5">
          <div className="space-y-3 py-2">
            <div className="h-2 bg-slate-700 rounded w-44"></div>
            <div className="h-12 bg-slate-700 rounded"></div>
          </div>
          <div className="space-y-3 py-2">
            <div className="h-2 bg-slate-700 rounded w-44"></div>
            <div className="h-12 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkletonCard;
