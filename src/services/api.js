import axios from 'axios';
const API_KEY = 'e5b8bd1b82d4f5b68280cf1e2b92e5f6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export const getTrendingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results.map(({ title, id }) => ({ title, id }));
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const { title, overview, poster_path, vote_average, genres } = data;
  return { title, overview, poster_path, vote_average, genres };
};

export const getMovieByActors = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast.map(({ name, profile_path, character }) => ({
    name,
    profile_path,
    character,
  }));
};

export const getMovieByReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results.map(({ author, content }) => ({ author, content }));
};
