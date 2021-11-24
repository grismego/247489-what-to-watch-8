import { MoviePropsType } from '../../types/movie';
import MovieCard from '../movie-card/movie-card';

export type MoviesListPropsType = {
  movies: MoviePropsType[],
  moviesCount?: number
}
export function MoviesList({ movies, moviesCount }: MoviesListPropsType): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        movies.length ?
          movies
            .slice(0, moviesCount)
            .map((movie: MoviePropsType) => (
              <MovieCard
                {...movie}
                key={movie.id}
              />
            ))
          : null
      }
    </div>
  );
}

