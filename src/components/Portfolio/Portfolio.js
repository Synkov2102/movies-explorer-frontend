import "./Portfolio.css";

import arrowPath from '../../images/arrow.svg'

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__links">
        <a className="portfolio__link" href="https://github.com/Synkov2102/how-to-learn">
          <p className="portfolio__link-title">Статичный сайт</p>
          <img className="portfolio__link-icon" src={arrowPath} alt="Изображение стрелочки для ссылки"/>
        </a>
        <a className="portfolio__link" href="https://github.com/Synkov2102/russian-travel">
          <p className="portfolio__link-title">Адаптивный сайт</p>
          <img className="portfolio__link-icon" src={arrowPath} alt="Изображение стрелочки для ссылки"/>
        </a>
        <a className="portfolio__link" href="https://github.com/Synkov2102/react-mesto-api-full">
          <p className="portfolio__link-title">Одностраничное приложение</p>
          <img className="portfolio__link-icon" src={arrowPath} alt="Изображение стрелочки для ссылки"/>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
