import { fetchById } from '../services/fetchMovies';
import { useParams, useNavigate, Routes } from 'react-router';
import { useState, useEffect, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import s from './MovieDetailsView.module.css';

const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchById(movieId).then(response => setMovieDetails(response));
  }, [movieId]);

  return (
    <>
      <div className={s.card}>
        <button className={s.button} type="button" onClick={() => navigate(-1)}>
          {'<- Go beck'}
        </button>
        {movieDetails && (
          <div className={s.info}>
            <div className={s.thumb}>
              <img src={`https://www.themoviedb.org/t/p/w1280${movieDetails.poster_path}`} alt="" />
            </div>
            <div className={s.description}>
              <h2>
                {movieDetails.original_title} ({movieDetails.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movieDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movieDetails.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<MovieCast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </>
  );
}
