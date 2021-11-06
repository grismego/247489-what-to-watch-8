import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';

import { State } from '../store/reducer';

import {
  changeGenre,
  getMovies,
  requireAuthorization,
  setMovies,
  requireLogout,
  logIn
} from '../store/actions';

export enum ActionType {
  CHANGE_GENRE = 'CHANGE_GENRE',
  SET_MOVIES = 'SET_MOVIES',
  GET_MOVIES = 'GET_MOVIES',
  REDIRECT = 'REDIRECT',
  REQUIRE_AUTH = 'REQUIRE_AUTH',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof setMovies>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof getMovies>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof logIn>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
