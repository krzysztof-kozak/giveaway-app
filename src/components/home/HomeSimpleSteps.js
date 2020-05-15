import React from "react";
import { Link } from "react-router-dom";

export default function HomeSimpleSteps() {
  return (
    <>
      <section className="steps" id="simpleSteps">
        <h2 className="steps__title">Wystarczą 4 proste kroki</h2>

        <div className="steps-background">
          <div className="steps-wrapper">
            <div>
              <p className="steps__text">Wybierz rzeczy</p>
              <p className="steps__text">
                ubrania, zabawki,
                <br />
                sprzęt i inne
              </p>
            </div>

            <div>
              <p className="steps__text">Spakuj je</p>
              <p className="steps__text">
                skorzystaj z
                <br />
                worków na śmieci
              </p>
            </div>

            <div>
              <p className="steps__text">
                Zdecyduj komu
                <br />
                chcesz pomóc
              </p>
              <p className="steps__text">
                wybierz zaufane
                <br />
                miejsce
              </p>
            </div>

            <div>
              <p className="steps__text">Zamów kuriera</p>
              <p className="steps__text">
                kurier przyjedzie
                <br />w dogodnym terminie
              </p>
            </div>
          </div>
        </div>
        <Link to="/logowanie" className="intro__form-link">
          ODDAJ
          <br />
          RZECZY
        </Link>
      </section>
    </>
  );
}
