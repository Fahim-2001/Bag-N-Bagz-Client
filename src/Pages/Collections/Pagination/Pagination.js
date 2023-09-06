import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // Page Number setup
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      <h1>
        {pages.map((page, i) => (
          <button
            key={i}
            page={page}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "active-page-number-style"
                : "inactive-page-number-style"
            }
          >
            {page}
          </button>
        ))}
      </h1>
    </div>
  );
};

export default Pagination;
