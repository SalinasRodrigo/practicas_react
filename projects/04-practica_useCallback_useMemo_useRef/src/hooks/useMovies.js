import { useState,useEffect } from "react";
import { getMovie } from "../services/getMovie";

export const useMovies = ({inpt}) => {
  const [movieSearch, setMovieSearch] = useState([]);

  useEffect(() => {
    //if (!movie) return
    console.log(inpt)
    getMovie(inpt).then((newSearch) => {
      const mappedSearch = newSearch?.map(newSearch=> ({
        id: newSearch.imdbID,
        title: newSearch.Title,
        year: newSearch.Year,
        poster: newSearch.Poster
      }))
    console.log(mappedSearch)
      setMovieSearch(mappedSearch);
    });
  }, [inpt]);

  return {movieSearch}
}