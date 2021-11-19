import { Link, useHistory } from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';
import { memo, useState } from 'react';
import { MoviePropsType } from '../../types/movie';

const TIMEOUT = 1000;

function MovieCard(props: MoviePropsType): JSX.Element {
  const {
    name,
    previewImage,
    id,
    previewVideoLink,
  } = props;

  const [isPlaying, setPlaying] = useState(false);

  const history = useHistory();

  let timer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    timer = setTimeout(() => setPlaying(true), TIMEOUT);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    clearTimeout(timer);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        history.push(`/films/${id}`);
      }}
    >
      <div className="small-film-card__image">
        {isPlaying
          ? <VideoPlayer src={previewVideoLink} poster={previewImage} autoplay />
          : <img src={previewImage} alt={name} width="280" height="175" /> }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default memo(MovieCard);
