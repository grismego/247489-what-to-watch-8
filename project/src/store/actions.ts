// import { GenreType } from '../components/genre/genre';
import { MoviePropsType } from '../components/movie-card/movie-card';
import { ActionType } from '../types/actions';

export const changeGenre = (genre: string) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
} as const);

export const SetMovies = (movies: MoviePropsType[]) => ({
  type: ActionType.SET_MOVIES,
  payload: movies,
} as const);

export const requireAuthorization = (status: string) => ({
  type: '',
  payload: status,
} as const);
