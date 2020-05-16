import React from "react";

export default function HomeWhoWeHelp() {
  return (
    <>
      <section className="who-we-help" id="who-we-help">
        <h2 className="who-we-help__title">Komu pomagamy?</h2>
        <div className="category-wrapper">
          <button className="who-we-help__button">Fundacjom</button>
          <button className="who-we-help__button">
            Organizacjom
            <br />
            pozarządowym
          </button>
          <button className="who-we-help__button">
            Lokalnym
            <br />
            zbiórkom
          </button>
        </div>
        <p className="who-we-help__text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <div className="organizations-wrapper container">
          <div className="organization">
            <div className="organization__description">
              <h3>Fundacja "Dbam o zdrowie"</h3>
              <p>
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
            </div>
            <p className="organization__items">
              ubrania, jedzenie, sprzęt AGD, meble, zabawki
            </p>
          </div>

          <div className="organization">
            <div className="organization__description">
              <h3>Fundacja “Dla dzieci”</h3>
              <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
            </div>
            <p className="organization__items">ubrania, meble, zabawki</p>
          </div>

          <div className="organization">
            <div className="organization__description">
              <h3>Fundacja “Bez domu”</h3>
              <p>
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
              </p>
            </div>
            <p className="organization__items">
              ubrania, jedzenie, ciepłe koce
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
