import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import * as API from '../services/api';
import { Container } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async moviesId => {
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
    fetch(moviesId);
  }, [moviesId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { title, overview, poster_path, vote_average, genres } = movie;
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const score = Number(vote_average?.toFixed(0)) * 10;

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {error && <div>Please, try again</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && (
        <>
          <Container>
            <div>
              <img src={img} alt={title} width="500" height="800" />
            </div>
            <div>
              <h2>{title}</h2>
              <p>
                User Score: <span>{score}%</span>{' '}
              </p>
              <b>Overview:</b>
              <p>{overview}</p>
              <b>Genres:</b>
              <p>
                {genres !== null
                  ? genres?.map(({ name }) => name).join(', ')
                  : 'No information'}
              </p>
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

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
