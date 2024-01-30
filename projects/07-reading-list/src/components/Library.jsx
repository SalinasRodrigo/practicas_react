/* eslint-disable react/prop-types */

import { useState } from "react";
import { PlusIcon } from "../icons/PlusIcon";
import "./ReadList.css";

export const Library = ({ books, setBooks, readList, setReadList }) => {
  const [genre, setGenre] = useState('all')
  const [minPag, setMinPag] = useState(1200)

  const handleClick = (book) => {
    const bookIndex = books.findIndex((item) => item.book.ISBN === book.book.ISBN);
    const newReadList = [
      ...readList,
      {
        ...book,
      },
    ]
    setReadList(newReadList);
    const newBooks = structuredClone(books);
    newBooks.splice(bookIndex, 1);
    setBooks(newBooks);
    window.localStorage.setItem('books', JSON.stringify(newBooks))
    window.localStorage.setItem('readList', JSON.stringify(newReadList))
  };

  const handleChangePag = (e) => {
    setMinPag(parseInt(e.target.value))
  }

  const handleChangeGenre = (e) => {
    setGenre(e.target.value)
  }

  const filterBooks = (books) => {
    return books.filter((book) => {
      return (
        book.book.pages <= minPag &&
        (genre === "all" || book.book.genre === genre)
      );
    });
  };

  const filteredBooks = filterBooks(books)

  return (
    <div className="library">
      <h2>{books.length} libros disponibles</h2>
      <h4>{readList.length} en lista de lectura</h4>
      <div className="filters">
        <div>
          <label htmlFor="paginas">Filtrar por paginas</label>
          <input type="range" name="paginas" min={100} max={1200} onChange={handleChangePag} />
          <span>{minPag}</span> 
        </div>
        <div>
          <label htmlFor="genero">Filtrar por genero</label>
          <select name="genero" onChange={handleChangeGenre}>
            <option value="all">Todos</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
      </div>
      <div className="img-grid">
        {filteredBooks.map((data) => {
          return (
            <div
              key={data.book.ISBN}
              className="img-container"
              onClick={() => handleClick(data)}
            >
              <img src={data.book.cover} alt={`${data.book.title} cover`} />
              <PlusIcon className="add-btn" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
