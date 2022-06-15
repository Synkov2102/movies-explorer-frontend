import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__about">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__content">
        <p className="footer__copyright">© 2022</p>
        <div className="footer__links-container">
          <a className="footer__link" href="https://practicum.yandex.ru">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/Synkov2102">
            Github
          </a>
          <a className="footer__link" href="https://ru-ru.facebook.com/">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
