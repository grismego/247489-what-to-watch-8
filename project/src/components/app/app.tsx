import { MainPage } from '../main-page/main-page';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { SignIn } from '../sign-in/sign-in';
import { AuthorizationStatus, Routes } from '../../constants/constants';
import { MoviePage } from '../movie-page/movie-page';
import { MyList } from '../my-list/my-list';
import { Player } from '../player/player';
import { PrivateRoute, PrivateRouteActionType } from '../private-route/private-route';
import { AddReview } from '../add-review/add-review';
import browserHistory from '../../browser-history';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/user/selectors';

function Loader():JSX.Element {
  // const authStatus = useSelector(getAuthStatus);

  return (
    <div>
      Loading ....
    </div>
  );

}

function App(): JSX.Element {

  const authStatus = useSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknow) {
    <Loader />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.MainPage()}>
          <MainPage />
        </Route>

        <Route path={Routes.Movie()} exact>
          <MoviePage />
        </Route>

        <PrivateRoute path={Routes.SignIn()} exact accessType={PrivateRouteActionType.Guest}>
          <SignIn />
        </PrivateRoute>

        <PrivateRoute exact path={Routes.MyList()} accessType={PrivateRouteActionType.User}>
          <MyList />
        </PrivateRoute>

        <PrivateRoute exact path={Routes.AddReview()} accessType={PrivateRouteActionType.User}>
          <AddReview />
        </PrivateRoute>

        <Route path={Routes.Player()} exact>
          <Player />
        </Route>

        <Route component={NotFound}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
