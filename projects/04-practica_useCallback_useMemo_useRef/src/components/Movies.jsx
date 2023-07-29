/* eslint-disable react/prop-types */

const ListOfMovies = ({ movieSearch }) => {
  return (
    <ul>
      {movieSearch.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={`Poster of tehe movie ${movie.Title}`} />
          <p>Release year: {movie.Year}</p>
        </div>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movieSearch={movies} />
      : <NoMoviesResults />
  )
}
