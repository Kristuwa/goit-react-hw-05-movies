import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Cast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async moviesId => {
      try {
        const response = await API.getMovieByActors(moviesId);
        setActors(response);
      } catch (error) {
        setError(true);
        throw new Error(error);
      }
    };
    fetch(moviesId);
  }, [moviesId]);

  return (
    <>
      {actors.length > 0 && (
        <ul>
          {actors.map(({ name, profile_path, character }) => (
            <li key={name}>
              <p>{name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="70"
                height="100"
              />
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <div>Please reload page</div>}
    </>
  );
};

export default Cast;
