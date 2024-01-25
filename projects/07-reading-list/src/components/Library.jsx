/* eslint-disable react/prop-types */

import { PlusIcon } from "../icons/PlusIcon"

export const Library = ({books, setBooks, setReadList }) => {

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