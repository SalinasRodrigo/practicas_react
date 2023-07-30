/* eslint-disable react/prop-types */

const ListOfMovies = ({ movieSearch }) => {
  return (
    <ul className="movies">
      {movieSearch.map((movie) => (
        <div className="movie" key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={`Poster of tehe movie ${movie.title}`} />
          <p>Release year: {movie.year}</p>
        </div>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>No se encontraron películas para esta búsqueda</p>;
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? (
    <ListOfMovies movieSearch={movies} />
  ) : (
    <NoMoviesResults />
  );
};
