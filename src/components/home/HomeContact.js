import React, { useState } from "react";

export default function HomeContact() {
  const [form, setForm] = useState({ name: "imię", email: "nazwa@domena.pl" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="background-wrapper">
        <section className="contact container" id="contact">
          <form className="contact-form">
            <h2 className="contact-form__title">Skontaktuj się z nami</h2>

            <div className="form-section-wrapper">
              <div className="form-section">
                <label htmlFor="userName">Wpisz swoje imię</label>
                <input
                  type="text"
                  name="name"
                  id="userName"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-section">
                <label htmlFor="userEmail">Wpisz swój email</label>
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              name="message"
              id="userMessage"
              cols="20"
              rows="4"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem doloremque mollitia qui impedit possimus libero vel voluptatibus enim iste, dolore, eos sit quia perspiciatis minus voluptatum officia officiis cum"
            ></textarea>

            <button className="form-button" type="submit">
              Wyślij
            </button>
          </form>
        </section>
        <footer className="page-footer">
          <p className="page-footer-text">Copyright by Coders Lab</p>
        </footer>
      </div>
    </>
  );
}
