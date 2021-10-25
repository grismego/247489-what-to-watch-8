type PropsType = {
  muted?: boolean,
  autoplay?: boolean,
  src: string,
  poster: string,
}

export function VideoPlayer({ autoplay = false, muted = true, src, poster }: PropsType): JSX.Element {
  return (
    <video
      src={src}
      poster={poster}
      muted={muted}
      autoPlay={autoplay}
      width="280"
      height="175"
    />
  );
}
