import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/actions';
import thunk from 'redux-thunk';
import { ThunkAppDispatch } from './types/actions';
import { checkAuth, fetchMovies } from './store/api-actions';
import { AuthorizationStatus } from './constants/constants';
import { redirect } from './store/middleware';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOAST_LIMIT = 1;

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth)),
);


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuth());
(store.dispatch as ThunkAppDispatch)(fetchMovies());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer limit={TOAST_LIMIT}/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
