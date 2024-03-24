import React, { useState } from 'react';

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState(1);

  const handlePagination = (pageNumber) => {
    setActive(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${active === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePagination(active - 1)}
            disabled={active === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === active ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => handlePagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${active === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePagination(active + 1)}
            disabled={active === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
