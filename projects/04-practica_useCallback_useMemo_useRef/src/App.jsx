import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
//const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&s=Pokemon&page=2`



function App() {
  const {movieSearch} = useMovies()
  const [query, setQuery] = useState('')
  


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)

  };

  const handleChange = (event) =>{
    setQuery(event.target.value)
  }

  return (
    <main>
      <h1>Busqueda de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query}  type="text" name="movieTitle" />
        <input type="submit" />
      </form>
      <Movies movies={movieSearch} />
    </main>
  );
}

export default App;
