import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
const API = 'http://localhost:3000/foundations';

export default function HomeWhoWeHelp() {
  const [foundations, setFoundations] = useState([]);
  const [current, setCurrent] = useState('Fundacjom');
  const [currentPage, setCurrentPage] = useState(1);
  const [organizationsPerPage] = useState(3);

  useEffect(() => {
    fetch(API, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setFoundations(data))
      .catch((err) => console.log(`Problem z API: ${err}`));
  }, []);

  // Get organization index
  const indexOfLastOrganization = currentPage * organizationsPerPage;
  const indexOfFirstOrganization =
    indexOfLastOrganization - organizationsPerPage;

  //Change page
  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const getCurrentFundation = () => {
    return foundations?.find((foundation) => foundation.name === current);
  };

  const handleChangeFund = (e) => {
    setCurrent(e.target.id);
  };

  if (!foundations) {
    return <h1>Wczytuję dane fundacji...</h1>;
  }
  return (
    <>
      <section className='who-we-help' id='who-we-help'>
        <h2 className='who-we-help__title'>Komu pomagamy?</h2>

        <div className='category-wrapper'>
          {foundations.map((foundation) => (
            <button
              id={foundation.name}
              onClick={handleChangeFund}
              className='who-we-help__button'>
              {foundation.name}
            </button>
          ))}
        </div>

        <p className='who-we-help__text'>{getCurrentFundation()?.desc}</p>

        <div className='organizations-wrapper container'>
          {getCurrentFundation()
            ?.items.slice(indexOfFirstOrganization, indexOfLastOrganization)
            .map((fund) => (
              <>
                <div className='organization'>
                  <div className='organization__description'>
                    <h3>{fund.header}</h3>
                    <p>{fund.subheader}</p>
                  </div>
                  <p className='organization__items'>{fund.desc}</p>
                </div>
              </>
            ))}
        </div>
        <Pagination
          organizationsPerPage={organizationsPerPage}
          totalOrganizations={getCurrentFundation()?.items.length}
          paginate={paginate}
        />
      </section>
    </>
  );
}
