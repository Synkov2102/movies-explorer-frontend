import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logoPath from "../../images/logo.svg";
import { useForm } from "react-hook-form";
import Notification from "../Notification/Notification";

function Login({ onLogin, notification, setNotification }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onLogin(data.email, data.password);
    reset();
  };

  return (
    <>
      <main className="login">
        <Link to="/">
          <img
            className="login__logo"
            src={logoPath}
            alt="Логотип Movies-Explorer"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="login__inputs">
            <label className="login__input-label">E-mail</label>
            <input
              className={
                errors.email ? "login__input login__input_err" : "login__input"
              }
              {...register("email", {
                required: "Почта должна быть заполнена",
                pattern: {
                  value: /\b([a-z0-9._-]+@[a-z0-9.-]+\.[a-z]+)\b/i,
                  message: "Почта введена не верно", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <span className="login__err">{errors?.email?.message}</span>

            <label className="login__input-label">Пароль</label>
            <input
              className={
                errors.password
                  ? "login__input login__input_err"
                  : "login__input"
              }
              type="password"
              {...register("password", {
                required: "Пароль должен быть заполнен",
              })}
            />
            <span className="login__err">{errors?.password?.message}</span>
          </fieldset>
          <button type="submit" disabled={!isValid} className="login__button">
            Войти
          </button>
          <div className="login__reg-container">
            <p className="login__reg-question">Еще не зарегистрированы?</p>
            <Link to="./signup" className="login__reg-link">
              Регистрация
            </Link>
          </div>
        </form>
        <Notification notification={notification} setNotification={setNotification}/>
      </main>
    </>
  );
}

export default Login;
