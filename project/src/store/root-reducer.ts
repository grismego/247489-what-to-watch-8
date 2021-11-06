import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducer';
import { userReducer } from './user/reducer';

export enum NameSpace {
  Data = 'Data',
  User = 'User',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: moviesReducer,
  [NameSpace.User]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
