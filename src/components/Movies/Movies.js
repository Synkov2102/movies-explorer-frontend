import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import "./Movies.css";

import { useState } from "react";
import React from "react";

import { bigSizeTable, mediumSizeTable, smallSizeTable } from "../../constants/constants";

function Movies({
  onSearch,
  noResult,
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
  const [moviesArr, setMoviesArr] = useState([]);

  let isButtonActive = true;

  function handleResize() {
    if (window.innerWidth > 1005) {
      setSizeCoefficient(bigSizeTable);
    } else if (window.innerWidth > 710) {
      setSizeCoefficient(mediumSizeTable);
    } else {
      setSizeCoefficient(smallSizeTable);
    }
  }

  function handleMoreClick() {
    setAdditionCounter(additionCounter + 1);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  React.useEffect(() => {
    setMoviesArr(
      movies.slice(0, sizeCoefficient + sizeCoefficient * additionCounter)
    );
  }, [sizeCoefficient, additionCounter, movies]);

  if (movies.length === 0) {
    if (JSON.parse(localStorage.getItem("findedFilms"))) {
      movies = JSON.parse(localStorage.getItem("findedFilms"));
    } else {
      isButtonActive = false;
    }
  }

  if (moviesArr.length === movies.length || noResult === true) {
    isButtonActive = false;
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
          noResult={noResult}
          movies={moviesArr}
        ></MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
