import { GenreType } from '../genres/genres';
import { MainPage } from '../main-page/main-page';
import { MoviePropsType } from '../movie-card/movie-card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { SignIn } from '../sign-in/sign-in';
import { AuthorizationStatus, Routes } from '../../constants/constants';
import { MoviePage } from '../movie-page/movie-page';
import { MyList } from '../my-list/my-list';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';
import { AddReview } from '../add-review/add-review';

type AppProps = {
  movies: Array<MoviePropsType>,
  currentMovie: MoviePropsType,
  genres: Array<GenreType>
}

function App({ movies, currentMovie, genres }: AppProps): JSX.Element {
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

        <Route path={Routes.FILM} exact component={MoviePage} />

        <Route path={Routes.SIGN_IN} exact component={SignIn}/>

        <PrivateRoute
          path={Routes.MY_LIST}
          exact
          authorizationStatus={AuthorizationStatus.NotAuth}
        >
          <MyList movies={movies}/>
        </PrivateRoute>

        <PrivateRoute
          path={Routes.ADD_REVIEW}
          exact
          authorizationStatus={AuthorizationStatus.Auth}
          component={AddReview}
        />

        <Route
          path={Routes.PLAYER}
          exact
          component={Player}
        />

        <Route component={NotFound}/>
      </Switch>

    </Router>
  );
}

export default App;
