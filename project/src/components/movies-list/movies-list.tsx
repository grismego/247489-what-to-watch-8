import { useState } from 'react';
import { MovieCard, MoviePropsType } from '../movie-card/movie-card';

export type MoviesListPropsType = {
  movies: MoviePropsType[]
}

type MoviesListState = number;

export function MoviesList({ movies }: MoviesListPropsType): JSX.Element {
  const [activeMovie, setActiveMovie] = useState<MoviesListState>(-1);

  const updateActiveMovie = (id: MoviesListState) => {
    setActiveMovie(id);
  };

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie: MoviePropsType) => (
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

