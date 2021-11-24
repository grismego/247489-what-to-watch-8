import { createSelector } from 'reselect';
import { NameSpace, RootState } from '../../store/root-reducer';
import { MoviePropsType, UserCommentType } from '../../types/movie';

const getMovies = (state: RootState): MoviePropsType[] => state[NameSpace.Movie].movies;

const getGenre = (state: RootState): string => state[NameSpace.Movie].genre;

const getFilteredMovies = createSelector(
  [getMovies, getGenre],
  (movies, genre) => genre === 'All Genres'
    ? movies
    : movies.filter((it) => it.genre === genre),
);

const getCurrentMovie = (state: RootState): MoviePropsType => state[NameSpace.Movie].currentMovie;

const getFavoriteMovies = (state: RootState): MoviePropsType[] => state[NameSpace.Movie].favouriteMovies;

const getSimilarMovies = (state: RootState): MoviePropsType[] => state[NameSpace.Movie].similarMovies;

const getComments = (state: RootState): UserCommentType[] => state[NameSpace.Movie].comments;

const getPromoMovie = (state: RootState): MoviePropsType => state[NameSpace.Movie].promoMovie;

export {
  getMovies,
  getGenre,
  getFilteredMovies,
  getCurrentMovie,
  getSimilarMovies,
  getComments,
  getPromoMovie,
  getFavoriteMovies
};
