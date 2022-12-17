import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import * as API from '../services/api';
import { Container, ImageContainer } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const location = useLocation();
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.getMovieById(moviesId);
        setMovie(response);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetch();
  }, [moviesId]);

  const backLinkHref = location.state?.from ?? '/';
  const { title, overview, poster_path, vote_average, genres, release_date } =
    movie;
  const releaseDate = release_date?.slice(0, 4);
  const posterPath =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg';
  const voteAverage = vote_average?.toFixed(0) * 10;
  const genresList =
    genres?.length > 0
      ? genres.map(({ name }) => name).join(', ')
      : 'No information';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {error && <Notification message="Please, try again" />}
      {isLoading && <Loader />}
      {!isLoading && !error && movie && (
        <>
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
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </>
      )}

      <Suspense fallback={<Notification message="Loading subpage..." />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
