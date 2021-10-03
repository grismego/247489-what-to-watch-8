import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import films from './mocks/movies.json';
import genres from './mocks/genres.json';

ReactDOM.render(
  <React.StrictMode>
    <App
      movies={films}
      currentMovie={films[0]}
      genres={genres}
    />
  </React.StrictMode>,
  document.getElementById('root'));
