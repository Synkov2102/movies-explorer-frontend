import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import "./SavedMovies.css";

import { useState } from "react";

function SavedMovies({ handleDeleteMovie, onSearch, savedMovies }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);


  if (savedMovies === undefined) {
    savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
  } 

  if (JSON.parse(localStorage.getItem("savedFilms")).length === 0) {
    savedMovies = undefined
  }

  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Menu isOpened={isMenuOpened} setIsOpened={setIsMenuOpened} />
      <main>
        <SearchForm onSearch={onSearch} />
        <MoviesCardList movies={savedMovies} handleMovie={handleDeleteMovie} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
