/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Filters.css'

export function Filters ( {changeFilters} ) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) =>{
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    changeFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return(
    <div className='filters'>
      <div>
        <label htmlFor="price">Price minimo</label>
        <input
        onChange={handleChangeMinPrice} 
        type="range"
        id="price" 
        min={0}
        max={1000}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categorías</label>
        <select id="category" onChange={handleChangeCategory} >
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </div>
  )
}