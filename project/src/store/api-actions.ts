import { ThunkActionResult } from '../types/actions';
import { getMovies,
  loadComments,
  loadCurrentMovie,
  loadPromoMovie,
  loadSimilarMovies,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setUserInfo,
  loadFavoriteMovies,
  setCommentStatus
} from './actions';

import { ApiRoute, AuthorizationStatus, NewComemntStatus, Routes} from '../constants/constants';
import { AuthData  } from '../types/user';
import { saveToken, dropToken } from '../services/token';
import { CommentType, ServerMovie, UserCommentType } from '../types/movie';
import { adapterMovieToClient } from '../services/adapter';
import { NameSpace } from './root-reducer';
import { toast } from 'react-toastify';

export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ServerMovie[]>(ApiRoute.Movies());
      const movies = data.map(adapterMovieToClient);
      dispatch(getMovies(movies));
    }
    catch {
      toast.error('Не удалось загрузить фильмы!', { position: toast.POSITION.TOP_LEFT });
    }
  };


export const checkAuth = (): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get(ApiRoute.Login());
    dispatch(setUserInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
  }
};

export const logIn = ({ email, password }: AuthData): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(ApiRoute.Login(), { email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserInfo(data));
    dispatch(redirectToRoute(Routes.MainPage()));
  }
  catch {
    toast.error('Ошибка авторизации', { position: toast.POSITION.TOP_LEFT });
  }
};

export const logOut = (): ThunkActionResult => async (dispatch, _getState, api) => {
  await api.delete(ApiRoute.Logout());
  dropToken();
  dispatch(requireLogout());
};

export const fetchMovie = (id: string): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get<ServerMovie>(ApiRoute.Movie(id));
    dispatch(loadCurrentMovie(adapterMovieToClient(data)));
  } catch {
    dispatch(redirectToRoute(Routes.NotFound()));
  }
};

export const fetchPromoMovie = (): ThunkActionResult => async (dispatch, _getState, api): Promise<void> => {
  const { data } = await api.get<ServerMovie>(ApiRoute.Promo());
  dispatch(loadPromoMovie(adapterMovieToClient(data)));
};

export const fetchSimiliarMovies = (id: string): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get(ApiRoute.Similar(id));
    const movies = data.map(adapterMovieToClient);
    dispatch(loadSimilarMovies(movies));
  } catch {
    toast.error('Не удалось загрузить похожие фильмы!', { position: toast.POSITION.TOP_LEFT });
  }
};

export const fetchFavoritesMovies = (): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get<ServerMovie[]>(ApiRoute.Favorite());
    const movies = data.map(adapterMovieToClient);
    dispatch(loadFavoriteMovies(movies));
  }
  catch {
    toast.error('Не удалось загрузить любимые фильмы!', { position: toast.POSITION.TOP_LEFT });
  }
};

export const fetchComments = (id: string): ThunkActionResult => async (dispatch, _getState, api) => {

  try {
    const { data } = await api.get<UserCommentType[]>(ApiRoute.Comments(id));
    dispatch(loadComments(data));
  } catch {
    toast.error('Не удалось загрузить комментарии!', { position: toast.POSITION.TOP_LEFT });
  }
};

export const postComments = (id: string, comment: CommentType): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(ApiRoute.Comments(id), comment);

    dispatch(loadComments(data));
    dispatch(redirectToRoute(ApiRoute.Movie(id)));
    dispatch(setCommentStatus(NewComemntStatus.Idle));
  } catch {
    dispatch(setCommentStatus(NewComemntStatus.Idle));
    toast.error('Не удалось отправить комментарий!', { position: toast.POSITION.TOP_LEFT });
  }
};

export const changeFavorite = (id: number, status: number): ThunkActionResult => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post(ApiRoute.FavouriteStatus(id, status));

    const state = getState();

    if (state[NameSpace.Movie].promoMovie.id === id) {
      dispatch(loadPromoMovie(adapterMovieToClient(data)));
    }

    if (state[NameSpace.Movie].currentMovie.id === id) {
      dispatch(loadCurrentMovie(adapterMovieToClient(data)));
    }
  } catch {
    if (status) {
      toast.error('Не удалось добавить в избранное', { position: toast.POSITION.TOP_LEFT });
      return;
    }
    toast.error('Не удалось удалить из избранного', { position: toast.POSITION.TOP_LEFT });
  }
};
