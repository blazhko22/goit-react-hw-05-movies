import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import movieApi from '../../services/movie_api';
import s from './HomeView.module.css';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    movieApi
      .fetchTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <div className={s.box}>
      <h3 className={s.title}>Trending today</h3>
      {trendingMovies && <MoviesList movies={trendingMovies} />}
    </div>
  );
}
