import { DEFAULT_GENRE } from '../../constants/constants';
import { Actions, ActionType } from '../../types/actions';
import { UserCommentType, MoviePropsType } from '../../types/movie';

type MovieState = {
  movies: MoviePropsType[],
  genre: string,
  currentMovie: MoviePropsType,
  similarMovies: MoviePropsType[],
  comments: UserCommentType[],
  promoMovie: MoviePropsType,
  favouriteMovies: MoviePropsType[],
}

const initialState: MovieState = {
  movies: [],
  genre: DEFAULT_GENRE,
  currentMovie: {} as MoviePropsType,
  similarMovies: [],
  comments: [],
  promoMovie: {} as MoviePropsType,
  favouriteMovies: [],
};

export const moviesReducer = (state = initialState, action: Actions): MovieState => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return { ...state, genre: action.payload };
    case ActionType.GET_MOVIES:
      return { ...state, movies: action.payload.movies };
    case ActionType.LOAD_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload.movie };
    case ActionType.LOAD_SIMILAR_MOVIES:
      return { ...state, similarMovies: action.payload.movies };
    case ActionType.LOAD_COMMENTS:
      return { ...state, comments: action.payload.comments };
    case ActionType.LOAD_PROMO:
      return { ...state, promoMovie: action.payload.movie };
    case ActionType.LOAD_FAVORITES:
      return { ...state, favouriteMovies: action.payload.movies };
    default:
      return state;
  }
};
