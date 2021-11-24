import { Footer } from '../footer/footer';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getCurrentMovie, getSimilarMovies, getComments } from '../../store/movies/selectors';
import { Tabs } from '../tabs/tabs';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { useEffect } from 'react';
import { fetchComments, fetchMovie, fetchSimiliarMovies } from '../../store/api-actions';
import { MoviesList } from '../movies-list/movies-list';
import { getAuthStatus } from '../../store/user/selectors';
import { AuthorizationStatus, Routes } from '../../constants/constants';
import { AddToMyListButton } from '../add-to-my-list/add-to-my-list';
import { User } from '../user/user';

type MatchParams = {
  id: string;
}

const SIMILAR_MOVIES_COUNT = 4;

export function MoviePage(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const similarMovies = useSelector(getSimilarMovies);
  const currentMovie = useSelector(getCurrentMovie);
  const comments = useSelector(getComments);
  const auth = useSelector(getAuthStatus);
  const { id }: MatchParams = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchSimiliarMovies(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={Routes.MainPage()} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <User />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`/player/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <AddToMyListButton {...currentMovie} />

                {auth === AuthorizationStatus.Auth ? <Link className="btn film-card__button" to={`/films/${id}/review`}>Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.posterImage} alt={currentMovie.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs>
                <MoviePageOverview label="Overview" film={currentMovie}/>
                <MoviePageReviews label="Reviews"  currentMovieComments={comments} />
                <MoviePageDetails label="Details" film={currentMovie}/>
              </Tabs>
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={similarMovies} moviesCount={SIMILAR_MOVIES_COUNT}/>
        </section>

        <Footer />
      </div>
    </>
  );
}
