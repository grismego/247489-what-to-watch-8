import { Tab } from  '../../types/tab';
import { MoviePropsType } from '../movie-card/movie-card';

type MoviePageProps = Tab & {
  film: MoviePropsType
}

export function MoviePageOverview({film}: MoviePageProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>{film.director}</strong></p>

        <p className="film-card__starring"><strong>{film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}
