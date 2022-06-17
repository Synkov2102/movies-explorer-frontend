import Portfolio from "../Portfolio/Portfolio";

import portretPath from "../../images/Portret.png";
import "./Student.css";

function Student() {
  return (
    <section id="student" className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__content">
        <div className="student__profile-info">
          <h3 className="student__name">Евгений</h3>
          <p className="student__about">Фронтенд-разработчик, 20 лет</p>
          <p className="student__description">
            Я родился и живу в Cанкт-Петербурге, учусь в Санкт-Петербургском
            Государственном Политехническом университете. Я люблю автомобили, а
            ещё увлекаюсь фотографией. Недавно начал кодить.
          </p>
          <div className="student__links">
            <a target="_blank" className="student__link" href="https://ru-ru.facebook.com/">Facebook</a>
            <a target="_blank" className="student__link" href="https://github.com/Synkov2102">Github</a>
          </div>
        </div>
        <img src={portretPath} className="student__photo"  alt="Фотография студента"/>
      </div>
      <Portfolio />
    </section>
  );
}

export default Student;
