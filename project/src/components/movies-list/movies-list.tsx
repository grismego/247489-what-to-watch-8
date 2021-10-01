import { MovieCard, MoviePropsType } from '../movie-card/movie-card';

export type MoviesListPropsType = {
  movies: MoviePropsType[]
}

export function MoviesList({ movies }: MoviesListPropsType): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        movies.map((movie: MoviePropsType)=> <MovieCard {...movie} key={movie.id}/>)
      }
    </div>
  );
}

