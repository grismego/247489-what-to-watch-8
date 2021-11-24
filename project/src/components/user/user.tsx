import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AuthorizationStatus, Routes } from '../../constants/constants';
import { getAuthStatus, getAvatar } from '../../store/user/selectors';
import { logOut } from '../../store/api-actions';

export function User(): JSX.Element {

  const authStatus = useSelector(getAuthStatus);
  const avatar = useSelector(getAvatar);

  const isAuth = authStatus === AuthorizationStatus.Auth;

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutButtonClickHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logOut());
  };

  return isAuth ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={() => history.push(Routes.MyList())}>
          <img src={avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" href="#" onClick={logoutButtonClickHandler}>Sign out</a>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link to={Routes.SignIn()} className="user-block__link">Sign in</Link>
    </div>
  );
}
