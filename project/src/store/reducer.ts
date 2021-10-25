import { MoviePropsType } from '../components/movie-card/movie-card';
import { Actions, ActionType } from '../types/actions';
import { GenreType } from '../components/genre/genre';
import { DEFAULT_GENRE } from '../constants/constants';

export type State = {
  genre: GenreType,
  movies: MoviePropsType[]
}

const initialState: State = {
  genre: typeof DEFAULT_GENRE,
  movies: [],
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return { ...state, genre: action.payload };
    case ActionType.SET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export { reducer };
