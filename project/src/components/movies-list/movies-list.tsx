import { useState } from 'react';
import { MovieCard, MoviePropsType } from '../movie-card/movie-card';

export type MoviesListPropsType = {
  movies: MoviePropsType[]
}

type MoviesListState = number

export function MoviesList({ movies }: MoviesListPropsType): JSX.Element {
  const [activeMovie, setActiveMovie] = useState<MoviesListState>(-1);

  const handleMouseEnter = (id: number): void => {
    setActiveMovie(id);
  };

  const handleMouseLeave = (): void => {
    setActiveMovie(-1);
  };

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie: MoviePropsType) => (
          <MovieCard
            {...movie}
            key={movie.id}
            isActive={activeMovie === movie.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))
      }
    </div>
  );
}

