import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';


import {
  changeGenre,
  getMovies,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  setUserInfo,
  loadCurrentMovie,
  loadSimilarMovies,
  loadComments,
  loadPromoMovie,
  loadFavoriteMovies,
  setCommentStatus
} from '../store/actions';
import { RootState } from '../store/root-reducer';

export enum ActionType {
  CHANGE_GENRE = 'CHANGE_GENRE',
  GET_MOVIES = 'GET_MOVIES',
  REDIRECT = 'REDIRECT',
  REQUIRE_AUTH = 'REQUIRE_AUTH',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  SET_USER_INFO = 'SET_USER_INFO',
  LOAD_CURRENT_MOVIE = 'LOAD_CURRENT_MOVIE',
  LOAD_SIMILAR_MOVIES = 'LOAD_SIMILAR_MOVIES',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
  LOAD_PROMO = 'LOAD_PROMO',
  LOAD_FAVORITES = 'LOAD_FAVORITES',
  SET_COMMENT_STATUS = 'SET_COMMENT_STATUS'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof getMovies>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof loadCurrentMovie>
  | ReturnType<typeof loadSimilarMovies>
  | ReturnType<typeof loadComments>
  | ReturnType<typeof loadPromoMovie>
  | ReturnType<typeof loadFavoriteMovies>
  | ReturnType<typeof setCommentStatus>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Actions>;
