import { useState, useEffect } from 'react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

import movieApi from '../../services/movie_api';
import s from './MovieDetailsView.module.css';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const { state } = useLocation();
  const {
    params: { movieID },
    path,
    url,
  } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const movieId = Number(movieID);
    movieApi.fetchMovie(movieId).then(setMovie);
  }, [movieID]);

  const handleGoBack = () => {
    if (state) {
      history.push({
        pathname: state.from.pathname,
        search: state.from.search,
      });
      return;
    }
    history.push('/');
  };

  if (!movie) return null;

  const {
    id,
    genres,
    original_title: title,
    poster_path: imgUrl,
    overview,
    vote_average,
    release_date,
  } = movie;

  const ganresMovie = genres.map(item => item.name).join(' ');
  const fullImageUrl = `${IMAGE_URL}${imgUrl}`;
  const imageUrl = imgUrl ? fullImageUrl : defaulImg;

  return (
    <>
      <div className={s.movie_page}>
        <button className={s.btn} type="button" onClick={handleGoBack}>
          {'<- Go beck'}
        </button>
        <div className={s.about_film}>
          <div className={s.poster_wrap}>
            <img className={s.poster} src={imageUrl} alt="poster" />
          </div>
          <div className={s.inform}>
            <h2 className={s.title}>{`${title}  (${Number.parseInt(release_date)})`}</h2>
            <p className={s.inform_item}>User Score: {vote_average * 10}%</p>
            <h3 className={s.inform_item_titel}>Overview</h3>
            <p className={s.inform_item}>{overview}</p>
            <h3 className={s.inform_item_titel}>Genres</h3>
            <p className={s.inform_item}>{ganresMovie}</p>
          </div>
        </div>
      </div>

      <div className={s.information}>
        <h3 className={s.information_titel}>
          Additional information
        </h3>
        <ul>
          <li className={s.information_item}>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: state
                  ? {
                      from: state.from,
                    }
                  : null,
              }}
            >
              Cast
            </Link>
          </li>
          <li className={s.information_item}>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: state
                  ? {
                      from: state.from,
                    }
                  : null,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast id={id} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews id={id} />
        </Route>
      </Switch>
    </>
  );
}
