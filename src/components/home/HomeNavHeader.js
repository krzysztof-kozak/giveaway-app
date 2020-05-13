import React from "react";
import heroImage from "../../assets/hero-image.png";

export default function HomeNavHeader() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <section className="hero">
            <img src={heroImage} alt="giveaway items in a box" className="hero__image" />

            <div className="content-wrapper">
              <nav className="navigation">
                <div className="login-wrapper">
                  <a href="#" className="navigation__link">
                    Zaloguj
                  </a>
                  <a href="#" className="navigation__link">
                    Załóż konto
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#">Start</a>
                  </li>
                  <li>
                    <a href="#">O co chodzi?</a>
                  </li>
                  <li>
                    <a href="#">O nas</a>
                  </li>
                  <li>
                    <a href="#">Fundacha i organizacje</a>
                  </li>
                  <li>
                    <a href="#">Kontakt</a>
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
                  <button>ODDAJ RZECZY</button>
                  <button>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
