/* eslint-disable react/prop-types */

import { MinusIcon } from "../icons/MinusIcon";

export const ReadList = ({ readList , setBooks, setReadList}) => {

  const handleClick = (index) => {
    setBooks((prevState)=>[
      ...prevState,
      {
        ...readList[index]
      }
    ])
    const newBooks = structuredClone(readList)
    newBooks.splice(index, 1)
    setReadList(newBooks)
  }

  return(
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
  )
};