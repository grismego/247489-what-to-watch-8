import { useDispatch } from 'react-redux';
import { changeFavorite } from '../../store/api-actions';
import { MoviePropsType } from '../../types/movie';


enum isFavouriteStatus {
  isFavourite = 1,
  notFavourite = 0,
}

const notInListButton = (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>
);

const inListButton = (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>
);

export function AddToMyListButton(props: MoviePropsType): JSX.Element {
  const dispatch = useDispatch();

  const { isFavorite, id } = props;
  const status = isFavorite ? isFavouriteStatus.notFavourite : isFavouriteStatus.isFavourite;

  const changeStatus = () => {
    dispatch(changeFavorite(id, status));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={changeStatus}>
      {!isFavorite ? notInListButton : inListButton}
      <span>My list</span>
    </button>
  );
}
