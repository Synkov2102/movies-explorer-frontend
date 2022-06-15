import "./Header.css";
import logoPath from "../../images/logo.svg";
import { Link} from "react-router-dom";
import React from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

function Header({setIsMenuOpened}) {

  return (
    <header className="header">
      <Link to="/" className="header__link-to-main">
        <img className="header__logo" src={logoPath} />
      </Link>
      <HeaderNavigation setIsMenuOpened={setIsMenuOpened}/>
    </header>
  );
}

export default Header;
