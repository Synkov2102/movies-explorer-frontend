import "./MoviesCard.css";
import { useHistory } from "react-router-dom";
import React from "react";

function MoviesCard({ movie, deleteHandler, saveOrDeleteHandler }) {
  let path = useHistory().location.pathname;
  const [isSaved, setIsSaved] = React.useState(false);

  function makeDurationToString(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return hours != 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function likeClick() {
    setIsSaved(!isSaved);
    saveOrDeleteHandler(movie)
  }

  function deleteClick() {
    setIsSaved(false)
    deleteHandler(movie)
  }

  function Button({ isSaved, deleteClick, likeClick }) {
    if (path === "/saved-movies") {
      return (
        <button
          className="movies-card__delete-button"
          onClick={deleteClick}
        ></button>
      );
    } else {
      return (
        <button
          className={
            isSaved
              ? "movies-card__like-button movies-card__like-button_active"
              : "movies-card__like-button"
          }
          onClick={likeClick}
        ></button>
      );
    }
  }

  React.useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
    for (let item in savedMovies) {
      if (movie.nameRU === savedMovies[item].nameRU) {
        setIsSaved(true);
      }
    }
  }, []);

  return (
    <div className="movies-card">
      <a target="_blank" href={movie.trailerLink}>
        {path === "/saved-movies" ? (
          <img
            className="movies-card__img"
            src={movie.image}
            alt="Изображение на карточке"
          />
        ) : (
          <img
            className="movies-card__img"
            src={"https://api.nomoreparties.co" + movie.image.url}
            alt="Изображение на карточке"
          />
        )}
      </a>
      <div className="movies-card__info-wrapper">
        <h3 className="movies-card__title">{movie.nameRU}</h3>
        <Button isSaved={isSaved} deleteClick={deleteClick} likeClick={likeClick} />
      </div>
      <p className="movies-card__timing">
        {makeDurationToString(movie.duration)}
      </p>
    </div>
  );
}

export default MoviesCard;
