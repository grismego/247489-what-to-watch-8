import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { movies } from './mocks/movies';
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
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
