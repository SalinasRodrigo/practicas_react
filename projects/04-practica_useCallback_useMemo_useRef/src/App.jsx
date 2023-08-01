//import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
//const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&s=Pokemon&page=2`

function App() {
  const { inpt, setInpt, error } = useSearch();
  const { movieSearch, movies } = useMovies({ inpt });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    movies(inpt);
  };

  const handleChange = (event) => {
    const newInpt = event.target.value;
    if (newInpt.startsWith(" ")) return;
    setInpt(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Busqueda de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={inpt}
            onChange={handleChange}
            type="text"
            name="movieTitle"
          />
          <input type="submit" />
        </form>
        {error && <p className="error ">{error}</p>}
      </header>
      <main>
        <Movies movies={movieSearch} />
      </main>
    </div>
  );
}

export default App;
