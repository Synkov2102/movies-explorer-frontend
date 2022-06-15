import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input
        type="checkbox"
        name="filter-checkbox"
        id="filter-checkbox"
        className="filter-checkbox__checkbox"
      />
      <label htmlFor="filter-checkbox" className="filter-checkbox__label" />
      <p className="filter-checkbox__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
