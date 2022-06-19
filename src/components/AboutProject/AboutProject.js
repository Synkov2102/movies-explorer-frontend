import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__paragraph">
          <h3 className="about-project__paragraph-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__paragraph">
          <h3 className="about-project__paragraph-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="progress">
        <div className="progress__part">
          <div id="first-part" className="progress__part-wrapper">
            <p className="progress__part-time">1 неделя</p>
          </div>
          <p className="progress__part-title">Back-end</p>
        </div>
        <div className="progress__part">
          <div id="second-part" className="progress__part-wrapper">
            <p className="progress__part-time">4 недели</p>
          </div>
          <p className="progress__part-title">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
