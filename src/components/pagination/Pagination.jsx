import React from "react";
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
      const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);

  return (
    <nav className="pagination">
      <ul className="paginate">
        {pageNumber.map((number) => (
          <li key={number} onClick={() => paginate(number)}>{number}</li>
        ))}
      </ul>
    </nav>
  );
}};

export default Pagination;
