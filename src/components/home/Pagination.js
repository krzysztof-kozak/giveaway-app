import React from 'react';

const Pagination = ({ organizationsPerPage, totalOrganizations, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrganizations / organizationsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length > 1) {
    return (
      <nav className='container'>
        <ul class='pagination'>
          {pageNumbers.map((number) => (
            <li onClick={(e) => paginate(e, number)} className='pagination__item'>
              <a className='pagination__link' href='!#'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return null;
  }
};

export default Pagination;
