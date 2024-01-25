import { useState } from 'react';
import './App.css'
import { Library } from './components/Library';
import library from './mooks/books.json';

function App() {

  const [books, setBooks] = useState(library.library)
  const [readList, setReadList] = useState([])



  return (
    <div className='main-page'>
      {books ? <Library books={books} setBooks={setBooks} readList={readList} setReadList={setReadList}/> : <></>}
      <div className='reading-list'>
        <h2>Lista de lectura</h2>
        {readList ? <div className='list-grid'>
        {readList.map((data)=>{
          return(
            <div key={data.book.ISBN} className="img-container">
              <img src={data.book.cover} alt={`${data.book.title} cover`} />
            </div>
          )
        })}
        </div> : <></>}
      </div>
    </div>
  )
}

export default App
