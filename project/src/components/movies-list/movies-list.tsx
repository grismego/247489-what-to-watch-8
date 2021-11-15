import { useCallback, useState } from 'react';
import MovieCard, { MoviePropsType } from '../movie-card/movie-card';
import { useSelector } from 'react-redux';
import { getFilteredMovies } from '../../selectors/films';

export type MoviesListPropsType = {
  movies: MoviePropsType[],
  genre?: string
}

type MoviesListState = number;

export function MoviesList({ movies, genre }: MoviesListPropsType): JSX.Element {
  const [activeMovie, setActiveMovie] = useState<MoviesListState>(-1);

  const updateActiveMovie = useCallback((id: MoviesListState) => {
    setActiveMovie(id);
  }, []);

  const filteredMovies = useSelector(getFilteredMovies);

  return (
    <div className="catalog__films-list">
      {
        filteredMovies.map((movie: MoviePropsType) => (
          <MovieCard
            {...movie}
            key={movie.id}
            isActive={activeMovie === movie.id}
            updateActiveMovie={updateActiveMovie}
          />
        ))
      }
    </div>
  );
}

