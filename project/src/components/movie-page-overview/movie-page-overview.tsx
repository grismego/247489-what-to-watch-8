import { MoviePropsType } from '../../types/movie';
import { Tab } from  '../../types/tab';

type MoviePageProps = Tab & {
  film: MoviePropsType
}

const rangeFilm = (rating: number): string => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    default:
      return 'Awesome';
  }
};

const PRIMARY_CAST_NUMBER = 3;

export function MoviePageOverview({ film }: MoviePageProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rangeFilm(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            {
              film.starring?.length && `Starring: ${film.starring.slice(0, PRIMARY_CAST_NUMBER).join(', ')} and other`
            }
          </strong>
        </p>
      </div>
    </>
  );
}
