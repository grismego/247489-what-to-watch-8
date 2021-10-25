import { changeGenre, SetMovies } from '../store/actions';

export enum ActionType {
  CHANGE_GENRE = 'CHANGE_GENRE',
  SET_MOVIES = 'SET_MOVIES'
}

export type Actions = ReturnType<typeof changeGenre> | ReturnType<typeof SetMovies>
