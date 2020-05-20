import React from "react";

const Pagination = ({ organizationsPerPage, totalOrganizations, paginate }) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalOrganizations / organizationsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li>
            <a onClick={(e) => paginate(e, number)} href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
