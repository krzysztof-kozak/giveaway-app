import React, { useState } from "react";

export default function HomeContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validName = /[A-Z][a-z]*/;
    const validEmail = /\S+@\S+\.\S+/;

    if (!validName.test(form.name)) {
      setNameError("Podane imię jest nieprawidłowe");
      return;
    }
    setNameError("");

    if (!validEmail.test(form.email)) {
      setEmailError("Podany email jest nieprawidłowy");
      return;
    }
    setEmailError("");

    if (form.message.length < 120) {
      setMessageError("Wiadomość musi mieć 120 znaków");
      return;
    }
    setMessageError("");

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) =>
        data.status === "success"
          ? setValidationMessage(
              "Wiadomość została wysłana! Wkrótce się skontaktujemy."
            )
          : setValidationMessage("Błąd serwera")
      );
  };

  return (
    <>
      <div className="background-wrapper">
        <section className="contact container" id="contact">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form__title">Skontaktuj się z nami</h2>
            <p className="contact-form__success">{validationMessage}</p>

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
                <p className="contact-form__error">{nameError}</p>
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
                <p className="contact-form__error">{emailError}</p>
              </div>
            </div>

            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              name="message"
              id="userMessage"
              cols="20"
              rows="4"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem doloremque mollitia qui impedit possimus libero vel voluptatibus enim iste, dolore, eos sit quia perspiciatis minus voluptatum officia officiis cum"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <p className="contact-form__error">{messageError}</p>

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
