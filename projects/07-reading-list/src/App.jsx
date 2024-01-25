import { useState } from "react";
import "./App.css";
import { Library } from "./components/Library";
import library from "./mooks/books.json";
import { ReadList } from "./components/ReadList";

function App() {
  const [books, setBooks] = useState(library.library);
  const [readList, setReadList] = useState([]);

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
      <ReadList readList={readList} setBooks={setBooks} setReadList={setReadList}/>
    </div>
  );
}

export default App;
