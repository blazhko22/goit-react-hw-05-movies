import { fetchTrending } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrendingMoviesList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setMovieList([...response.results]));
  }, []);

  return (
    <ul>
      {movieList.map(({ original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
