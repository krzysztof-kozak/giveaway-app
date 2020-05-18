import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <nav className="navigation container">
        <div className="login-wrapper">
          <Link to="/logowanie" className="login-link">
            Zaloguj
          </Link>
          <Link to="/rejestracja" className="login-link">
            Załóż konto
          </Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/" className="menu__link">
              Start
            </Link>
          </li>
          <li className="menu__link">O co chodzi</li>
          <li className="menu__link">O nas</li>
          <li className="menu__link">Fundacje i organizjacje</li>
          <li className="menu__link">Kontakt</li>
        </ul>
      </nav>

      <div className="user-form-container">
        <form className="user-form">
          <h2 className="user-form__title"> Zaloguj się</h2>

          <div className="user-form__section-container">
            <label htmlFor="login-form-email">Email</label>
            <input type="email" name="email" id="login-form-email" />

            <label htmlFor="login-form-password">Hasło</label>
            <input type="password" name="password" id="login-form-password" />
          </div>

          <div className="buttons-container">
            <Link to="/logowanie" className="user-form__button" type="submit">
              Zaloguj
            </Link>
            <Link to="/rejestracja" className="user-form__button" type="submit">
              Załóż konto
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
