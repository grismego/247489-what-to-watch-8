import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { movies } from './mocks/movies';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/actions';
import thunk from 'redux-thunk';
import {ThunkAppDispatch} from './types/actions';
import {fetchMovies} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization('fales')),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchMovies());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movies={movies}
        currentMovie={movies[0]}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
