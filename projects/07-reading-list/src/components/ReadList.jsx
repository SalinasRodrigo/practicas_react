/* eslint-disable react/prop-types */

import { BookIcon } from "../icons/BookIcon";
import { MinusIcon } from "../icons/MinusIcon";

export const ReadList = ({ readList , books, setBooks, setReadList}) => {

  const handleClick = (index) => {
    const newBooks = [
      ...books,
      {
        ...readList[index]
      },
    ]
    
    setBooks(newBooks)
    const newReadList = structuredClone(readList)
    newReadList.splice(index, 1)
    setReadList(newReadList)
    window.localStorage.setItem('books', JSON.stringify(newBooks))
    window.localStorage.setItem('readList', JSON.stringify(newReadList))
  }

  return(
    <>
      <label htmlFor="list-btn" className="list-btn"><BookIcon/></label>
      <input type="checkbox" id="list-btn" hidden/>
      <div className="reading-list">
        <h2>Lista de lectura</h2>
        {readList ? (
          <div className="list-grid">
            {readList.map((data, index) => {
              return (
                <div key={data.book.ISBN} className="img-container" onClick={() => handleClick(index)}>
                  <img src={data.book.cover} alt={`${data.book.title} cover`} />
                  <MinusIcon/>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  )
};