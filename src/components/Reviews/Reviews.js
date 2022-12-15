import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async moviesId => {
      try {
        const response = await API.getMovieByReviews(moviesId);
        setReviews(response);
      } catch (error) {
        setError(true);
        throw new Error(error);
      }
    };
    fetch(moviesId);
  }, [moviesId]);

  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {error && <div>Please reload page</div>}
    </>
  );
};

export default Reviews;
