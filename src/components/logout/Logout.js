import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout() {
  return (
    <>
      <nav className='navigation container'>
        <div className='login-wrapper'>
          <Link to='/logowanie' className='login-link'>
            Zaloguj
          </Link>
          <Link to='/rejestracja' className='login-link'>
            Załóż konto
          </Link>
        </div>

        <ul className='menu'>
          <li>
            <Link to='/' className='menu__link'>
              Start
            </Link>
          </li>
          <li className='menu__link'>O co chodzi</li>
          <li className='menu__link'>O nas</li>
          <li className='menu__link'>Fundacje i organizjacje</li>
          <li className='menu__link'>Kontakt</li>
        </ul>
      </nav>

      <section className='logout'>
        <h1 className='logout__title'>Wylogowanie nastąpiło pomyślnie!</h1>
        <Link to='/' className='logout__button'>
          Strona główna
        </Link>
      </section>
    </>
  );
}
