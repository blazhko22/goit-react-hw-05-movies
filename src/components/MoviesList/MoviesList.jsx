import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) return null;
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        const { id, title } = movie;

        return (
          <li className={s.item} key={id}>
            <Link
              className={s.link}
              to={{
                pathname: `/movie/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
