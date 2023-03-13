import Image from "next/image";
import QuantumDonut from "./quantum-donut.png";
import QuantumIconHover from "./quantum-hover.png";
import QuantumEllipseBackground from "./quantum-bg-gradient.png";

interface QuantumProps {
  id: string;
}
export function Quantum(props: QuantumProps): JSX.Element {
  const { id } = props;
  return (
    <div>
      {/* className not used as id is being used in globals.css */}
      <Image src={QuantumDonut} alt="Quantum Donut Icon" id={`${id}_donut`} />
      <Image src={QuantumEllipseBackground} alt="Quantum Background" />
    </div>
  );
}

export function QuantumHover(props: QuantumProps): JSX.Element {
  const { id } = props;
  return <Image src={QuantumIconHover} alt="Quantum Icon Hover" id={id} />;
}
