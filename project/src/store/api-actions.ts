import { ThunkActionResult } from '../types/actions';
// import { MoviePropsType } from '../components/movie-card/movie-card';
import { getMovies, requireAuthorization } from './actions';
import { ApiRoute, AuthorizationStatus} from '../constants/constants';
import {adapterToClient} from '../services/adapter';
// import {adapterToClient} from '../services/adapter';

export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<[]>(ApiRoute.Movies);
    dispatch(getMovies(adapterToClient(data)));
  };


export const checkAuth = (): ThunkActionResult => async (dispatch, _getState, api) => {
  await api.get(ApiRoute.Login);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
};
