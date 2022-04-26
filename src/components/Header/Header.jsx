import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink exact to={`/`} className={s.nav} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={`/movie`} className={s.nav} activeClassName={s.active}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
