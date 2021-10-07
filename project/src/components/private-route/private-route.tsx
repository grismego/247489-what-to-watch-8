import { Redirect, Route, RouteProps } from 'react-router';
import { AuthorizationStatus } from '../../constants/constants';
import { Routes } from '../../constants/constants';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus],
}

export function PrivateRoute({ authorizationStatus, ...props }: PrivateRouteProps): JSX.Element {
  return (
    <Route { ...props }>
      {
        authorizationStatus === AuthorizationStatus.Auth
          ? props.children
          : <Redirect to={Routes.SIGN_IN} />
      }
    </Route>
  );
}
