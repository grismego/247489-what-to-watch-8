import { MoviePropsType } from '../components/movie-card/movie-card';
import { Actions, ActionType } from '../types/actions';

export type State = {
  genre: string,
  movies: MoviePropsType[]
}

const initialState: State = {
  genre: 'All Genres',
  movies: [],
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return { ...state, genre: action.payload };
    case ActionType.GET_MOVIES:
      return { ...state, movies: action.payload.movies };
    default:
      return state;
  }
};

export { reducer };
