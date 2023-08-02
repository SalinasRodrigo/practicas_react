import { useCallback, useMemo, useRef, useState } from "react";
import { getMovie } from "../services/getMovie";


export const useMovies = ({ inpt, sort }) => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [loading, setLoadin] = useState(false);
  const [error, setError] = useState(null); 
  const previusInput = useRef (inpt)

  const movies = useCallback (async ({inpt}) => {   

    if (inpt === previusInput.current) return

    try {
      setLoadin(true)
      setError(null)
      previusInput.current = inpt
      const newMovies = await getMovie({ inpt })
      setMovieSearch(newMovies)
    } catch (e) {
      setError(e.message)
    } finally{
      setLoadin(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movieSearch].sort((a, b) => a.title.localeCompare(b.title))
      : movieSearch
  }, [sort, movieSearch])

  return { movieSearch: sortedMovies, error, loading, movies };
};