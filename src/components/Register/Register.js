import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logoPath from "../../images/logo.svg";
import { useForm } from "react-hook-form";
import Notification from "../Notification/Notification";

function Register({ onRegister, notification, setNotification }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onRegister(data.email, data.password, data.name);
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
        <h2 className="login__title">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="login__inputs login__inputs_theme_reg">
            <label className="login__input-label">Имя</label>
            <input
              className={
                errors.name ? "login__input login__input_err" : "login__input"
              }
              {...register("name", {
                required: "Имя должно быть заполнено",
                pattern: {
                  value: /^[a-z-А-Яа-я\s?]+$/i,
                  message: "Имя введено не верно",
                },
              })}
            />
            <span className="login__err">{errors?.name?.message}</span>

            <label className="login__input-label">E-mail</label>
            <input
              className={
                errors.email ? "login__input login__input_err" : "login__input"
              }
              {...register("email", {
                required: "Почта должна быть заполнена",
                pattern: {
                  value: /\b([a-z0-9._-]+@[a-z0-9.-]+\.[a-z]+)\b/i,
                  message: "Почта введена не верно",
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
            Зарегистрироваться
          </button>
          <div className="login__reg-container">
            <p className="login__reg-question">Уже зарегистрированы?</p>
            <Link to="./signin" className="login__reg-link">
              Войти
            </Link>
          </div>
        </form>
        <Notification notification={notification} setNotification={setNotification}/>
      </main>
    </>
  );
}

export default Register;
