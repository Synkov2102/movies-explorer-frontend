import "./MoviesCardList.css";
import { useHistory } from "react-router-dom";

function MoviesCardList(props) {
  let path = useHistory().location.pathname;

  return (
    <section className="movies-list">
      <div className="movies-list__grid-container">{props.children}</div>

      {path === "/movies" ? (
        <button className="movies-list__button">Ещё</button>
      ) : (
        <></>
      )}
    </section>
  );
}

export default MoviesCardList;
