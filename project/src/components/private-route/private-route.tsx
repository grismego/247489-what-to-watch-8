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
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const isAuth = useSelector(getAuthStatus);

  const { children, exact, path } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuth === AuthorizationStatus.Auth
          ? children
          : <Redirect to={Routes.SignIn()}/>
      )}
    />);
}
