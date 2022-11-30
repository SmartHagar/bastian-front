/** @format */

import React from "react";
import Pagination from "react-js-pagination";

const Paginate = ({ pageData, setPage, total }) => {
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const setPaginate = () => {
    if (pageData.current_page && pageData.last_page > 1) {
      const { current_page, per_page, total } = pageData;
      return (
        <Pagination
          innerClass="inline-flex items-center -space-x-px"
          activePage={current_page}
          itemsCountPerPage={parseInt(per_page)}
          totalItemsCount={total}
          pageRangeDisplayed={10}
          itemClass=""
          activeClass=""
          prevPageText="Sebelumnya"
          nextPageText="Selanjutnya"
          hideDisabled={true}
          activeLinkClass="text-lg font-bold rounded-lg"
          linkClassFirst="py-2 px-3 ml-0 leading-tight text-white bg-merah rounded-l-lg hover:bg-hijau hover:text-ungu"
          linkClassLast="py-2 px-3 leading-tight text-white bg-merah rounded-r-lg hover:bg-hijau hover:text-ungu"
          linkClass="py-2 px-3 leading-tight text-white bg-merah hover:bg-hijau hover:text-ungu"
          onChange={handlePageChange.bind(this)}
        />
      );
    }
  };

  return (
    <div className="">
      <nav aria-label="Page navigation example">{setPaginate()}</nav>
    </div>
  );
};

export default Paginate;
