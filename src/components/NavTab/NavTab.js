import "./NavTab.css";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__links">
        <Link
          className="nav-tab__link"
          to="about-project"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          О проекте
        </Link>
        <Link
          className="nav-tab__link"
          to="tech"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          Технологии
        </Link>
        <Link
          className="nav-tab__link"
          to="student"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          Студент
        </Link>
      </nav>
    </section>
  );
}

export default NavTab;
