import { changeGenre } from '../../store/actions';
import { DEFAULT_GENRE } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducer';

export function Genres(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: State) => state.movies);
  const currentGenre = useSelector((state: State) => state.genre);

  const genres = [DEFAULT_GENRE, ...new Set(movies.map((it) => it.genre))] as string[];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === currentGenre && 'catalog__genres-item--active'}`}
          key={genre}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(changeGenre(genre));
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
