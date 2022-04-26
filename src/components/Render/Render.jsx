import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import toaster from './Render.module.css';

const Header = lazy(() => import('../Header'));
const HomeView = lazy(() => import('../../views/HomeView'));
const MoviesView = lazy(() => import('../../views/MoviesView'));
const MovieDetailsView = lazy(() => import('../../views/MovieDetailsView'));
const NotFound = lazy(() => import('../NotFound'));

const Render= () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movie/:movieID" >
            <MovieDetailsView />
          </Route>
          <Route path="/movie" >
            <MoviesView />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <Toaster className={toaster} />
    </div>
  );
};

export default Render;