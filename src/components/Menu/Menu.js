import "./Menu.css";
import { Link, useHistory } from "react-router-dom";
import exitPath from '../../images/exit.svg'
function Menu({isOpened, setIsOpened}) {
  const path = useHistory().location.pathname;

  return (
    <header className={ isOpened ? 'menu menu_opened' : 'menu'}>
      <nav className={ isOpened ? 'menu-navigation menu-navigation_opened' : 'menu'}>
        <button className="menu-navigation__exit" onClick={()=>setIsOpened(false)}>
          <img className="menu-navigation__exit-icon" src={exitPath} />
        </button>
        <Link
          to="./"
          className={
            path === "/"
              ? "menu-navigation__link menu-navigation__link_active"
              : "menu-navigation__link"
          }
        >
          Главная
        </Link>
        <Link
          to="./movies"
          className={
            path === "/movies"
              ? "menu-navigation__link menu-navigation__link_active"
              : "menu-navigation__link"
          }
        >
          Фильмы
        </Link>
        <Link
          to="./saved-movies"
          className={
            path === "/saved-movies"
              ? "menu-navigation__link menu-navigation__link_active"
              : "menu-navigation__link"
          }
        >
          Сохранённые фильмы
        </Link>
        <Link to="/profile" className="menu-navigation__link">
          <button className="menu-navigation__account">Аккаунт</button>
        </Link>
      </nav>
    </header>
  );
}

export default Menu;
