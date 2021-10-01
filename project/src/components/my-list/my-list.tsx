import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MoviesList } from '../movies-list/movies-list';
import movies from '../../mocks/movies.json';

export function MyList(): JSX.Element {
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
