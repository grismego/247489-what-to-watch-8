import { MoviePropsType } from '../../components/movie-card/movie-card';
import { DEFAULT_GENRE } from '../../constants/constants';
import { Actions, ActionType } from '../../types/actions';

type MovieState = {
  movies: MoviePropsType[],
  genre: string
}

const initialState: MovieState = {
  movies: [],
  genre: DEFAULT_GENRE,
};

export const moviesReducer = (state = initialState, action: Actions): MovieState => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return { ...state, genre: action.payload };
    case ActionType.GET_MOVIES:
      return { ...state, movies: action.payload.movies };
    default:
      return state;
  }
};
