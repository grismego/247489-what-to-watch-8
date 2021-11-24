import { useHistory } from 'react-router';
import { MoviePropsType } from '../../types/movie';
import { AddToMyListButton } from '../add-to-my-list-button/add-to-my-list-button';
import { User } from '../user/user';

export type FilmCardType = {
  movie: MoviePropsType
}

export function FilmCardMain({ movie }: FilmCardType): JSX.Element {
  const history = useHistory();
  const { backgroundImage, name, posterImage, genre, released, id } = movie;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <User />

      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>


            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <AddToMyListButton {...movie} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
