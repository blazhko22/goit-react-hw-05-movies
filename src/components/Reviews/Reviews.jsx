import { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import movieApi from '../../services/movie_api';
import Loading from '../Loading';
import s from './Reviews.module.css';

export default function Reviews({ id }) {
  const [dataReviews, setDataReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    movieApi
      .fetchReviews(id)
      .then(({ results }) =>
        results.map(result => ({
          author: result.author,
          content: result.content,
          id: result.id,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          setDataReviews(arrayData);
        } else {
          setShowNotFound(true);
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }, [dataReviews, showNotFound]);

  return (
    <>
      {!isLoading && dataReviews && (
        <ul className={s.list}>
          {dataReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p className={s.text}>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loading />}
      {!isLoading && showNotFound && (
        <h2 className={s.error}>We don't have any reviews for this movie</h2>
      )}
    </>
  );
}

Reviews.propTypes = {
  id: PropTypes.number,
};
