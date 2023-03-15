import Image from "next/image";
import QuantumDonut from "./quantum-donut.png";
import QuantumEllipseBackground from "./quantum-bg-gradient.png";

interface QuantumProps {
  id: string;
}
export function Quantum(props: QuantumProps): JSX.Element {
  const { id } = props;
  return (
    <div>
      {/* className not used as id is being used in globals.css */}
      <Image
        src={QuantumEllipseBackground}
        alt="Quantum Background"
        id={`${id}_ellipse_bg`}
      />
      <Image src={QuantumDonut} alt="Quantum Donut Icon" id={`${id}_donut`} />
    </div>
  );
}

export function QuantumHover(props: QuantumProps): JSX.Element {
  const { id } = props;
  return (
    <div>
      <Image
        src={QuantumEllipseBackground}
        alt="Quantum Background Hover"
        id={`${id}_ellipse_bg`}
      />
      <Image src={QuantumDonut} alt="Quantum Icon Hover" id={`${id}_donut`} />
    </div>
  );
}
