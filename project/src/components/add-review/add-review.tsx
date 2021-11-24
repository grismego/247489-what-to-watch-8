import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  Fragment,
  useEffect
} from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMovie } from '../../store/movies/selectors';
import { fetchMovie, postComments } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { User } from '../user/user';
import { Routes } from '../../constants/constants';
import { toast } from 'react-toastify';
import { getFormLoadingStatus } from '../../store/user/selectors';

type StateForm = {
  rating: string,
  comment: string
}

type ParamsType = {
  id: string;
}

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;


export function AddReview(): JSX.Element {
  const { id }: ParamsType = useParams();
  const dispatch = useDispatch();

  const isFormLoading = useSelector(getFormLoadingStatus);

  const [stateForm, setStateForm] = useState<StateForm>({
    comment: '',
    rating: '',
  });

  const currentMovie = useSelector(getCurrentMovie);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);


  const handleChangeControls = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const name = evt.target.name;
    const value = evt.target.value;

    setStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkForm = () => {
    if (!stateForm.rating) {
      toast.warn('Поставьте оценку', { position: toast.POSITION.TOP_LEFT, hideProgressBar: false });
      return false;
    }

    if ((stateForm.comment.length > MAX_COMMENT_LENGTH || stateForm.comment.length <= MIN_COMMENT_LENGTH)) {
      toast.warn(`Комментарий должен быть не короче ${MIN_COMMENT_LENGTH} символов и не длиннее ${MAX_COMMENT_LENGTH} символов`, { position: toast.POSITION.TOP_LEFT, hideProgressBar: false });
      return false;
    }

    return true;
  };

  const handleSubmitForm = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    if (!checkForm()) {
      return;
    }
    dispatch(postComments(id, stateForm));
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={Routes.MainPage()} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <User />

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentMovie.posterImage} alt={currentMovie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmitForm}>
          <div className="rating">
            <div className="rating__stars">
              { Array.from({length: 10}, (_, i) => i + 1)
                .reverse()
                .map((index) => (
                  <Fragment key={index}>
                    <input
                      onChange={handleChangeControls}
                      className="rating__input"
                      id={`star-${index}`}
                      type="radio"
                      name="rating"
                      checked={index.toString() === stateForm.rating}
                      value={index}
                    />
                    <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                  </Fragment>
                ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              onChange={handleChangeControls}
              name="comment"
              id="review-text"
              placeholder="Review text"
              value={stateForm.comment}
              disabled={isFormLoading}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isFormLoading}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
