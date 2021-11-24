import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducer';
import { userReducer } from './user/reducer';

export enum NameSpace {
  Movie = 'Movie',
  User = 'User',
}

export const rootReducer = combineReducers({
  [NameSpace.Movie]: moviesReducer,
  [NameSpace.User]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
