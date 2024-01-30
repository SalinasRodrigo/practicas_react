import { useState } from "react";
import "./App.css";
import { Library } from "./components/Library";
import library from "./mooks/books.json";
import { ReadList } from "./components/ReadList";

const booksInitialState = JSON.parse(window.localStorage.getItem('books')) || library.library;
const readListInitialState = JSON.parse(window.localStorage.getItem('readList')) || [];

function App() {
  const [books, setBooks] = useState(booksInitialState);
  const [readList, setReadList] = useState(readListInitialState);

  return (
    <div className="main-page">
      {books ? (
        <Library
          books={books}
          setBooks={setBooks}
          readList={readList}
          setReadList={setReadList}
        />
      ) : (
        <></>
      )}
      <ReadList readList={readList} setBooks={setBooks} setReadList={setReadList} books={books}/>
    </div>
  );
}

export default App;
