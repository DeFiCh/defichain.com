import Image from "next/image";
import CubeBG from "./cube.png";

interface CubeProps {
  id: string;
}
export function Cube(props: CubeProps): JSX.Element {
  const { id } = props;
  return (
    <div>
      {/* className not used as id is being used in globals.css */}
      <Image src={CubeBG} alt="cube Icon" id={id} />
    </div>
  );
}
