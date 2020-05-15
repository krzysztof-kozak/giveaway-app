import React from "react";
import heroImage from "../../assets/hero-image.png";

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
                  <a href="#" className="login-link">
                    Zaloguj
                  </a>
                  <a href="#" className="login-link">
                    Załóż konto
                  </a>
                </div>

                <ul className="menu">
                  <li>
                    <a href="#" className="menu__link">
                      Start
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__link">
                      O co chodzi?
                    </a>
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
                  <a href="#" className="intro__form-link">
                    ODDAJ
                    <br />
                    RZECZY
                  </a>
                  <a href="#" className="intro__form-link">
                    ZORGANIZUJ
                    <br />
                    ZBIÓRKĘ
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
