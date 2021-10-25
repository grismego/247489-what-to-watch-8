import { MouseEvent } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { changeGenre } from '../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import { DEFAULT_GENRE } from '../../constants/constants';
import { State } from '../../store/reducer';
export type GenreType = any;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
});

const mapStateToProps = (state: State) => ({
  genre: state.genre,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type GenresType = PropsFromRedux & {
  genres: GenreType[]
}

export function Genres(props: GenresType): JSX.Element {
  const { genres, onChangeGenre } = props;

  const data = [DEFAULT_GENRE, ...new Set(genres.map((it) => it.name))];

  const handleChange = (genre: string) => (evt: MouseEvent) => {
    evt.preventDefault();
    onChangeGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {data.map((genre) => (
        <li className="catalog__genres-item" key={genre}
          onClick={handleChange(genre)}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default connector(Genres);
