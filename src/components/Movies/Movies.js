import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import "./Movies.css";

import { useState } from "react";
import React from "react";

function Movies({
  onSearch,
  movies,
  isLoadingMovies,
  isErrorMovies,
  handleMovieSave,
}) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const keyWordLast = localStorage.getItem("keyWord");
  const isShortFilmLast = JSON.parse(localStorage.getItem("isShortFilm"));

  const [sizeCoefficient, setSizeCoefficient] = useState(12);
  const [additionCounter, setAdditionCounter] = useState(0);
  let isButtonActive = true;

  function handleResize() {
    if (window.innerWidth > 1005) {
      setSizeCoefficient(12);
    } else if (window.innerWidth > 710) {
      setSizeCoefficient(8);
    } else {
      setSizeCoefficient(5);
    }
  }

  function handleMoreClick() {
    setAdditionCounter(additionCounter + 1);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  if (movies === undefined) {
    if (JSON.parse(localStorage.getItem("findedFilms"))) {
      movies = JSON.parse(localStorage.getItem("findedFilms"));
    } else {
      isButtonActive = false;
    }
  } else {
    if (movies.length === 0) {
      if (JSON.parse(localStorage.getItem("findedFilms"))) {
        movies = JSON.parse(localStorage.getItem("findedFilms"));
      }
    }
  }

  if (movies != undefined) {
    if (movies.length <= sizeCoefficient + sizeCoefficient * additionCounter) {
      isButtonActive = false;
    }

    if (movies.length > sizeCoefficient) {
      movies.length = sizeCoefficient + sizeCoefficient * additionCounter;
    }
  }

  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
      <main className="main">
        <SearchForm
          onSearch={onSearch}
          keyWordLast={keyWordLast}
          isShortFilmLast={isShortFilmLast}
        />
        <MoviesCardList
          isErrorMovies={isErrorMovies}
          isLoadingMovies={isLoadingMovies}
          isButtonActive={isButtonActive}
          handleClick={handleMoreClick}
          handleMovie={handleMovieSave}
          movies={movies}
        ></MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
