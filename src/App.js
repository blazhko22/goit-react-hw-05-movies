import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader type="Circles" color="#00BFFF" height={80} width={80} className="Loader" />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
