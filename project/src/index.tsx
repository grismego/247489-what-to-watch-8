import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { movies } from './mocks/movies';
import genres from './mocks/genres.json';

ReactDOM.render(
  <React.StrictMode>
    <App
      movies={movies}
      currentMovie={movies[0]}
      genres={genres}
    />
  </React.StrictMode>,
  document.getElementById('root'));
