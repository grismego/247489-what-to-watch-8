import { Genres } from '../genres/genres';
import { Footer } from '../footer/footer';
import { MoviesList } from '../movies-list/movies-list';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredMovies, getPromoMovie } from '../../store/movies/selectors';
import { useEffect, useState } from 'react';
import { fetchPromoMovie } from '../../store/api-actions';
import { FilmCardMain } from '../movie-card-main/film-card-main';

const MAIN_PAGE_MOVIES_COUNT = 8;
const SHOW_MORE_BUTTON_STEP = 8;

export function MainPage(): JSX.Element {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromoMovie());
  }, []);

  const filteredMovies = useSelector(getFilteredMovies);
  const promoMovie = useSelector(getPromoMovie);

  const [currentAmout, setCurrentAmount] = useState(MAIN_PAGE_MOVIES_COUNT);

  const isMoreButtonVisible = filteredMovies.length > currentAmout;


  const showMoreButtonClickHandler = () => {
    setCurrentAmount((prevState) => prevState + SHOW_MORE_BUTTON_STEP);
  };

  const resetCurrentAmout = () => {
    setCurrentAmount(MAIN_PAGE_MOVIES_COUNT);
  };

  return (
    <>
      <FilmCardMain movie={promoMovie}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres resetCurrentAmout={resetCurrentAmout}/>

          <MoviesList movies={filteredMovies} moviesCount={currentAmout} />

          {
            isMoreButtonVisible &&
            <div className="catalog__more" onClick={showMoreButtonClickHandler}>
              <button className="catalog__button" type="button">Show more</button>
            </div>
          }
        </section>

        <Footer />
      </div>
    </>
  );
}
