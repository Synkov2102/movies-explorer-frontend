import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./HeaderNavigation.css";

import burgerPath from "../../images/burger.svg";

function HeaderNavigation({ setIsMenuOpened, loggedIn }) {
  const screenWidth = window.screen.width;
  const path = useHistory().location.pathname;

  if (path === "/" & !loggedIn) {
    //Создаем навигацию для главной страницы
    return (
      <nav className="header-navigation">
        <Link to="/signup" className="">
          <button className="header-navigation__reg">Регистрация</button>
        </Link>
        <Link to="/signin" className="">
          <button className="header-navigation__enter">Войти</button>
        </Link>
      </nav>
    );
  } else {
    if (screenWidth <= 768) {
      // Создаем кнопку бургера на плншетах и телефонах
      return (
        <nav className="header-navigation">
          <button
            className="header-navigation__burger"
            onClick={() => setIsMenuOpened(true)}
          >
            <img className="header-navigation__burger-icon" src={burgerPath} alt="Изображение кнопки меню"/>
          </button>
        </nav>
      );
    } else {
      //Создаем меню в обычном состоянии
      return (
        <nav className="header-navigation">
          <Link
            to="./movies"
            className={
              path === "/movies"
                ? "header-navigation__link header-navigation__link_active"
                : "header-navigation__link"
            }
          >
            Фильмы
          </Link>
          <Link
            to="./saved-movies"
            className={
              path === "/saved-movies"
                ? "header-navigation__link header-navigation__link_active"
                : "header-navigation__link"
            }
          >
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="header__link">
            <button className="header-navigation__account">Аккаунт</button>
          </Link>
        </nav>
      );
    }
  }
}

export default HeaderNavigation;
