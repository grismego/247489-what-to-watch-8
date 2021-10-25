import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { movies } from './mocks/movies';
import genres from './mocks/genres.json';
import { createStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movies={movies}
        currentMovie={movies[0]}
        genres={genres}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
