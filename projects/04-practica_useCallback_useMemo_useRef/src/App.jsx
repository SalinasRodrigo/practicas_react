import { useEffect, useState } from "react";
import "./App.css";
import { getMovie } from "./services/getMovie";
import { Movies } from "./components/Movies";

//const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&s=Pokemon&page=2`

function App() {
  const [movieSearch, setMovieSearch] = useState([]);
  const impt = "Pokemon";
  useEffect(() => {
    //if (!movie) return
    getMovie(impt).then((newSearch) => {
      console.log(newSearch);
      setMovieSearch(newSearch);
    });
    console.log("holas");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formText = Object.fromEntries(formData.entries());
    console.log(formText);
  };

  return (
    <main>
      <h1>Busqueda de Peliculas</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <label>
          Title: <input type="text" name="movieTitle" />
        </label>
        <input type="submit" />
      </form>
      <Movies movies={movieSearch} />
    </main>
  );
}

export default App;
