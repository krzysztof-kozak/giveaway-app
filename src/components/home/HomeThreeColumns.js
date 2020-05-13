import React from "react";

export default function HomeThreeColumns() {
  return (
    <>
      <div className="three-columns-wrapper">
        <article className="three-columns">
          <section className="article-statistics">
            <h2 className="article-statistics__title">10</h2>
            <p className="article-statistics__subtitle">ODDANYCH WORKÓW</p>
            <p className="article-statistics__text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
              erat volutpat.
            </p>
          </section>

          <section className="article-statistics">
            <h2 className="article-statistics__title">5</h2>
            <p className="article-statistics__subtitle">WSPARTYCH ORGANIZACJI</p>
            <p className="article-statistics__text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
              erat volutpat.
            </p>
          </section>

          <section className="article-statistics">
            <h2 className="article-statistics__title">7</h2>
            <p className="article-statistics__subtitle">ZORGANIZOWANY ZBIÓREK</p>
            <p className="article-statistics__text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
              erat volutpat.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
