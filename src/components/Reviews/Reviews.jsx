import { fetchReviews } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(response => setReviews([...response.results]));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(el => {
          return (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}
