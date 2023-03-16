import Image from "next/image";
import GlassCubeIcon from "./glass-cube.png";
import GlassCubeIconHover from "./glass-cube-hover.png";

interface GlassCubeProps {
  id: string;
  className?: string;
}

export function GlassCube(props: GlassCubeProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={GlassCubeIcon}
      alt="Glass Cube Icon"
      id={id}
      className={className}
    />
  );
}

export function GlassCubeHover(props: GlassCubeProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={GlassCubeIconHover}
      alt="Glass Cube Icon"
      id={id}
      className={className}
    />
  );
}
