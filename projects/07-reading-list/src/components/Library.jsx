/* eslint-disable react/prop-types */

import { PlusIcon } from "../icons/PlusIcon"

export const Library = ({books, setBooks, readList, setReadList }) => {

  const handleClick = (index) => {
    setReadList((prevState)=>[
      ...prevState,
      {
        ...books[index]
      }
    ])
    const newBooks = structuredClone(books)
    newBooks.splice(index, 1)
    setBooks(newBooks)
  }

  return(
    <div className="library">
      <h2>{books.length} libros disponibles</h2>
      <h4>{readList.length} en lista de lectura</h4>
      <div className="filters">
        <div>
          <label htmlFor="paginas">Filtrar por paginas</label>
          <input type="range" name="paginas" min={100} max={1200}/>
        </div>
        <div>
          <label htmlFor="genero">Filtrar por genero</label>
          <select name="genero">
            <option value="fantasia">fantasia</option>
          </select>
        </div>
      </div>
      <div className='img-grid'>
        {books.map((data, index)=>{
          return(
            <div key={data.book.ISBN} className="img-container" onClick={() => handleClick(index)}>
              <img src={data.book.cover} alt={`${data.book.title} cover`} />
              <PlusIcon className="add-btn"/>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}