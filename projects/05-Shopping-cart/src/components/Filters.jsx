/* eslint-disable react/prop-types */
import { useContext, useId } from "react";
import "./Filters.css";
import { FiltersContext } from "../context/filters";

export function Filters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price minimo</label>
        <input
          onChange={handleChangeMinPrice}
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categorías</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </div>
  );
}
