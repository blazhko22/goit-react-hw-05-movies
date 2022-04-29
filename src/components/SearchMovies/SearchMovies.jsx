import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchByName } from '../../services/fetchMovies';
import s from './SearchMovies.module.css';

const SearchMovies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const searchTerm = searchParams.get("title") || "";

  const getData = () => {
    if (searchTerm === "") {
      return;
    }
    fetchByName(searchTerm)
      .then((data) => {
        setFetchedMovies(data.results);
      })
  };

  
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    fetchByName(searchTerm)
      .then((data) => {
        setFetchedMovies(() => data.results);
      })
  }, [searchTerm]);

  const handleFilter = (e) => {
    e.preventDefault();
    const title = e.target.value.trim().replace(/ +/g, ' ');
    if (title) {
      setSearchParams({ title });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={s.movies_page}>
      <input
        className={s.searchForm_input}
        type="text"
        placeholder="Search for movie..."
        onChange={handleFilter}
        onSubmit={getData}
      />
      <button className={s.searchForm_button} onClick={getData}><span>Search</span></button>
      
        {fetchedMovies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`${movie.id}`}
              state={{
                from: `/movies?title=${searchTerm}`
              }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      
    </div>
  );
};

export default SearchMovies;