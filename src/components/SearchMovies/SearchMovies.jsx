// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { fetchByName } from '../../services/fetchMovies';
// import s from './SearchMovies.module.css';

// const SearchMovies = () => {
//   const [fetchedMovies, setFetchedMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams("");
//   const searchTerm = searchParams.get("title") || "";

//   const getData = () => {
//     if (searchTerm === "") {
//       return;
//     }
//     fetchByName(searchTerm)
//       .then((data) => {
//         setFetchedMovies(data.results);
//       })
//   };

  
//   useEffect(() => {
//     if (searchTerm === "") {
//       return;
//     }
//     fetchByName(searchTerm)
//       .then((data) => {
//         setFetchedMovies(() => data.results);
//       })
//   }, [searchTerm]);

//   const handleFilter = (e) => {
//     e.preventDefault();
//     const title = e.target.value.trim().replace(/ +/g, ' ');
//     if (title) {
//       setSearchParams({ title });
//     } else {
//       setSearchParams({});
//     }
//   };

//   return (
//     <div className={s.movies_page}>
//       <input
//         className={s.searchForm_input}
//         type="text"
//         placeholder="Search for movie..."
//         onChange={handleFilter}
//         onSubmit={getData}
//       />
//       <button className={s.searchForm_button} onClick={getData}><span>Search</span></button>
      
//         {fetchedMovies.map((movie) => (
//           <li key={movie.id}>
//             <Link
//               to={`${movie.id}`}
//               state={{
//                 from: `/movies?title=${searchTerm}`
//               }}
//             >
//               {movie.original_title}
//             </Link>
//           </li>
//         ))}
      
//     </div>
//   );
// };

// export default SearchMovies;

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

//     setSearchQuery(e.target[0].value);

//     e.target.reset();
//   };

//   return (
//     <>
//       <form onSubmit={formHandler}>
//         <input type="text" className={s.input} />
//         <button type="submit" className={s.btn}></button>
//       </form>

//       {result &&
//         result.map(({ original_title, id }) => {
//           return (
//             <li key={id}>
//               <Link to={`/movies/${id}`}>{original_title}</Link>
//             </li>
//           );
//         })}
//     </>
//   );
// }

import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchByName } from '../../services/fetchMovies';
import s from './SearchMovies.module.css';

const SearchMovies = () => {
  const [value, setValue] = useState('');
  const [arrayOfFilms, setArrayOfFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query').trim().replace(/ +/g, ' ');

  useEffect(() => {
    query &&
    fetchByName(query)
        .then(data => {        
          setArrayOfFilms(data.results);
        })
        .catch(error => console.log('error :>> ', error));
  }, [query]);

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
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