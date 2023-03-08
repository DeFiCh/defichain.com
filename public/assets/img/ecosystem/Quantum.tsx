import Image from "next/image";
import QuantumDonut from "./quantum-donut.png";
import QuantumIconHover from "./quantum-hover.png";
import QuantumEllipseBackground from "./quantum-bg-gradient.png";

interface QuantumProps {
  id: string;
  className?: string;
}
export function Quantum(props: QuantumProps): JSX.Element {
  const { id, className } = props;
  return (
    <div>
      <Image
        src={QuantumDonut}
        alt="Quantum Donut Icon"
        id={`${id}_donut`}
        className={className}
      />
      <Image
        src={QuantumEllipseBackground}
        alt="Quantum Background"
        className="absolute right-0 z-10"
      />
    </div>
  );
}

export function QuantumHover(props: QuantumProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={QuantumIconHover}
      alt="Quantum Icon Hover"
      id={id}
      className={className}
    />
  );
}
