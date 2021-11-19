import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { AuthorizationStatus } from '../../constants/constants';
import { Routes } from '../../constants/constants';
import { getAuthStatus } from '../../store/user/selectors';

export enum PrivateRouteActionType {
  User = 'User',
  Guest = 'Guest',
}

type PrivateRouteProps =  {
  children: JSX.Element,
  exact: boolean,
  path: string,
  accessType: PrivateRouteActionType,
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const isAuth = useSelector(getAuthStatus);

  const { children, exact, path, accessType } = props;

  switch (accessType) {
    case PrivateRouteActionType.User:
      return (
        <Route exact={exact} path={path}>
          {isAuth === AuthorizationStatus.Auth ? children : <Redirect to={Routes.SignIn()} />}
        </Route>
      );
    case PrivateRouteActionType.Guest:
      return (
        <Route exact={exact} path={path}>
          {isAuth === AuthorizationStatus.NotAuth ? children : <Redirect to={Routes.MainPage()} />}
        </Route>
      );
  }
}
