import { createSelector } from 'reselect';
import { State } from '../store/reducer';

const getMovies = (state: State) => state.movies;

const getGenre = (state: State) => state.genre;

const getFilteredMovies = createSelector(
  [getMovies, getGenre],
  (movies, genre) => genre === 'All Genres'
    ? movies
    : movies.filter((it) => it.genre === genre),
);


export {
  getMovies,
  getFilteredMovies
};
