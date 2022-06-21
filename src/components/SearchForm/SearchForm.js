import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

import { useState } from "react";

function SearchForm({ onSearch, keyWordLast, isShortFilmLast }) {

  const [isShortFilm, setIsShortFilm] = useState(isShortFilmLast || false);
  const [keyWord, setKeyWord] = useState(keyWordLast || '');

  function handleKeyWordChange(e) {
    setKeyWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyWord, isShortFilm);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          className="search-form__input"
          required
          type="text"
          placeholder="Фильм"
          value={keyWord}
          onChange={handleKeyWordChange}
        ></input>
        <button type="submit" className="search-form__search-button">
          Найти
        </button>
      </div>
      <FilterCheckbox
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
      />
    </form>
  );
}

export default SearchForm;
