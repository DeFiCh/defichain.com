import { Dispatch, SetStateAction } from "react";

interface VideoProps {
  setIsVideoLoaded: Dispatch<SetStateAction<boolean>>;
  src: string;
  width?: number;
  height?: number;
}

export function Video(props: VideoProps): JSX.Element {
  const { setIsVideoLoaded, src, width, height } = props;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      onLoadedData={() => {
        setIsVideoLoaded(true);
      }}
    >
      <source src={src} type="video/mp4" width={width} height={height} />
    </video>
  );
}
