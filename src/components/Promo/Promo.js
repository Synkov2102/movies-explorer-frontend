import "./Promo.css";
import landingLogoPath from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__logo" src={landingLogoPath} />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
