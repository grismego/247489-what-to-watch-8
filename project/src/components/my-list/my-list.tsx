import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MoviesList, MoviesListPropsType } from '../movies-list/movies-list';

export function MyList({ movies }: MoviesListPropsType): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={movies} />
      </section>

      <Footer/>
    </div>
  );
}
