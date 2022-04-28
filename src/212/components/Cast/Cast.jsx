import { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';
import s from './Cast.module.css'

import movieApi from '../../services/movie_api';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';

export default function Cast({ id }) {
  const [dataCast, setDataCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    movieApi
      .fetchCast(id)
      .then(({ cast }) =>
        cast.map(item => ({
          name: item.name,
          character: item.character,
          img: item.profile_path,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          setDataCast(arrayData);
        } else {
          setShowNotFound(true);
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }, [dataCast, showNotFound]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && dataCast && (
        <ul className={s.list}>
          {dataCast.map(({ name, character, img }) => {
            const authorImg = img ? `${IMAGE_URL}${img}` : defaulImg;
            return (
              <li className={s.list_item} key={character + name}>
                <div className={s.img_wrapp}>
                  <img className={s.author_img} src={authorImg} alt="actor" />
                </div>
                <p className={s.text}>{name}</p>
                <p className={s.text}>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!isLoading && showNotFound && <h4 className={s.titel_error}>DATA NOT FOUND</h4>}
    </>
  );
}

Cast.propTypes = {
  id: PropTypes.number.isRequired,
};
