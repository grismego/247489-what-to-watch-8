import { UserCommentType } from '../../types/movie';
import { formatDatetime, formatHumanizedDate } from '../../utils/common';
import { Tab } from  '../../types/tab';

type ReviewsPageProps = Tab & {
  currentMovieComments: UserCommentType[],
}

export function MoviePageReviews({currentMovieComments}: ReviewsPageProps): JSX.Element {
  const middleIndex = Math.ceil(currentMovieComments.length / 2);
  const [firstColumnReviews, secondColumnReviews] = [currentMovieComments.slice(0, middleIndex), currentMovieComments.slice(middleIndex)];

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnReviews.map((review: UserCommentType) => {
          const { comment, date, id, rating, user: { name } } = review;

          return (
            <div className="review" key={id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{name}</cite>
                  <time className="review__date" dateTime={formatDatetime(date)}>{formatHumanizedDate(date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>

      <div className="film-card__reviews-col">
        {secondColumnReviews.map((review: UserCommentType) => {
          const { comment, date, id, rating, user: { name } } = review;

          return (
            <div className="review" key={id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{name}</cite>
                  <time className="review__date" dateTime={formatDatetime(date)}>{formatHumanizedDate(date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
