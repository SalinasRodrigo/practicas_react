import { useState,useEffect } from "react";
import { getMovie } from "../services/getMovie";

export const useMovies = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const impt = "Pokemon";
  useEffect(() => {
    //if (!movie) return
    getMovie(impt).then((newSearch) => {
      console.log(newSearch);

      const mappedSearch = newSearch?.map(newSearch=> ({
        id: newSearch.imdbID,
        title: newSearch.Title,
        year: newSearch.Year,
        poster: newSearch.Poster
      }))

      setMovieSearch(mappedSearch);
    });
    console.log("holas");
  }, []);

  return {movieSearch}
}