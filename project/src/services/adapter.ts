// import {MoviePropsType} from '../components/movie-card/movie-card';


// import {MoviePropsType} from '../components/movie-card/movie-card';


const adapter = (movie: any) => ({
  ...movie,
  posterImage: movie['poster_image'],
  previewImage: movie['preview_image'],
  backgroundImage: movie['background_image'],
  backgroundColor: movie['background_color'],
  scoresCount: movie['scores_count'],
  runTime: movie['run_time'],
  isFavorite: movie['is_favorite'],
  videoLink: movie['video_link'],
  previewVideoLink: movie['preview_video_link'],
});

export const adapterToClient = (movies: []) => movies.map(adapter);


// {
//   "name": "Fantastic Beasts: The Crimes of Grindelwald",
//   "poster_image": "https://8.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg",
//   "preview_image": "https://8.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg",
//   "background_image": "https://8.react.pages.academy/static/film/background/Fantastic_Beasts.jpg",
//   "background_color": "#B6A99F",
//   "description": "In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
//   "rating": 3.4,
//   "scores_count": 160757,
//   "director": "David Yates",
//   "starring": [
//   "Eddie Redmayne",
//   "Katherine Waterston",
//   "Dan Fogler"
// ],
//   "run_time": 134,
//   "genre": "Fantasy",
//   "released": 2018,
//   "id": 1,
//   "is_favorite": false,
//   "video_link": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
//   "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
// }
