import './App.css'
import { Library } from './components/Library';
import library from './mooks/books.json';

function App() {
  return (
    <>
      <h1>hey</h1>
      <Library library={library}/>
    </>
  )
}

export default App
