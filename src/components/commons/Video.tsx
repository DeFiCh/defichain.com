interface VideoProps {
  src: string;
  width?: number;
  height?: number;
}

export function Video(props: VideoProps): JSX.Element {
  const { src, width, height } = props;
  return (
    <video
      poster="/assets/img/index/dficoin.png"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4" width={width} height={height} />
    </video>
  );
}
