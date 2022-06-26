import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import "./SavedMovies.css";

import { useState } from "react";

import React from "react";

function SavedMovies({ handleDeleteMovie, onSearch, savedMovies, noResult }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  if (savedMovies.length === 0) {
    if (JSON.parse(localStorage.getItem("savedFilms"))) {
      savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
    }
  }

  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
      <main>
        <SearchForm onSearch={onSearch} />
        <MoviesCardList
          movies={savedMovies}
          handleMovie={handleDeleteMovie}
          noResult={noResult}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
