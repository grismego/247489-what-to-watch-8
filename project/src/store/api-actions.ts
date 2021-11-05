import { ThunkActionResult } from '../types/actions';
// import { MoviePropsType } from '../components/movie-card/movie-card';
import { getMovies } from './actions';
import { ApiRoute } from '../constants/constants';
import {adapterToClient} from '../services/adapter';
// import {adapterToClient} from '../services/adapter';

export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<[]>(ApiRoute.Movies);
    dispatch(getMovies(adapterToClient(data)));
  };
