import React from "react";
import heroImage from "../../assets/hero-image.png";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

export default function HomeNavHeader() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <section className="hero">
            <img
              src={heroImage}
              alt="giveaway items in a box"
              className="hero__image"
            />

            <div className="content-wrapper">
              <nav className="navigation">
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
                    <a href="#" className="menu__link">
                      Start
                    </a>
                  </li>
                  <li>
                    <SmoothLink
                      activeClass="active"
                      to="simpleSteps"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="menu__link"
                    >
                      O co chodzi?
                    </SmoothLink>
                  </li>
                  <li>
                    <a href="#" className="menu__link">
                      O nas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__link">
                      Fundacha i organizacje
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__link">
                      Kontakt
                    </a>
                  </li>
                </ul>
              </nav>

              <section className="intro">
                <h1 className="intro__title">
                  Zacznij pomagać!
                  <br />
                  Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <div className="buttons-wrapper">
                  <Link to="/logowanie" className="intro__form-link">
                    ODDAJ
                    <br />
                    RZECZY
                  </Link>
                  <Link to="/logowanie" className="intro__form-link">
                    ZORGANIZUJ
                    <br />
                    ZBIÓRKĘ
                  </Link>
                </div>
              </section>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
