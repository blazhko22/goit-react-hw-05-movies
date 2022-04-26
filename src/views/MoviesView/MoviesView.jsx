import toast from 'react-hot-toast';

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import MoviesList from '../../components/MoviesList';
import movieApi from '../../services/movie_api';
import s from './MoviesView.module.css';

export default function MoviesView() {
  const [searchMovies, setSearchMovies] = useState(null);

  const history = useHistory();
  const { search, pathname } = useLocation();

  useEffect(() => {
    const searchNoParse = search;

    if (!searchNoParse) return;
    const searchParse = queryString.parse(searchNoParse);
    const searchQuery = searchParse.query;

    movieApi.fetchSearchMovies(searchQuery).then(searchMovies => {
      if (searchMovies.length === 0) {
        toast.error('Nothing found');
      }
      setSearchMovies(searchMovies);
    });
  }, [search]);

  const handeleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.InputSearch.value;
    const processedSearchValue = searchValue.trim();
    if (processedSearchValue.length === 0) return;

    history.push({
      pathname: pathname,
      search: `query=${searchValue}`,
    });

    e.target.InputSearch.value = '';
  };

  return (
    <div className={s.movies_page}>
      <form className={s.searchForm} onSubmit={handeleSubmit}>
        <input
          className={s.searchForm_input}
          type="text"
          name="InputSearch"
          autoComplete="off"
          autoFocus
        />

        <button className={s.searchForm_button} type="submit">
          <span>Search</span>
        </button>
      </form>
      {searchMovies && <MoviesList movies={searchMovies} />}
    </div>
  );
}
