interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  id?: string;
}

export function Video(props: VideoProps): JSX.Element {
  const { src, width, height, poster, id } = props;
  return (
    <video id={id} poster={poster} autoPlay muted playsInline loop>
      <source src={src} type="video/mp4" width={width} height={height} />
    </video>
  );
}
