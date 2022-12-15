export const getMovieById = (movies, movieId) => {
  return movies.find(movie => movie.id === movieId);
};
