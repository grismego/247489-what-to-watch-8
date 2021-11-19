import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/constants';
import { logIn } from '../../store/api-actions';
import { SignInError } from '../sign-in-error/sign-in-error';
import { SignInMessage } from '../sign-in-message/sign-in-message';

enum ErrorTypes {
  PasswordError = 'Password-error',
  EmailError = 'Email-error',
  NoError = 'No-error',
}

const regExpPassword = /[A-Za-z0-9]{2}/;
const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,2}$/;


export function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorType, setErrorType] = useState<ErrorTypes>(ErrorTypes.NoError);
  const dispatch = useDispatch();

  const checkPassword = (inputPassword: string) => regExpPassword.test(inputPassword);
  const checkEmail = (inputEmail: string) => regExpEmail.test(inputEmail);

  const renderError = () => {
    if (errorType === ErrorTypes.EmailError) {
      return <SignInError/>;
    }
    if (errorType === ErrorTypes.PasswordError) {
      return <SignInMessage/>;
    }
  };

  const inputEmailHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = evt.target.value;
    setEmail(inputEmail);
  };

  const inputPasswordHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = evt.target.value;
    setPassword(inputPassword);
  };

  const formSubmitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();

    setErrorType(ErrorTypes.NoError);

    if (!checkEmail(email)) {
      setErrorType(ErrorTypes.EmailError);
      return;
    }

    if (!checkPassword(password)) {
      setErrorType(ErrorTypes.PasswordError);
      return;
    }

    dispatch(logIn({ email, password }));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={Routes.MainPage()} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={formSubmitHandler}>
          {
            renderError()
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={email} onChange={inputEmailHandler} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={password} onChange={inputPasswordHandler} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
