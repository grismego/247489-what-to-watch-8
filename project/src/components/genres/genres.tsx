import { changeGenre } from '../../store/actions';
import { DEFAULT_GENRE } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { getMovies, getGenre } from '../../store/movies/selectors';

type GenresType = {
  resetCurrentAmout: () => void
}

export function Genres({ resetCurrentAmout }: GenresType): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector(getMovies);
  const currentGenre = useSelector(getGenre);

  const genres = [DEFAULT_GENRE, ...new Set(movies.map((it) => it.genre))] as string[];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={
          cn('catalog__genres-item', {
            'catalog__genres-item--active': genre === currentGenre,
          })
        }
        key={genre}
        >
          <a href="#" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
              resetCurrentAmout();
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
