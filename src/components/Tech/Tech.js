import "./Tech.css";

function Tech() {
  return (
    <section id="tech" className="tech">
      <h2 className="tech__title">Технологии</h2>
      <div className="tech__description">
        <h3 className="tech__main-text">7 технологии</h3>
        <p className="tech__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="tech__stack-list">
          <div className="tech__stack-element">
            <p>HTML</p>
          </div>
          <div className="tech__stack-element">
            <p>CSS</p>
          </div>
          <div className="tech__stack-element">
            <p>JS</p>
          </div>
          <div className="tech__stack-element">
            <p>React</p>
          </div>
          <div className="tech__stack-element">
            <p>Git</p>
          </div>
          <div className="tech__stack-element">
            <p>Express.js</p>
          </div>
          <div className="tech__stack-element">
            <p>mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
