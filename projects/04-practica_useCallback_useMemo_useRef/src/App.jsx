//import { useEffect, useState } from "react";
import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
//const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&s=Pokemon&page=2`

function App() {
  const [sort, setSort] = useState(false);
  const { inpt, setInpt, error } = useSearch();
  const { movieSearch, loading, movies } = useMovies({ inpt, sort });

  const debounceMovies = useCallback(
    debounce(inpt =>{
      movies({inpt})
    }, 300)
  , [movies])

  const handleSubmit = (event) => {
    event.preventDefault();
    movies({inpt});
  };

  const handleChange = (event) => {
    const newInpt = event.target.value;
    if (newInpt.startsWith(" ")) return;
    setInpt(event.target.value);
    debounceMovies(newInpt)
  };

  const handleSort = () => {
    setSort(!sort)
  }

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
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <input type="submit" />
        </form>
        {error && <p className="error ">{error}</p>}
      </header>
      <main>
        {
        loading ? <p>Loading....</p> : <Movies movies={movieSearch} />
        }
      </main>
    </div>
  );
}

export default App;
