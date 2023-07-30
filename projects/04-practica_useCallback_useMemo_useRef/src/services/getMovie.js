const MOVIE_API_END_POINT= `https://www.omdbapi.com/?apikey=cb7a74b0&`

export const getMovie = async (inpt) => {
  console.log(inpt)
  const res = await fetch(`${MOVIE_API_END_POINT}s=${inpt}`)
  const data = await res.json()
  const {Search} = data
  return Search
}

