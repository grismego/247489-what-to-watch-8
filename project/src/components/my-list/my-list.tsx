import { Footer } from '../footer/footer';
import { MoviesList } from '../movies-list/movies-list';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMovies } from '../../store/movies/selectors';
import { useEffect } from 'react';
import { fetchFavoritesMovies } from '../../store/api-actions';
import { User } from '../user/user';
import { Routes } from '../../constants/constants';
import { Link } from 'react-router-dom';

export function MyList(): JSX.Element {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);

  useEffect(() => {
    dispatch(fetchFavoritesMovies());
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={Routes.MainPage()} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={favoriteMovies} />
      </section>

      <Footer/>
    </div>
  );
}
