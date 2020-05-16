import React from "react";

export default function HomeContact() {
  const messagePlaceholder =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem doloremque mollitia qui impedit possimus libero vel voluptatibus enim iste, dolore, eos sit quia perspiciatis minus voluptatum officia officiis cum";
  return (
    <>
      <section className="contact">
        <form className="contact-form" method="post">
          <h2>Skontaktuj się z nami</h2>
          <label htmlFor="userName">Wpisz swoje imię</label>
          <input type="text" name="name" id="userName" />

          <label htmlFor="userEmail">Wpisz swój email</label>
          <input type="email" name="email" id="userEmail" />

          <textarea
            name="message"
            id="userMessage"
            cols="30"
            rows="10"
            placeholder={messagePlaceholder}
          ></textarea>
        </form>
      </section>
    </>
  );
}
