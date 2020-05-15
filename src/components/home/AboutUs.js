import React from "react";
import people from "../../assets/people.png";
import signature from "../../assets/signature.svg";

export default function AboutUs() {
  return (
    <>
      <section className="about-us" id="aboutUS">
        <div className="text-wrapper">
          <h2 className="about-us__title">O nas</h2>
          <p className="about-us__text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p >
          <img className="about-us__signature" src={signature} alt="a signature" />
        </div>
        <img className="about-us__image" src={people} alt="people smiling" />
      </section>
    </>
  );
}
