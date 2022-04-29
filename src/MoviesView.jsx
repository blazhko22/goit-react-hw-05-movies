// import toast from 'react-hot-toast';

// import { useState, useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import queryString from 'query-string';

// import MoviesList from '../../components/MoviesList';
// import movieApi from '../../services/movie_api';
// import s from './MoviesView.module.css';

// export default function MoviesView() {
//   const [searchMovies, setSearchMovies] = useState(null);

//   const history = useHistory();
//   const { search, pathname } = useLocation();

//   useEffect(() => {
//     const searchNoParse = search;

//     if (!searchNoParse) return;
//     const searchParse = queryString.parse(searchNoParse);
//     const searchQuery = searchParse.query;

//     movieApi.fetchSearchMovies(searchQuery).then(searchMovies => {
//       if (searchMovies.length === 0) {
//         toast.error('Nothing found');
//       }
//       setSearchMovies(searchMovies);
//     });
//   }, [search]);

//   const handeleSubmit = e => {
//     e.preventDefault();
//     const searchValue = e.target.InputSearch.value;
//     const processedSearchValue = searchValue.trim();
//     if (processedSearchValue.length === 0) return;

//     history.push({
//       pathname: pathname,
//       search: `query=${searchValue}`,
//     });

//     e.target.InputSearch.value = '';
//   };

//   return (
//     <div className={s.movies_page}>
//       <form className={s.searchForm} onSubmit={handeleSubmit}>
//         <input
//           className={s.searchForm_input}
//           type="text"
//           name="InputSearch"
//           autoComplete="off"
//           autoFocus
//         />

//         <button className={s.searchForm_button} type="submit">
//           <span>Search</span>
//         </button>
//       </form>
//       {searchMovies && <MoviesList movies={searchMovies} />}
//     </div>
//   );
// }

// import { useState } from "react";
// import { Form, Input, SearchBtn } from "./SearchForm.styled";
// import PropTypes from 'prop-types';

// export const SearchForm = ({ onSubmit }) => {
//     const [searchValue, setSearchValue] = useState('');
    
//     const handleChange = event => {
//         setSearchValue(event.currentTarget.value)
//     }
    
//     const handleSubmit = event => {
//         event.preventDefault();
//         const normalizedSearchValue = searchValue.toLowerCase().trim();
//         onSubmit(normalizedSearchValue);
//         setSearchValue('');
//     }
//     return (
//         <Form onSubmit={handleSubmit}>
//             <Input type="text" placeholder="Movies name" value={searchValue} onChange={handleChange}/>
//             <SearchBtn type="submit">Search</SearchBtn>
//         </Form>
//     )
// }

// SearchForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getApiData } from "../utils/apiCalls";
import { KEY } from "../utils/apiKey";

const MoviesPage = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams("");
  const searchTerm = searchParams.get("title") || "";

  //odpali sie po kliknieciu Search
  const getData = () => {
    if (searchTerm === "") {
      return;
    }
    getApiData(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}`
    )
      .then((data) => {
        setFetchedMovies(data.results);
        // console.log("fetchedMovies z Api-query:", fetchedMovies);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  };

  //odpali sie "po powrwocie" - jesli beda jakies dane w searchTerm
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    getApiData(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}`
    )
      .then((data) => {
        // console.log("pobrano z Api:", data.results);
        setFetchedMovies(() => data.results);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleFilter = (e) => {
    const title = e.target.value;
    if (title) {
      setSearchParams({ title });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <input
        type="text"
        placeholder="Search for movie..."
        value={searchTerm}
        onChange={handleFilter}
        // onSubmit={getData}
      />
      <button onClick={getData}>Search</button>
      <p></p>
      <ul>
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
      </ul>
    </div>
  );
};

export default MoviesPage;