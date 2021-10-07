import { GenreType } from '../genres/genres';
import { MainPage } from '../main-page/main-page';
import { MoviePropsType } from '../movie-card/movie-card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { SignIn } from '../sign-in/sign-in';
import {AuthorizationStatus, Routes} from '../../constants/constants';
import { MoviePage } from '../movie-page/movie-page';
import { MyList } from '../my-list/my-list';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
  movies: Array<MoviePropsType>,
  currentMovie: MoviePropsType,
  genres: Array<GenreType>
}

function App({movies, currentMovie, genres}: AppProps): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainPage
            movies={movies}
            currentMovie={currentMovie}
            genres={genres}
          />
        </Route>

        <Route path={Routes.FILM} exact>
          <MoviePage />
        </Route>

        <Route path={Routes.SIGN_IN} exact component={SignIn}/>

        <PrivateRoute path={Routes.MY_LIST} exact authorizationStatus={AuthorizationStatus.NotAuth}>
          <MyList/>
        </PrivateRoute>

        <PrivateRoute path={Routes.ADD_REVIEW} exact authorizationStatus={AuthorizationStatus.NotAuth}>
          <MoviePageReviews/>
        </PrivateRoute>

        <Route path={Routes.PLAYER} exact>
          <Player/>
        </Route>

        <Route component={NotFound}/>
      </Switch>

    </Router>
  );
}

export default App;
