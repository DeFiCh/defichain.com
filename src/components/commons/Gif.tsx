import Image, { StaticImageData } from "next/image";

interface GifProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export function Gif(props: GifProps): JSX.Element {
  const { src, alt, width, height } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
    />
  );
}
