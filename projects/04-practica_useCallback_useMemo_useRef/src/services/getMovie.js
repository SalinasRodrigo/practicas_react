const MOVIE_API_END_POINT = `https://www.omdbapi.com/?apikey=cb7a74b0&`;

export const getMovie = async ({ inpt }) => {
  if (inpt === "") return null;
  try {
    console.log(inpt);
    const res = await fetch(`${MOVIE_API_END_POINT}s=${inpt}`);
    const data = await res.json();
    const { Search } = data;
    return Search?.map((newSearch) => ({
      id: newSearch.imdbID,
      title: newSearch.Title,
      year: newSearch.Year,
      poster: newSearch.Poster,
    }));
  } catch (e) {
    throw new Error("error searching movies");
  }
};
