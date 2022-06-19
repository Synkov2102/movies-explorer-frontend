import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          required
          type="text"
          placeholder="Фильм"
        ></input>
        <button type="submit" className="search-form__search-button">
          Найти
        </button>
      </div>
      <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;
