import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  Fragment
} from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { movies } from '../../mocks/movies';

import { Header } from '../header/header';
import {Redirect} from 'react-router';

type stateForm = {
  rating: string,
  reviewText: string
}

type MatchParams = {
  id: string;
}

export function AddReview({ match }: RouteComponentProps<MatchParams>): JSX.Element {
  const { id } = match.params;

  const [stateForm, setStateForm] = useState<stateForm>({
    rating: '',
    reviewText: '',
  });

  const currentMovie = movies[+id];

  if (!currentMovie) {
    return <Redirect to='/' />;
  }

  const handleChangeControls = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const name = evt.target.name;
    const value = evt.target.value;

    setStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (evt: SyntheticEvent): void => {
    evt.preventDefault();
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentMovie.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={currentMovie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmitForm}>
          <div className="rating">
            <div className="rating__stars">
              {Array(10).fill(null).reverse().map((_, idx) => {
                const index = idx + 1;
                return (
                  <Fragment key={index}>
                    <input
                      onChange={handleChangeControls}
                      className="rating__input"
                      id={`star-${idx}`}
                      type="radio"
                      name="rating"
                      checked={index.toString() === stateForm.rating}
                      value={index}
                    />
                    <label className="rating__label" htmlFor={`star-${idx}`}>Rating {index}</label>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              onChange={handleChangeControls}
              name="reviewText"
              id="review-text"
              placeholder="Review text"
              value={stateForm.reviewText}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
