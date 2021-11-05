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
  setMovies
} from '../store/actions';

export enum ActionType {
  CHANGE_GENRE = 'CHANGE_GENRE',
  SET_MOVIES = 'SET_MOVIES',
  GET_MOVIES = 'GET_MOVIES'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof setMovies>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof getMovies>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
