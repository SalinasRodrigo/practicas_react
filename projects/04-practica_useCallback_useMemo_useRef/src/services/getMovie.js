const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&`

export const getMovie = async (impt) => {
  const res = await fetch(`${MOVIE_API_END_POINT}s=${impt}`)
  const data = await res.json()
  const {Search} = data
  console.log(Search)
  return Search
}

