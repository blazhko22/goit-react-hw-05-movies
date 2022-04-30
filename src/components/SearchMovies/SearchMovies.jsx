import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchByName } from '../../services/fetchMovies';
import s from './SearchMovies.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SearchMovies = () => {
  const [value, setValue] = useState('');
  const [arrayOfFilms, setArrayOfFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if(query !== '') {
    query &&
    fetchByName(query)
        .then(data => {        
          setArrayOfFilms(data.results);
        })
    } else {
      Notify.failure('Qui timide rogat docet negare')
    }
  }, [query]);

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value.trim() });
    setValue('');
  };
  
  return (
    <div className={s.movies_page}>
      <form onSubmit={onHandleSubmit}>
        <input
          className={s.searchForm_input}
          placeholder="Search for movie..." 
          type="text" 
          onChange={onHandleChange} value={value} />
        <button className={s.searchForm_button} type="submit"><span>Search</span></button>
      </form>
      
      {arrayOfFilms &&
        arrayOfFilms.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
    </div>
  );
};

export default SearchMovies;