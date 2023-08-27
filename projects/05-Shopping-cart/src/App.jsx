import {products as inicialProducts} from './mooks/producs.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [filters, setFilters] = useState (
    {
      minPrice: 0,
      category: 'all'
    }
  )
  const [products] = useState(inicialProducts)

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  

  return (
    <>
      <Header changeFilters={setFilters}/>
    <Products products={filteredProducts}/>
    </>
  )
}

export default App
