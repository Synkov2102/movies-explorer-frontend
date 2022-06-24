import "./MoviesCardList.css";

import { useHistory } from "react-router-dom";
import React from "react";

import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import { isUndefined } from "lodash";
import { useState } from "react";

function MoviesCardList({
  isLoadingMovies,
  isErrorMovies,
  isButtonActive,
  handleClick,
  handleMovie,
  movies,
}) {
  let path = useHistory().location.pathname;

  const [moviesData, setMoviesData] = useState([]);

  React.useEffect(() => {
    setMoviesData(movies);
  }, [movies]);

  function deleteHandler(movie) {
    handleMovie(movie);
    setMoviesData(
      moviesData.filter((item) => {
        if (movie._id != item._id) {
          return item;
        }
      })
    );
  }

  function saveOrDeleteHandler(movie) {
    handleMovie(movie);
  }

  return (
    <section className="movies-list">
      <div className="movies-list__grid-container">
        {isLoadingMovies ? (
          <Preloader />
        ) : isErrorMovies ? (
          <p className="movies-list__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        ) : isUndefined(moviesData) ? (
          <></>
        ) : moviesData.length === 0 ? (
          <p className="movies-list__error">Ничего не найдено</p>
        ) : (
          moviesData.map((movie) => {
            return (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                deleteHandler={deleteHandler}
                saveOrDeleteHandler={saveOrDeleteHandler}
              />
            );
          })
        )}
      </div>
      {path === "/movies" && isButtonActive ? (
        <button className="movies-list__button" onClick={handleClick}>
          Ещё
        </button>
      ) : (
        <></>
      )}
    </section>
  );
}

export default MoviesCardList;
