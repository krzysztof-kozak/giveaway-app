import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    const validEmail = /\S+@\S+\.\S+/;

    if (!validEmail.test(form.email)) {
      setEmailError('Podany email jest nieprawidłowy');
      return;
    }
    setEmailError('');

    if (form.password.length < 6) {
      setPasswordError('Hasło musi mieć conajmniej 6 znaków');
      return;
    }
    setPasswordError('');
  };

  return (
    <>
      <nav className='navigation container'>
        <div className='login-wrapper'>
          <Link to='/logowanie' className='login-link'>
            Zaloguj
          </Link>
          <Link to='/rejestracja' className='login-link'>
            Załóż konto
          </Link>
        </div>

        <ul className='menu'>
          <li>
            <Link to='/' className='menu__link'>
              Start
            </Link>
          </li>
          <li className='menu__link'>O co chodzi</li>
          <li className='menu__link'>O nas</li>
          <li className='menu__link'>Fundacje i organizjacje</li>
          <li className='menu__link'>Kontakt</li>
        </ul>
      </nav>

      <div className='user-form-container'>
        <form className='user-form' onSubmit={handleSubmit}>
          <h2 className='user-form__title'> Zaloguj się</h2>
          <div className='user-form__section-container'>
            <label htmlFor='login-form-email'>Email</label>
            <input type='email' name='email' id='login-form-email' value={form.email} onChange={handleChange} />
            <p className='contact-form__error'>{emailError}</p>

            <label htmlFor='login-form-password'>Hasło</label>
            <input type='password' name='password' id='login-form-password' value={form.password} onChange={handleChange} />
            <p className='contact-form__error'>{passwordError}</p>
          </div>
          <div className='buttons-container'>
            <button className='user-form__button' type='submit'>
              Zaloguj
            </button>
            <Link to='/rejestracja' className='user-form__button' type='submit'>
              Załóż konto
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
