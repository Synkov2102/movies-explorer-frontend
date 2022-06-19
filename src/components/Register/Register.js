import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logoPath from "../../images/logo.svg";

function Register({ email, password, name, setEmail, setPassword, onSubmit }) {
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <main className="login">
        <img className="login__logo" src={logoPath} alt="Логотип Movies-Explorer"/>
        <h2 className="login__title">Добро пожаловать!</h2>
        <form onSubmit={onSubmit}>
          <fieldset className="login__inputs login__inputs_theme_reg">
            <label className="login__input-label">Имя</label>
            <input
              id="name-input"
              required
              type="text"
              className="login__input"
              minLength="2"
              maxLength="200"
              value={name || ""}
              onChange={handlePasswordChange}
            />
            <span id="password-err" className="login__err"></span>
            <label className="login__input-label">E-mail</label>
            <input
              id="email-input"
              required
              type="email"
              className="login__input"
              minLength="2"
              maxLength="40"
              value={email || ""}
              onChange={handleEmailChange}
            />
            <span id="email-err" className="login__err"></span>
            <label className="login__input-label">Пароль</label>
            <input
              id="password-input"
              required
              type="password"
              className="login__input"
              minLength="2"
              maxLength="200"
              value={password || ""}
              onChange={handlePasswordChange}
            />
            <span id="password-err" className="login__err"></span>
          </fieldset>
          <button className="login__button">Зарегистрироваться</button>
          <div className="login__reg-container">
            <p className="login__reg-question">Уже зарегистрированы?</p>
            <Link to="./signin" className="login__reg-link">
              Войти
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register;
