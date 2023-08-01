import { useState } from "react";
import { getMovie } from "../services/getMovie";

export const useMovies = ({ inpt }) => {
  const [movieSearch, setMovieSearch] = useState([]);

  const movies = () => {
    getMovie({ inpt }).then((mappedSearch) => {
      setMovieSearch(mappedSearch);
    });
  };

  return { movieSearch, movies };
};