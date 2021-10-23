import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';

export type MoviePropsType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string | string[],
  released: number,
  isFavorite: boolean,
  isActive?: boolean,
}

type MovieCardPropsType = MoviePropsType & {
  updateActiveMovie: (id: number) => void,
}

const TIMEOUT = 1000;

export function MovieCard(props: MovieCardPropsType): JSX.Element {
  const {
    name,
    posterImage,
    id,
    previewVideoLink,
    updateActiveMovie,
    isActive,
  } = props;

  let timer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    timer = setTimeout(() => updateActiveMovie(id), TIMEOUT);
  };

  const handleMouseLeave = () => {
    updateActiveMovie(-1);
    clearTimeout(timer);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {isActive
          ? <VideoPlayer src={previewVideoLink} poster={posterImage} autoplay />
          : <img src={posterImage} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
