// import { fetchByName } from '../../services/fetchMovies';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import s from './SearchMovies.module.css';

// export default function SearchMovies() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     if (searchQuery) fetchByName(searchQuery).then(response => setResult([...response.results]));
//   }, [searchQuery]);
  
//   const formHandler = e => {
//     e.preventDefault();

//     setSearchQuery(e.target[0].value.trim().replace(/ +/g, ' '));

//     e.target.reset();
//   };

//   return (
//     <div className={s.movies_page}>
//       <form className={s.searchForm} onSubmit={formHandler}>
//         <input 
//           type="text" 
//           className={s.searchForm_input} 
//           name="InputSearch"
//           autoComplete="off"
//           autoFocus />
//         <button type="submit" className={s.searchForm_button}>
//           <span>Search</span>
//         </button>
//       </form>

//       {result &&
//         result.map(({ original_title, id }) => {
//           return (
//             <li key={id}>
//               <Link to={`/movies/${id}`}>{original_title}</Link>
//             </li>
//           );
//         })}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchByName } from '../../services/fetchMovies';

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
    <div>
      <input
        type="text"
        placeholder="Search for movie..."
        value={searchTerm}
        onChange={handleFilter}
        onSubmit={getData}
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

export default SearchMovies;