import { MoviePropsType } from '../components/movie-card/movie-card';
import { AuthorizationStatus, Routes } from '../constants/constants';
import { ActionType } from '../types/actions';

export const changeGenre = (genre: string) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
} as const);

export const setMovies = (movies: MoviePropsType[]) => ({
  type: ActionType.SET_MOVIES,
  payload: movies,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: authStatus,
} as const);

export const getMovies = (movies: MoviePropsType[]) => ({
  type: ActionType.GET_MOVIES,
  payload: {
    movies,
  },
} as const);


export const redirectToRoute = (url: Routes | string) => ({
  type: ActionType.REDIRECT,
  payload: url,
}) as const;

export const requireLogout = () => ({
  type: ActionType.LOG_OUT,
} as const);

export const logIn = (userInfo: any) => ({
  type: ActionType.LOG_IN,
  payload: userInfo,
} as const);
