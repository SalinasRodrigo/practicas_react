import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
//const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&s=Pokemon&page=2`



function App() {
  const [inpt, setInpt] = useState('')
  const {movieSearch} = useMovies({inpt})
  


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inpt)

  };

  const handleChange = (event) =>{
    setInpt(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Busqueda de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={inpt}  type="text" name="movieTitle" />
          <input type="submit" />
        </form>
      </header>
      <main>
        <Movies movies={movieSearch} />
      </main>
    </div>
  );
}

export default App;
