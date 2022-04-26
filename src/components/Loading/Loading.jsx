import React from 'react'
import Loader from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => {
  return (
    <div className={s.spinner}>
      <Loader type="Circles" color="#c75353" height={100} width={100} />
    </div>
  );
};

export default Loading;
