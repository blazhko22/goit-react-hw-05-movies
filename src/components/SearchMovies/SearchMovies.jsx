import { fetchByName } from '../../services/fetchMovies';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './SearchMovies.module.css';

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchQuery) fetchByName(searchQuery).then(response => setResult([...response.results]));
  }, [searchQuery]);

  const formHandler = e => {
    e.preventDefault();

    setSearchQuery(e.target[0].value);

    e.target.reset();
  };

  return (
    <div className={s.movies_page}>
      <form className={s.searchForm} onSubmit={formHandler}>
        <input 
          type="text" 
          className={s.searchForm_input} 
          name="InputSearch"
          autoComplete="off"
          autoFocus />
        <button type="submit" className={s.searchForm_button}>
          <span>Search</span>
        </button>
      </form>

      {result &&
        result.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
    </div>
  );
}
