import { GenreType } from '../genres/genres';
import { MainPage } from '../main-page/main-page';
import { MoviePropsType } from '../movie-card/movie-card';

type AppProps = {
  movies: Array<MoviePropsType>,
  currentMovie: MoviePropsType,
  genres: Array<GenreType>
}

function App({movies, currentMovie, genres}: AppProps): JSX.Element {
  return (
    <MainPage
      movies={movies}
      currentMovie={currentMovie}
      genres={genres}
    />
  );
}

export default App;
