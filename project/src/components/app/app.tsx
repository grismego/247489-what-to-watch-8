import { MainPage } from '../main-page/main-page';
import { MoviePropsType } from '../movie-card/movie-card';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { SignIn } from '../sign-in/sign-in';
import { AuthorizationStatus, Routes } from '../../constants/constants';
import { MoviePage } from '../movie-page/movie-page';
import { MyList } from '../my-list/my-list';
import { Player } from '../player/player';
import { PrivateRoute } from '../private-route/private-route';
import { AddReview } from '../add-review/add-review';
import browserHistory from '../../browser-history';

type AppProps = {
  movies: Array<MoviePropsType>,
  currentMovie: MoviePropsType,
}

function App({ movies, currentMovie}: AppProps): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainPage
            movies={movies}
            currentMovie={currentMovie}
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

    </BrowserRouter>
  );
}

export default App;
