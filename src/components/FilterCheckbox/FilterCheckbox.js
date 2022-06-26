import "./FilterCheckbox.css";


function FilterCheckbox({ isShortFilm, setIsShortFilm }) {

  function handleCheck() {
    setIsShortFilm(!isShortFilm)
  }

  return (
    <div className="filter-checkbox">
      <input
        type="checkbox"
        name="filter-checkbox"
        id="filter-checkbox"
        className="filter-checkbox__checkbox"
        checked={isShortFilm}
        onChange={handleCheck}
      />
      <label htmlFor="filter-checkbox" className="filter-checkbox__label" />
      <p className="filter-checkbox__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
