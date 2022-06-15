import "./MoviesCardList.css";

function MoviesCardList(props) {

  return (
    <section className="movies-list">
      <div className="movies-list__grid-container">
        {props.children}
      </div>
      <button className="movies-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
