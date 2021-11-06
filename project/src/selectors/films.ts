import { createSelector } from 'reselect';
import { MoviePropsType } from '../components/movie-card/movie-card';
import { NameSpace, RootState } from '../store/root-reducer';

const getMovies = (state: RootState): MoviePropsType[] => state[NameSpace.Data].movies;

const getGenre = (state: RootState): string => state[NameSpace.Data].genre;

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
