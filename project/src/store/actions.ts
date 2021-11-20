import { AuthorizationStatus, NewComemntStatus, Routes } from '../constants/constants';
import { ActionType } from '../types/actions';
import { MoviePropsType, UserCommentType } from '../types/movie';
import { UserInfo } from '../types/user';

export const changeGenre = (genre: string) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
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


export const redirectToRoute = (url: typeof Routes | string) => ({
  type: ActionType.REDIRECT,
  payload: url,
} as const);

export const requireLogout = () => ({
  type: ActionType.LOG_OUT,
} as const);

export const setUserInfo = (userInfo: UserInfo) => ({
  type: ActionType.SET_USER_INFO,
  payload: {
    userInfo,
  },
} as const);

export const loadCurrentMovie = (movie: MoviePropsType) => ({
  type: ActionType.LOAD_CURRENT_MOVIE,
  payload: {
    movie,
  },
} as const);

export const loadSimilarMovies  = (movies: MoviePropsType[]) => ({
  type: ActionType.LOAD_SIMILAR_MOVIES,
  payload: {
    movies,
  },
} as const);

export const loadComments = (comments: UserCommentType[]) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: {
    comments,
  },
} as const);

export const loadPromoMovie = (movie: MoviePropsType) => ({
  type: ActionType.LOAD_PROMO,
  payload: {
    movie,
  },
} as const);

export const loadFavoriteMovies = (movies: MoviePropsType[]) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: {
    movies,
  },
} as const);

export const setCommentStatus = (status: NewComemntStatus) => ({
  type: ActionType.SET_COMMENT_STATUS,
  payload: status,
} as const);
