import browserHistory from '../browser-history';
import { Middleware } from 'redux';
import { State } from './reducer';
import { ActionType } from '../types/actions';

export const redirect: Middleware<unknown, State> = (_) => (dispatch) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }
  return dispatch(action);
};
