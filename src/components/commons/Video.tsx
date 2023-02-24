interface GifProps {
  src: string;
  width?: number;
  height?: number;
}

export function Video(props: GifProps): JSX.Element {
  const { src, width, height } = props;
  return (
    <video autoPlay muted loop>
      <source src={src} type="video/mp4" width={width} height={height} />
    </video>
  );
}
