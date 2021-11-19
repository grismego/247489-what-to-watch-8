import browserHistory from '../browser-history';
import { Middleware } from 'redux';
import { ActionType } from '../types/actions';
import { RootState } from './root-reducer';

export const redirect: Middleware<unknown, RootState> = (_) => (dispatch) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }
  return dispatch(action);
};
