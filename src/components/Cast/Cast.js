import { Notification } from 'components/Notification/Notification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Cast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.getMovieByActors(moviesId);
        setActors(response);
      } catch (error) {
        setError(true);
        throw new Error(error);
      }
    };
    fetch();
  }, [moviesId]);

  return (
    <>
      {actors.length > 0 && (
        <ul>
          {actors.map(({ name, profile_path: profilePath, character }) => (
            <li key={name}>
              <p>{name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profilePath}`}
                alt={name}
                width="70"
                height="100"
              />
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {actors.length === 0 && (
        <p>We don't have any information for this movie</p>
      )}
      {error && <Notification message="Please reload page" />}
    </>
  );
};

export default Cast;
