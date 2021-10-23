import { useEffect, useRef, useState } from 'react';

type PropsType = {
  muted?: boolean,
  autoplay?: boolean,
  src: string,
  poster: string,
}

export function VideoPlayer({ autoplay = false, muted = true, src, poster }: PropsType): JSX.Element {
  const [isPlaying] = useState(autoplay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video
      src={src}
      poster={poster}
      muted={muted}
      ref={videoRef}
      width="280"
      height="175"
    />
  );
}
