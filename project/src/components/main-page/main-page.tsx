import Genres, { GenreType } from '../genres/genres';

import { FilmCardMain } from '../movie-card-main/film-card-main';
import { Footer } from '../footer/footer';
import { MoviePropsType } from '../movie-card/movie-card';
import { MoviesList } from '../movies-list/movies-list';

type MainPageProps = {
  movies: MoviePropsType[],
  currentMovie: MoviePropsType,
  genres: GenreType[]
}

export function MainPage(
  {
    movies,
    currentMovie,
    genres,
  }: MainPageProps): JSX.Element {

  return (
    <>
      <FilmCardMain {...currentMovie} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres genres={genres} />

          <MoviesList movies={movies} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
