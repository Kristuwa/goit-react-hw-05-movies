import { Container, ImageContainer } from './MoviesCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, vote_average, genres, release_date } =
    movie;
  const releaseDate = release_date.slice(0, 4);
  const posterPath =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg';
  const voteAverage = vote_average.toFixed(0) * 10;
  const genresList =
    genres.length > 0
      ? genres.map(({ name }) => name).join(', ')
      : 'No information';

  return (
    <Container>
      <ImageContainer>
        <img src={posterPath} alt={title} width="500" height="700" />
      </ImageContainer>
      <div>
        <h2>
          {title} ({releaseDate})
        </h2>
        <p>
          User Score: <span>{voteAverage}%</span>{' '}
        </p>
        <b>Overview:</b>
        <p>{overview}</p>
        <b>Genres:</b>
        <p>{genresList}</p>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
