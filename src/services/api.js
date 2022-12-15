import axios from 'axios';
const API_KEY = 'e5b8bd1b82d4f5b68280cf1e2b92e5f6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export const getTrendingFilms = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

    return data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
