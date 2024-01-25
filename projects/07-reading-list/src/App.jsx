import './App.css'
import { Library } from './components/Library';
import library from './mooks/books.json';

function App() {
  return (
    <div className='main-page'>
      <Library library={library}/>
      <div className='reading-list'>
        <h2>Lista de lectura</h2>
      </div>
    </div>
  )
}

export default App
