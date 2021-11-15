import { changeGenre } from '../../store/actions';
import { DEFAULT_GENRE } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducer';
import classNames from 'classnames';

export function Genres(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: State) => state.movies);
  const currentGenre = useSelector((state: State) => state.genre);

  const genres = [DEFAULT_GENRE, ...new Set(movies.map((it) => it.genre))] as string[];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={classNames('catalog__genres-item', {
            'catalog__genres-item--active': genre === currentGenre,
          })}
          key={genre}
        >
          <a href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
