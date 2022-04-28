import { fetchCredits } from '../../services/fetchMovies';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import s from './MovieCast.module.css';

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCredits(movieId).then(response => setCast([...response.cast]));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(el => {
          return (
            <li key={el.id}>
              <div className={s.thumb}>
                <img
                  src={
                    el.profile_path
                      ? `https://www.themoviedb.org/t/p/w1280${el.profile_path}`
                      : 'http://dummyimage.com/100'
                  }
                  alt=""
                />
              </div>
              <p>{el.original_name}</p>
              <p>{el.character}</p>
            </li>
          );
        })}
    </ul>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.string,
};
